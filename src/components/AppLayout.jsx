import { Outlet } from "react-router-dom";
import Header from "./home/Header";

function AppLayout() {
  return (
    <>
      <Header>Quisp</Header>
      <Outlet />
    </>
  );
}

export default AppLayout;
