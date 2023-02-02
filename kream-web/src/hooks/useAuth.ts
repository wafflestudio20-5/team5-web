import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getMyInfo } from "../store/reducers/profileReducer";
import { refresh, sessionActions } from "../store/reducers/sessionReducer";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const [isLogin, setLogin] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const { myInfo } = useAppSelector((state) => state.profile);

  // DESC: 로그인 된 내 정보를 얻어오는 것이 목적
  const setMe = () => {
    dispatch(getMyInfo(localStorage.getItem("accessToken")))
      .unwrap()
      .then(() => {
        setLogin(true);
        setLoading(false);
      })
      .catch(() => {
        dispatch(refresh())
          .unwrap()
          .then(() => {
            dispatch(getMyInfo(localStorage.getItem("accessToken")))
              .unwrap()
              .then(() => {
                setLogin(true);
                setLoading(false);
              });
          })
          .catch(() => {
            setLogin(false);
            setLoading(false);
          });
      });
  };

  useEffect(() => {
    setMe();
  }, []);
  return { myInfo, isLogin, isLoading };
};
