import { useParams } from "react-router-dom";
import Header from "../../components/header";

const ProfileDetailPage = () => {
  const { id } = useParams();
  return (
    <>
      <Header />
    </>
  );
};

export default ProfileDetailPage;
