import { ServiceAndRepaire } from "./pages/service-and-repaire/service-and-repaire";
import "./App.scss";
import { Main } from "./pages/main/main";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ShoppingCart } from "./pages/shopping-cart/shoppingCart";
import { Cooperation } from "./pages/cooperation/cooperation";
import { AboutShop } from "./pages/about-shop/aboutShop";
import { Catalog } from "./pages/catalog/catalog";
import { Product } from "./pages/product/product";
import { useEffect } from "react";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useAppDispatch } from "./redux/store";
import { setUser } from "./redux/features/user";
import { PurchaseHistory } from "./pages/purchase-history/purchaseHistory";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  }, []);
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
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="/history" element={<PurchaseHistory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
