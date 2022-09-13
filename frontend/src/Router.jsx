import { Route, Routes, BrowserRouter } from "react-router-dom";
import Addtocart from "./containers/Addtocart";
import Cart from "./containers/Cart";
import Home from "./containers/Home";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
