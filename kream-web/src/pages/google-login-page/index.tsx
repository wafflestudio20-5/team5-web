import axios from "axios";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { googleLogin } from "../../store/reducers/sessionReducer";

const GoogleLoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getToken = useCallback(() => {
    const token = window.location.href.split("=")[1].split("&")[0];

    dispatch(googleLogin(token))
      .unwrap()
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((e) => {
        if (axios.isAxiosError(e)) {
          console.log(e);
        }
      });
  }, [navigate, dispatch]);

  useEffect(() => {
    window.location.href.includes("access_token") && getToken();
  }, [getToken]);
  return <></>;
};

export default GoogleLoginPage;
