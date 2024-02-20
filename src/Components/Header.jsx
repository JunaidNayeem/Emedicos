import React from "react";
import { Layout, Menu, Dropdown, Avatar } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

const { Header } = Layout;

const HeaderComponent = () => {
  // Dummy function for logout (replace with actual logout logic)
  const handleLogout = () => {
    console.log("Logout clicked");
    // Implement your logout logic here
  };
  const headerStyle = {
    display: "inline-flex",
    justifyContent: "space-between",
    color: "#fff",
    height: 64,
    paddingInline: 12,
    lineHeight: "64px",
    backgroundColor: "#8579a7",
  };

  const dropMenu = (
    <Menu>
      <Menu.Item key="logout" onClick={handleLogout}>
        <LogoutOutlined />
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header className="header" style={headerStyle}>
        <div className="logo" style={{ fontSize: 36, fontWeight: "700" }}>
          Emedicos
        </div>
        <div>
          <Dropdown overlay={dropMenu} placement="bottomRight">
            <Avatar icon={<UserOutlined />} style={{ cursor: "pointer" }} />
          </Dropdown>
        </div>
      </Header>
    </Layout>
  );
};

export default HeaderComponent;
