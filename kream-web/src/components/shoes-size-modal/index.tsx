import {
  BackgroundWrapper,
  ConfirmButton,
  ConfirmButtonWrapper,
  ModalTitle,
  ModalTitleWrapper,
  SizeSelectButton,
  SizeSelectButtonWrapper,
  ModalWrapper,
} from "./shoes-size-modal.styled";

import { ShoeSizeData } from "../../data/styleFeedExample";
import React, { ReactText, useState } from "react";
import { SignUpFormType } from "../../types/signUpFormType";

interface ShoeSizeModal {
  shoeSize: number | string;
  setShoeSize: (size: number | string) => void;
  closeShoeSizeModal: () => void;
}

const ShoeSizeModal: React.FC<ShoeSizeModal> = ({
  shoeSize,
  setShoeSize,
  closeShoeSizeModal,
}) => {
  const [selected, setSelected] = useState(shoeSize);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setSelected(Number(e.currentTarget.innerHTML));
  };

  const handleConfirmClick = (e: React.MouseEvent<HTMLElement>) => {
    setShoeSize(selected);
    closeShoeSizeModal();
  };

  return (
    <BackgroundWrapper onClick={closeShoeSizeModal}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <ModalTitleWrapper>
          <ModalTitle>사이즈 선택</ModalTitle>
        </ModalTitleWrapper>
        <SizeSelectButtonWrapper>
          {ShoeSizeData.map((size, i) => (
            <SizeSelectButton
              key={i}
              selected={size === selected ? true : false}
              onClick={handleClick}
            >
              {size}
            </SizeSelectButton>
          ))}
        </SizeSelectButtonWrapper>
        <ConfirmButtonWrapper>
          <ConfirmButton
            disabled={selected !== 0 ? false : true}
            onClick={handleConfirmClick}
          >
            확인
          </ConfirmButton>
        </ConfirmButtonWrapper>
      </ModalWrapper>
    </BackgroundWrapper>
  );
};

export default ShoeSizeModal;
