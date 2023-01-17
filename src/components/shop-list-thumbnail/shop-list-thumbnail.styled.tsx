import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
`;

export const ItemThumbnail = styled.img`
  src: ${(prop) => prop.src};
  width: fill-parent;
  height: 230px;
  border-radius: 10px;
`;
