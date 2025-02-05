import { useState } from "react";
import { CgClose } from "react-icons/cg";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.9);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${({ isClosing }) => (isClosing ? 0 : 1)};
  transition: opacity 0.4s ease-in-out;
  cursor: pointer;
`;

const FecharBotao = styled.button`
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  background: none;
  border: none;
  font-size: 32px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  color: white;

  &:hover {
    transform: translateX(-50%) rotate(360deg);
  }
`;

const Titulo = styled.h2`
  color: white;
  font-size: 24px;
  margin-bottom: 10px;
  position: relative;
`;

const ModalContainer = styled.div`
  background: transparent;
  padding: 20px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 0.4s
    ease-in-out;
`;

const InputPesquisa = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 24px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  background: white;
  font-family: var(--fontePrincipal);
`;

const ModalDePesquisa = ({ fecharModal }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(fecharModal, 400);
  };

  return (
    <ModalOverlay isClosing={isClosing} onClick={handleClose}>
      <Titulo>
        O que você está procurando?
        <FecharBotao onClick={handleClose}>
          <CgClose />
        </FecharBotao>
      </Titulo>
      <ModalContainer
        isClosing={isClosing}
        onClick={(e) => e.stopPropagation()}
      >
        <InputPesquisa type="text" placeholder="Digite sua pesquisa" />
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModalDePesquisa;
