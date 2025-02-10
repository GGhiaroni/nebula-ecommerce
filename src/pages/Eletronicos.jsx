import { useEffect, useState } from "react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FeedHomeEstilizado = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 40px 80px;
  background-color: #f0f0f5;
`;

const CategoriaTitulo = styled.h2`
  font-size: 26px;
  font-weight: bold;
  color: #222;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;
`;

const GridProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1100px;
`;

const CardProduto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  height: 220px;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100px;
    height: 120px;
    object-fit: contain;
  }

  p {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
    color: #333;
  }
`;

const Eletronicos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = fetch(
      `https://fakestoreapi.com/products/category/electronics`
    )
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }),
    [];

  return (
    <FeedHomeEstilizado>
      <div>
        <CategoriaTitulo>Eletrônicos</CategoriaTitulo>
        <GridProdutos>
          {produtos.map((produto) => (
            <CardProduto key={produto.id}>
              <img src={produto.image} alt={produto.title} />
              <p>{produto.title}</p>
            </CardProduto>
          ))}
        </GridProdutos>
      </div>
    </FeedHomeEstilizado>
  );
};
export default Eletronicos;
