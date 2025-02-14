import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`;

const CategoriaContainer = styled.div`
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  min-height: 100vh;
`;

const HeaderImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

const ContainerProdutos = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const Produto = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 20px 10px 0px 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s;
  animation: ${fadeIn} 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 260px;
  height: auto;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    max-height: 130px;
    object-fit: contain;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 14px;
    color: #333;
    margin-bottom: 10px;
    flex-grow: 1;
  }
`;

const Preco = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const BotaoFavorito = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 22px;
  color: #c63131;
  transition: transform 0.2s;
  display: flex;
  align-items: center;

  &:hover {
    transform: scale(1.2);
  }
`;

const LoadingMessage = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-top: 50px;
  animation: ${pulse} 1.5s infinite;
`;

const ContainerBaseCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #f9f9f9;
  width: 100%;
  padding: 10px;
  margin-top: auto;
  border-radius: 0 0 12px 12px;
`;

const Categoria = () => {
  const { nomeCategoria } = useParams();
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <CategoriaContainer>
      <HeaderImage src={categoria.header} alt={categoria.nome} />
      <h2>{categoria.nome}</h2>
      <h3>{categoria.descricao}</h3>

      {loading ? (
        <LoadingMessage>🔄 Carregando produtos...</LoadingMessage>
      ) : (
        <ContainerProdutos>
          {produtos.map((produto) => (
            <Produto key={produto.id}>
              <img src={produto.image} alt={produto.title} />
              <h4>{produto.title}</h4>
              <ContainerBaseCard>
                <Preco>R$ {produto.price.toFixed(2).replace(".", ",")}</Preco>
                <BotaoFavorito>
                  <FaHeart />
                </BotaoFavorito>
              </ContainerBaseCard>
            </Produto>
          ))}
        </ContainerProdutos>
      )}
    </CategoriaContainer>
  );
};

export default Categoria;
