import styled from "styled-components";
import Header from "./static/Header";
import Sider from "./static/Sider";
import { Outlet } from "react-router-dom";
import MenuSider from "./static/MenuSider";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="hidden sm:flex">
        <Sider />
      </div>
      <div className="flex sm:hidden">
        {" "}
        <MenuSider />
      </div>
      <div className="w-full flex justify-end ">
        <Container>
          <Outlet />
        </Container>
      </div>
    </div>
  );
};

export default Layout;

const Container = styled.div`
  width: calc(100vw - 200px);

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;
