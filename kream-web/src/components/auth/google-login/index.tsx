import { GOOGLE_REDIRECT_URI } from "../../../libs/urls";

declare global {
  interface Window {
    google: any;
  }
}

const GoogleLogin = () => {
  const { google } = window;

  window.onload = function () {
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: GOOGLE_REDIRECT_URI,
    });
    google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  };
  return <div id="buttonDiv"></div>;
};

export default GoogleLogin;
