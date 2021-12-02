import { Route, Routes } from "react-router";
import Home from "./Home";
import Confession from "./Confession";
import Misdemeanour from "./Misdemeanour";
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
