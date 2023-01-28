import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindPasswordPage from "./pages/find-password-page";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/signup-page";
import StyleDetailPage from "./pages/style-detail-page";
import StylePage from "./pages/style-page";
import "./App.css";
import SignUpEmailSentPage from "./pages/signup-email-sent-page";
import HomePage from "./pages/home-page";
import NaverLoginPage from "./pages/naver-login-page";
import GoogleLoginPage from "./pages/google-login-page";
import MyPage from "./pages/my-page";
import MyInfoPage from "./pages/my-info-page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login/find_password" element={<FindPasswordPage />} />
          <Route path="/login/naver_login" element={<NaverLoginPage />} />
          <Route path="/login/google_login" element={<GoogleLoginPage />} />
          <Route path="/join" element={<SignUpPage />} />
          <Route path="/join/email_sent" element={<SignUpEmailSentPage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/my/profile" element={<MyInfoPage />} />
          <Route path="/style" element={<StylePage />} />
          <Route path="/style/details" element={<StyleDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
