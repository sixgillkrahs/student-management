import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";

const { Content, Footer, Header, Sider } = Layout;

const LayoutComponent = () => {
  return (
    <Layout>
      <Sider className="h-screen">
        <div
          //   className="demo-logo-vertical"
          className="text-xl w-full h-16 bg-[#022240] flex justify-center items-center"
        >
          <h1 className="text-[white] text-3xl">P</h1>
        </div>
      </Sider>
      <Layout>
        <Header />
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
