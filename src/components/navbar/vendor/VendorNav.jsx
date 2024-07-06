import { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import navlogowithtext from "../../../../src/assets/navlogowithtext.webp";
import iconlogonav from "../../../../src/assets/iconlogonav.webp";
import { menuListSidebar } from "./menuListSidebar";
import HeaderVendor from "./HeaderVendor";

const { Header, Content, Footer, Sider } = Layout;

const VendorNav = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "white" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        trigger={null}
        onCollapse={toggleCollapsed}
        style={{ backgroundColor: "white" }}
      >
        <div className="demo-logo-vertical">
          <img
            src={collapsed ? iconlogonav : navlogowithtext}
            alt="Logo"
            style={{ padding: collapsed ? "16px 17px" : "21px 12px" }}
          />
        </div>
        <Menu
          mode="inline"
          className="dashboard-sidebar-scrollbar max-h-screen"
        >
          {menuListSidebar.map((section, index) => (
            <Menu.ItemGroup
              key={`section-${index}`}
              title={
                <span className="menu-itemgroup-title text-xs font-semibold">
                  {!collapsed ? section.label : ""}
                </span>
              }
              style={{
                borderBottom: collapsed ? "1px dashed #e5e7eb" : "",
                padding: "none",
              }}
              icon={section.icon}
            >
              {section.items.map((item, idx) =>
                item.subItems ? (
                  <Menu.SubMenu
                    key={`sub-${index}-${idx}`}
                    title={item.text}
                    icon={item.icon}
                  >
                    {item.subItems.map((subItem, subIdx) => (
                      <Menu.Item key={`subItem-${index}-${idx}-${subIdx}`}>
                        <a href={subItem.href}>{subItem.text}</a>
                      </Menu.Item>
                    ))}
                  </Menu.SubMenu>
                ) : (
                  <Menu.Item key={`item-${index}-${idx}`} icon={item.icon}>
                    <a href={item.href}>{item.text}</a>
                  </Menu.Item>
                )
              )}
            </Menu.ItemGroup>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, backgroundColor: "white", height: "75px" }}
        >
          <HeaderVendor
            toggleCollapsed={toggleCollapsed}
            collapsed={collapsed}
          />
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer className="bg-white shadow">
          <div className="flex items-center justify-between">
            <span className="text-sm text-body sm:text-center">
              ©2024{" "}
              <a
                className="font-medium text-heading"
                href="https://pickbazar.redq.io"
              >
                Pickbazar
              </a>
              . Copyright © REDQ. All rights reserved worldwide.{" "}
              <a className="font-medium text-heading" href="https://redq.io">
                REDQ
              </a>
            </span>
            <div className="flex space-x-6 text-sm font-medium text-body sm:justify-center">
              11.7.0
            </div>
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default VendorNav;
