import { CgClose } from "react-icons/cg";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const FecharBotao = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const InputPesquisa = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

const ModalDePesquisa = ({ fecharModal }) => {
  return (
    <ModalOverlay onClick={fecharModal}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <FecharBotao onClick={fecharModal}>
          <CgClose />
        </FecharBotao>
        <h2>O que você está procurando?</h2>
        <InputPesquisa type="text" placeholder="Digite sua pesquisa..." />
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModalDePesquisa;
