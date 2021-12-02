import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router";
import '../App.css';

const MainLayouts = () => 
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>;

export default MainLayouts;
