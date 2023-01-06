import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindPasswordPage from "./pages/find-password-page";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/signup-page";
import StyleDetailPage from "./pages/style-detail-page";
import StylePage from "./pages/style-page";
import "./App.css";
import SignUpEmailSentPage from "./pages/signup-email-sent-page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login/find_password" element={<FindPasswordPage />} />
          <Route path="/join" element={<SignUpPage />} />
          <Route path="/join/email_sent" element={<SignUpEmailSentPage />} />
          <Route path="/style" element={<StylePage />} />
          <Route path="/style/details" element={<StyleDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
