import React from "react";
import { Layout, Menu, Input, Dropdown, Avatar, Button, Space } from "antd";
import { DownOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  const cities = [
    { key: "1", label: "Mumbai" },
    { key: "2", label: "Delhi" },
    { key: "3", label: "Bangalore" },
    { key: "4", label: "Hyderabad" },
    { key: "5", label: "Chennai" },
  ];

  const userMenu = (
    <Menu
      items={[
        { key: "1", label: "Profile" },
        { key: "2", label: "My Bookings" },
        { key: "3", label: "Logout" },
      ]}
    />
  );

  return (
    <Header
      style={{
        background: "#141414",
        padding: "0 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      {/* Left Section */}
      <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
        <div style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>
          🎬 BookMyShow+
        </div>

        <Dropdown
          menu={{ items: cities }}
          trigger={["click"]}
          placement="bottomLeft"
        >
          <a onClick={(e) => e.preventDefault()} style={{ color: "#fff" }}>
            <Space>
              Select City
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>

      {/* Middle Section */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <Input
          placeholder="Search for Movies, Events, Plays, Sports..."
          prefix={<SearchOutlined />}
          style={{
            width: "60%",
            borderRadius: "25px",
            padding: "8px 15px",
            backgroundColor: "#1f1f1f",
            color: "#fff",
          }}
        />
      </div>

      {/* Right Section */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <Menu
          theme="dark"
          mode="horizontal"
          items={[
            { key: "movies", label: "Movies" },
            { key: "stream", label: "Stream" },
            { key: "events", label: "Events" },
            { key: "plays", label: "Plays" },
            { key: "sports", label: "Sports" },
          ]}
          style={{
            background: "transparent",
            borderBottom: "none",
            fontWeight: "500",
          }}
        />

        <Dropdown
          overlay={userMenu}
          placement="bottomRight"
          trigger={["click"]}
        >
          <Avatar
            size="large"
            icon={<UserOutlined />}
            style={{ cursor: "pointer", backgroundColor: "#f5222d" }}
          />
        </Dropdown>
      </div>
    </Header>
  );
};

export default Navbar;
