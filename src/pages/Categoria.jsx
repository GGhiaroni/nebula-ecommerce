import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";

const CategoriaContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const HeaderImage = styled.img`
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const ContainerProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-items: center;
`;

const Produto = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 14px;
    color: #333;
  }
`;
const Categoria = () => {
  const { nomeCategoria } = useParams();
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState([]);

  const categoria = useSelector((state) =>
    state.categorias.find((cat) => cat.caminhoUrl === nomeCategoria)
  );

  useEffect(() => {
    if (!categoria) return;
    setLoading(true);
    setProdutos([]);

    fetch(
      `https://fakestoreapi.com/products/category/${categoria.tagNaFakeStoreApi}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProdutos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [categoria]);

  if (!categoria) return <p>Categoria não encontrada.</p>;

  return (
    <>
      <CategoriaContainer>
        <HeaderImage src={categoria.header} alt={categoria.nome} />
        <h2>{categoria.nome}</h2>
        <h3>{categoria.descricao}</h3>
      </CategoriaContainer>

      {loading ? (
        <p style={{ textAlign: "center", fontSize: "18px" }}>
          Carregando produtos...
        </p>
      ) : (
        <ContainerProdutos>
          {produtos.map((produto) => (
            <Produto key={produto.id}>
              <img src={produto.image} alt={produto.title} />
              <h4>{produto.title}</h4>
            </Produto>
          ))}
        </ContainerProdutos>
      )}
    </>
  );
};

export default Categoria;
