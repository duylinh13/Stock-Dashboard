import React, { useState, useContext, useEffect } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  FileSearchOutlined,
  BookOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { MainLayoutContext } from "../../context/MainLayoutContext";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "../../view/dashboard";
import NotFound from "../../view/not-found";

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode
): MenuItem {
  return {
    key,
    icon,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "1", <PieChartOutlined className="text-lg" />),
  getItem("Portfolio", "2", <DesktopOutlined className="text-lg" />),
  getItem("Trading & Market", "sub1", <UserOutlined className="text-lg" />),
  getItem("Research Portal", "sub2", <TeamOutlined className="text-lg" />),
  getItem("Wallet Transfer Pay", "9", <FileOutlined className="text-lg" />),
  getItem(
    "Reporting & Transaction",
    "sub3",
    <FileSearchOutlined className="text-lg" />
  ),
  getItem("Tutorial", "sub4", <BookOutlined className="text-lg" />),
  getItem("Logout", "logout", <LogoutOutlined className="text-lg" />),
];

const MainLayout = () => {
  const { changePageName } = useContext(MainLayoutContext);
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    if (changePageName) {
      changePageName("Your Page Name");
    } else {
      console.error("changePageName is not defined");
    }
  }, [changePageName]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ background: "#001529" }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          {items.map((item) => (
            <Menu.Item
              key={item.key}
              icon={item.icon}
              onClick={() => {
                if (item.key === "logout") {
                  navigate("/login"); // Redirect to login on logout
                }
              }}
            >
              <Link to={item.key === "1" ? "/dashboard" : "#"}>
                {item.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>

      <Layout>
        <Content style={{ margin: "0 16px", background: "#ffffff" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>ST0CK</Breadcrumb.Item>
            <Breadcrumb.Item>hello Duylinh13</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: "#ffffff",
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
