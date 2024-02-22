const User = require('./Users');
const bcrypt = require('bcrypt');

// Register
const registerUser = async (req, res) => {
    try {
        const userData = req.body;

        const hashedPassword = await bcrypt.hash(userData.password, 10); 
        userData.password = hashedPassword;

        const newUser = new User(userData);
        await newUser.save();
        res.status(200).json({ success: true, message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            console.log('User with email', email, 'not found');
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

        console.log('Found user:', user);
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        console.log('Is password match:', isPasswordMatch);
        if (!isPasswordMatch) {
            console.log('Password does not match for user:', email);
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

        console.log('Password matches for user:', email);
        console.log('User', email, 'successfully logged in');

        res.status(200).json({ success: true, user });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

module.exports = { registerUser, loginUser };
