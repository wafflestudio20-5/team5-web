import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getMyInfo } from "../../store/reducers/profileReducer";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const { accessToken } = useAppSelector((state) => state.session);
  const { myInfo } = useAppSelector((state) => state.profile);

  console.log(myInfo);
  useEffect(() => {
    if (accessToken) {
      dispatch(getMyInfo(accessToken))
        .unwrap()
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          if (axios.isAxiosError(e)) {
            console.log(e);
          }
        });
    }
  }, [accessToken, dispatch]);

  return (
    <>
      <Header />
    </>
  );
};

export default HomePage;
