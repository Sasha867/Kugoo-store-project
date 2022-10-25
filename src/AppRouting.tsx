import { ServiceAndRepaire } from "./pages/service-and-repaire/service-and-repaire";
import "./App.scss";
import { Main } from "./pages/main-page/main";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShoppingCart } from "./pages/shopping-cart/shoppingCart";
import { Modal } from "./components/auth-modal/auth-modal-window";
import { Cooperation } from "./pages/cooperation-page/cooperation";
import { AboutShop } from "./pages/about-shop/aboutShop";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/cooperation" element={<Cooperation />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/" element={<Main />} />
        <Route path="/service" element={<ServiceAndRepaire />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/about_shop" element={<AboutShop />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
