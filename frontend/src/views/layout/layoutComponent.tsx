import { Button, Layout, Menu, Switch, theme } from "antd";
import type { MenuProps } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import {
  AppstoreFilled,
  BankFilled,
  HomeFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { ReactNode, useState } from "react";
import { useRecoilState } from "recoil";
import { Theme } from "../../recoil/atoms/theme";

const { Content, Footer, Header, Sider } = Layout;

interface MenuItem {
  path: string;
  label: string;
  icon: ReactNode;
  key: string;
}

const items: MenuItem[] = [
  {
    path: "",
    label: "Home",
    icon: <HomeFilled />,
    key: "1",
  },
  {
    path: "faculty",
    label: "Faculty",
    icon: <BankFilled />,
    key: "2",
  },
  {
    path: "class",
    label: "Class",
    icon: <AppstoreFilled />,
    key: "3",
  },
];

const LayoutComponent = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useRecoilState(Theme);
  const handleNavigator = (e: any) => {
    let findItem = items.find((x) => x.key === e.key);
    if (findItem) {
      navigate(findItem.path);
    }
  };
  return (
    <Layout>
      <Sider
        className="h-screen"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div
          //   className="demo-logo-vertical"
          className="text-xl w-full h-16 bg-[#022240] flex justify-center items-center"
        >
          <h1 className="text-[white] text-3xl">P</h1>
        </div>
        <Menu
          theme={theme === "light" ? "light" : "dark"}
          mode="inline"
          className="h-full"
          items={items}
          onClick={handleNavigator}
        />
      </Sider>
      <Layout>
        <Header
          className={theme === "light" ? "bg-white" : "bg-black"}
          style={{ padding: 0 }}
        >
          <div className="flex justify-between items-center w-full">
            <Button
              type="text"
              icon={
                collapsed ? (
                  <MenuUnfoldOutlined
                    className={theme !== "light" ? "bg-white" : "bg-white"}
                  />
                ) : (
                  <MenuFoldOutlined
                    className={theme !== "light" ? "bg-white" : "bg-white"}
                  />
                )
              }
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <Switch
              className={theme === "light" ? "bg-black" : "bg-white"}
              onClick={() => {
                theme === "light" ? setTheme("dark") : setTheme("light");
              }}
            />
          </div>
        </Header>
        <Content className="mx-6 my-4 min-h-72 rounded-2xl bg-slate-300">
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
