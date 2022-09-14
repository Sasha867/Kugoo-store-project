import { ServiceAndRepaire } from "./pages/service-and-repaire/service-and-repaire";
import "./App.scss";
import { Main } from "./pages/main-page/main";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ShoppingCart} from "./pages/shopping-cart/shoppingCart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/header" element={} /> */}
        <Route path="/" element={<Main />} />
        <Route path="/service" element={<ServiceAndRepaire />} />
        <Route path="/cart" element={<ShoppingCart/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
