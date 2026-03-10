import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";

const Layout = () => (
  <div className="min-h-screen bg-background pb-20">
    <Outlet />
    <BottomNav />
  </div>
);

export default Layout;
