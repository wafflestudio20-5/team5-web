import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getMyInfo } from "../../store/reducers/profileReducer";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const { access_token } = useAppSelector((state) => state.session);
  const { myInfo } = useAppSelector((state) => state.profile);

  console.log(myInfo);
  useEffect(() => {
    if (access_token) {
      dispatch(getMyInfo(access_token))
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
  }, [access_token, dispatch]);

  return (
    <>
      <Header />
    </>
  );
};

export default HomePage;
