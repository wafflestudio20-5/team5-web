import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StylePage from "./pages/style-page";
import ShopPage from "./pages/shop-page";
import ProductPageDetail from "./components/product-page-detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/style" element={<StylePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/products/:productID" element={<ProductPageDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
