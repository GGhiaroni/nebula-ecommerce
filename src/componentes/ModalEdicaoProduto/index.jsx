import { useState } from "react";
import styled, { keyframes } from "styled-components";

// Animação de entrada
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background: #ffffff;
  width: 450px;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.3);
  position: relative;
  animation: ${fadeIn} 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ModalTitle = styled.h2`
  text-align: center;
  font-size: 22px;
  color: #333;
  margin-bottom: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #888;
  transition: color 0.2s;

  &:hover {
    color: #ff4d4d;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #444;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: all 0.3s;

  &:focus {
    border-color: #4caf50;
    box-shadow: 0px 0px 8px rgba(76, 175, 80, 0.3);
  }
`;

const SaveButton = styled.button`
  background: #4caf50;
  color: white;
  border: none;
  padding: 14px;
  cursor: pointer;
  width: 100%;
  font-weight: bold;
  font-size: 16px;
  border-radius: 8px;
  margin-top: 10px;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #43a047;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const ModalEdicaoProduto = ({ produto, fecharModal, salvarEdicao }) => {
  const [novoTitulo, setNovoTitulo] = useState(produto.title);
  const [novoPreco, setNovoPreco] = useState(produto.price);
  const [novaImagem, setNovaImagem] = useState(produto.image);

  const handleSalvar = () => {
    salvarEdicao(produto.id, {
      title: novoTitulo,
      price: novoPreco,
      image: novaImagem,
    });
    fecharModal();
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButton onClick={fecharModal}>&times;</CloseButton>
        <ModalTitle>Editar Produto</ModalTitle>

        <InputContainer>
          <Label>Título:</Label>
          <Input
            type="text"
            value={novoTitulo}
            onChange={(e) => setNovoTitulo(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <Label>Preço:</Label>
          <Input
            type="number"
            value={novoPreco}
            onChange={(e) => setNovoPreco(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <Label>URL da Imagem:</Label>
          <Input
            type="text"
            value={novaImagem}
            onChange={(e) => setNovaImagem(e.target.value)}
          />
        </InputContainer>

        <SaveButton onClick={handleSalvar}>Salvar Alterações</SaveButton>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ModalEdicaoProduto;
