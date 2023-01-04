import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/signup-page";
import StyleDetailPage from "./pages/style-detail-page";
import StylePage from "./pages/style-page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/style" element={<StylePage />} />
          <Route path="/style/details" element={<StyleDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
