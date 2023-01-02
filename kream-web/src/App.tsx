import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page";
import StylePage from "./pages/style-page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/style" element={<StylePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
