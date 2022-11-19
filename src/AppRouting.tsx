import { ServiceAndRepaire } from "./pages/service-and-repaire/service-and-repaire";
import "./App.scss";
import { Main } from "./pages/main/main";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShoppingCart } from "./pages/shopping-cart/shoppingCart";
import { Cooperation } from "./pages/cooperation/cooperation";
import { AboutShop } from "./pages/about-shop/aboutShop";
import { Catalog } from "./pages/catalog/catalog";
import { Product } from "./pages/product/product";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/cooperation" element={<Cooperation />} />
        <Route path="/" element={<Main />} />
        <Route path="/service" element={<ServiceAndRepaire />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/about_shop" element={<AboutShop />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
