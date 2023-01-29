import axios from "axios";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { naverLogin } from "../../store/reducers/sessionReducer";

const NaverLoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //useCallback 이렇게 쓰는거 맞낭..
  const getToken = useCallback(() => {
    const token = window.location.href.split("=")[1].split("&")[0];

    const res = dispatch(naverLogin(token))
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

  //왜 getToken을 dependency array에??
  useEffect(() => {
    window.location.href.includes("access_token") && getToken();
  }, [getToken]);
  return <></>;
};

export default NaverLoginPage;
