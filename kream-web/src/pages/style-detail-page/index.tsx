import Header from "../../components/header";
import { Wrapper } from "../../components/header/header.styled";
import StyleFeedDetails from "../../components/style-feed-details";

const StyleDetailPage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <StyleFeedDetails />
      </Wrapper>
    </>
  );
};

export default StyleDetailPage;
