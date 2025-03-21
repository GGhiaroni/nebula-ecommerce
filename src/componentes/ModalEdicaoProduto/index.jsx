import { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
`;

const BotaoFechar = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  float: right;
`;

const BotaoSalvar = styled.button`
  background: green;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
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
        <BotaoFechar onClick={fecharModal}>X</BotaoFechar>
        <h2>Editar Produto</h2>
        <label>Título:</label>
        <Input
          type="text"
          value={novoTitulo}
          onChange={(e) => setNovoTitulo(e.target.value)}
        />

        <label>Preço:</label>
        <Input
          type="number"
          value={novoPreco}
          onChange={(e) => setNovoPreco(e.target.value)}
        />

        <label>URL da Imagem:</label>
        <Input
          type="text"
          value={novaImagem}
          onChange={(e) => setNovaImagem(e.target.value)}
        />

        <BotaoSalvar onClick={handleSalvar}>Salvar Alterações</BotaoSalvar>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ModalEdicaoProduto;
