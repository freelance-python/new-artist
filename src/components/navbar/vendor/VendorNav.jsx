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
              title={section.label}
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
          style={{ padding: 0, backgroundColor: "white", height: "auto" }}
        >
          <HeaderVendor toggleCollapsed={toggleCollapsed} />
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
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default VendorNav;
