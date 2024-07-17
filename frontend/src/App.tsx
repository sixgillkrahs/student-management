import React from "react";
import "./App.css";
import LayoutComponent from "./views/layout/layoutComponent";
import RootRoute from "./components/Root/rootRoute";
import { ConfigProvider } from "antd";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ff0339",
        },
      }}
    >
      <RecoilRoot>
        <RootRoute />
      </RecoilRoot>
    </ConfigProvider>
  );
}

export default App;
