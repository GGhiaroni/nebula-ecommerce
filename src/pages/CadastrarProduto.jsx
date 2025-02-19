import { useSelector } from "react-redux";
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
  const categorias = useSelector((state) =>
    state.categorias.map(({ nome, id }) => ({ nome, id }))
  );

  return (
    <Container>
      <HeaderImage src={headerCadastroProduto} alt="header cadastrar produto" />
      <form>
        <input placeholder="Nome do produto" alt="nome do produto" />
        <input placeholder="Descrição do produto" alt="descrição do produto" />
        <input
          placeholder="URL da imagem do produto"
          alt="url da imagem do produto"
        />
        <select>
          <option value="">Selecione a categoria</option>
          {categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.nome}
            </option>
          ))}
        </select>
        <input type="number" placeholder="Preço do produto" />
        <button type="submit">Cadastrar produto</button>
      </form>
    </Container>
  );
};

export default CadastrarProduto;
