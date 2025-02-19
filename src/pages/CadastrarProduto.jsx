import styled from "styled-components";
import headerCadastroProduto from "/public/cadastrar-produto.jpeg";

const HeaderImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

const Container = styled.div`
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  min-height: 100vh;
`;

const CadastrarProduto = () => {
  return (
    <Container>
      <HeaderImage src={headerCadastroProduto} alt="header cadastrar produto" />
    </Container>
  );
};

export default CadastrarProduto;
