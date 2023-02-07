import Header from "../../components/header";
import StyleFeedDetails from "../../components/style/style-feed-details";

import { Wrapper } from "./style-detail-page.styled";

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
