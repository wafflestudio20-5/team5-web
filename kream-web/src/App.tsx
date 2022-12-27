import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StylePage from "./pages/style-page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/style" element={<StylePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
