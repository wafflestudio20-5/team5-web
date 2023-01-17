import styled from "@emotion/styled";

interface ImagesOrder {
  current: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const ImagesWrapper = styled.div`
  display: flex;
  transition: all 0.2s ease-out;
`;

export const FeedImage = styled.img`
  width: 720px;
  object-fit: contain;
  flex: none;
`;

export const PreviousFeedButton = styled.button`
  position: absolute;
  top: 50%;
  left: 30px;
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 50%;
  background-color: white;
  opacity: 0.7;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NextFeedButton = styled.button`
  position: absolute;
  top: 50%;
  right: 30px;
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 50%;
  background-color: white;
  opacity: 0.7;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImagesOrderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  margin-top: 15px;
`;

export const ImagesOrder = styled.button<ImagesOrder>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  padding: 0;
  margin: 0;
  border: 0;
  cursor: pointer;
  background-color: ${(props) =>
    props.current === true ? "black" : "rgba(34,34,34,.1)"};
`;
