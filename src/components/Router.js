import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Confession from "./pages/Confession";
import Misdemeanour from "./pages/Misdemeanour";
import MainLayouts from "./MainLayouts";
import { NotFound } from "http-errors";

const Router = () => (
  <Routes>
    <Route path="/" element={<MainLayouts/>}>
      <Route index element={<Home/>} />
      <Route path="Confession" element={<Confession />} />
      <Route path="Misdemeanour" element={<Misdemeanour />} />
      <Route path="*" element={<NotFound/>} />
    </Route>
  </Routes>
);

export default Router;
