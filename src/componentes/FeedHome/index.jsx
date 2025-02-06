import { useEffect, useState } from "react";
import styled from "styled-components";

const FeedHomeEstilizado = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 50px;
  padding: 40px;
  background-color: #f5f5f5;
`;

const CategoriaTitulo = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const ContainerProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const CardProduto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 150px;
    height: 180px;
    object-fit: contain;
  }

  p {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
    color: #555;
  }
`;

const FeedHome = () => {
  const [produtos, setProdutos] = useState({
    masculino: [],
    feminino: [],
    joias: [],
    eletronicos: [],
  });

  useEffect(() => {
    const fetchProdutos = async () => {
      const categorias = [
        "men's%20clothing",
        "women's%20clothing",
        "jewelery",
        "electronics",
      ];

      const results = await Promise.all(
        categorias.map((categoria) =>
          fetch(`https://fakestoreapi.com/products/category/${categoria}`).then(
            (res) => res.json()
          )
        )
      );

      setProdutos({
        masculino: results[0],
        feminino: results[1],
        joias: results[2],
        eletronicos: results[3],
      });
    };

    fetchProdutos();
  }, []);

  return (
    <FeedHomeEstilizado>
      <div>
        <CategoriaTitulo>Roupas Masculinas</CategoriaTitulo>
        <ContainerProdutos>
          {produtos.masculino.map((produto) => (
            <CardProduto key={produto.id}>
              <img src={produto.image} alt={produto.title} />
              <p>{produto.title}</p>
            </CardProduto>
          ))}
        </ContainerProdutos>
      </div>

      <div>
        <CategoriaTitulo>Roupas Femininas</CategoriaTitulo>
        <ContainerProdutos>
          {produtos.feminino.map((produto) => (
            <CardProduto key={produto.id}>
              <img src={produto.image} alt={produto.title} />
              <p>{produto.title}</p>
            </CardProduto>
          ))}
        </ContainerProdutos>
      </div>

      <div>
        <CategoriaTitulo>Joias</CategoriaTitulo>
        <ContainerProdutos>
          {produtos.joias.map((produto) => (
            <CardProduto key={produto.id}>
              <img src={produto.image} alt={produto.title} />
              <p>{produto.title}</p>
            </CardProduto>
          ))}
        </ContainerProdutos>
      </div>

      <div>
        <CategoriaTitulo>Eletrônicos</CategoriaTitulo>
        <ContainerProdutos>
          {produtos.eletronicos.map((produto) => (
            <CardProduto key={produto.id}>
              <img src={produto.image} alt={produto.title} />
              <p>{produto.title}</p>
            </CardProduto>
          ))}
        </ContainerProdutos>
      </div>
    </FeedHomeEstilizado>
  );
};

export default FeedHome;
