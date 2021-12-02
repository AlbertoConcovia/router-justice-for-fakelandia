import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

const MainLayouts = () => 
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>;

export default MainLayouts;
