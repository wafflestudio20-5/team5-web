import { ItemThumbnail, Wrapper } from "./shop-list-thumbnail.styled";

interface Tprops {
  src: string;
}

const ShopListThumbnail = ({ src }: Tprops) => {
  return (
    <Wrapper>
      <ItemThumbnail src={src} />
    </Wrapper>
  );
};

export default ShopListThumbnail;
