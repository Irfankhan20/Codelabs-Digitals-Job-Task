import { Outlet } from "react-router-dom";
import Navbar from "../sharedComponents/navbar/Navbar";
import Footer from "../sharedComponents/footer/Footer";

const Layout = () => {
  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
