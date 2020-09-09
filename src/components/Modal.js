import React from 'react';
import styled from 'styled-components';
import { primaryFont, typeScale } from '../utils/typography';
import { Illustrations, CloseIcon } from '../assets';

import { PrimaryButton } from './Buttons';
import { animated, useSpring, config } from 'react-spring';

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  font-family: ${primaryFont};
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
  padding: 20px 30px;
  img {
    width: 100%;
    height: 300px;
  }
`;

// const ColumnModalWrapper = styled(ModalWrapper)`
//   flex-direction: row;
//   justify-content: space-around;
// `;

const ModalHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const SignUpModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`,
    config: config.gentle,
  });
  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <CloseModalButton onClick={() => setShowModal(false)}>
          <CloseIcon />
        </CloseModalButton>
        <img src={Illustrations.SignUp} alt="" aria-hidden="true" />
        <ModalHeader>
          <SignUpText>Sign Up today to get access!</SignUpText>
        </ModalHeader>
        <PrimaryButton>Sign Up</PrimaryButton>
      </ModalWrapper>
    </animated.div>
  );
};
