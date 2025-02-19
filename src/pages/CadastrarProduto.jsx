import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import headerCadastroProduto from "/public/cadastrar-produto.jpeg";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  text-align: center;
  padding: 40px 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e2eafc;
`;

const HeaderImage = styled.img`
  width: 100%;
  max-height: 280px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

const Form = styled.form`
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  max-width: 420px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  animation: ${fadeIn} 0.7s ease-in-out;
`;

const Input = styled.input`
  padding: 14px;
  border: 2px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: #6c5ce7;
    outline: none;
    box-shadow: 0 0 10px rgba(108, 92, 231, 0.4);
  }
`;

const Select = styled.select`
  padding: 14px;
  border: 2px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  appearance: none;
  background-color: white;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%236c5ce7' d='M2 0L0 2h4zM2 5L0 3h4z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 10px;
  padding-right: 40px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:focus {
    border-color: #6c5ce7;
    outline: none;
    box-shadow: 0 0 10px rgba(108, 92, 231, 0.4);
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #6c5ce7, #a29bfe);
  color: white;
  padding: 14px;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: linear-gradient(135deg, #5a4bcf, #8f84ff);
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(108, 92, 231, 0.3);
  }
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CadastrarProduto = () => {
  const categorias = useSelector((state) =>
    state.categorias.map(({ nome, id }) => ({ nome, id }))
  );

  return (
    <Container>
      <HeaderImage src={headerCadastroProduto} alt="header cadastrar produto" />
      <Title>
        <span>🛍️ </span> Cadastro de Produtos
      </Title>
      <Form>
        <Input placeholder="📦 Nome do produto" />
        <Input placeholder="📝 Descrição do produto" />
        <Input placeholder="🌄 URL da imagem do produto" />
        <Select>
          <option value="">📂 Selecione a categoria</option>
          {categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.nome}
            </option>
          ))}
        </Select>
        <Input type="number" placeholder="💰 Preço do produto" />
        <Button type="submit">✨ Cadastrar Produto</Button>
      </Form>
    </Container>
  );
};

export default CadastrarProduto;
