import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { useNavigate } from "react-router";
import styled, { keyframes } from "styled-components";
import searchIcon from "/public/search-icon-black.png";

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
  right: -135px;
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
  font-size: 32px;
  position: relative;
`;

const ModalContainer = styled.div`
  background: #242424;
  padding: 20px;
  width: 20%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0px;
  position: relative;
  animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 0.4s
    ease-in-out;
  border-radius: 12px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
`;

const InputPesquisa = styled.input`
  width: 100%;
  padding: 12px 50px 12px 15px;
  font-size: 20px;
  border: 4px solid #ffffff;
  border-radius: 4px;
  outline: none;
  background: white;
  font-family: var(--fonteSecundaria);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

const ContainerInput = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const BotaoLupa = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;

  &:hover {
    opacity: 0.7;
  }
`;

const ImagemLupa = styled.img`
  width: 30px;
  height: 30px;
`;

const ModalDePesquisa = ({ fecharModal }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [termoPesquisa, setTermoPesquisa] = useState("");

  const navigate = useNavigate();

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(fecharModal, 400);
  };

  const handlePesquisa = () => {
    if (termoPesquisa.trim() !== "") {
      navigate(`/resultados?query=${encodeURIComponent(termoPesquisa)}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handlePesquisa();
    }
  };

  return (
    <ModalOverlay isClosing={isClosing} onClick={handleClose}>
      <ModalContainer
        isClosing={isClosing}
        onClick={(e) => e.stopPropagation()}
      >
        <Titulo>
          O que você está procurando?
          <FecharBotao onClick={handleClose}>
            <CgClose />
          </FecharBotao>
        </Titulo>
        <ContainerInput>
          <InputPesquisa
            type="text"
            placeholder="Digite sua pesquisa"
            value={termoPesquisa}
            onChange={(e) => setTermoPesquisa(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <BotaoLupa onClick={handlePesquisa}>
            <ImagemLupa src={searchIcon} alt="lupa para buscar produto" />
          </BotaoLupa>
        </ContainerInput>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModalDePesquisa;
