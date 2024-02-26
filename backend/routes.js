const express = require('express');
const router = express.Router();

const { registerUser,loginUser,showAppointment } = require('./userController');

router.post('/register', registerUser);


//Login purpose 

router.post('/login', loginUser);


//Appointment Show
router.get('/appointment', showAppointment);




module.exports = router;




