import { useEffect, useState } from "react";
import styled from "styled-components";

const FeedHomeEstilizado = styled.section`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 200px;
  }
`;

const ContainerProdutos = styled.div`
  display: flex;
`;

const FeedHome = () => {
  const [feedInicialMasculino, setFeedInicialMasculino] = useState([]);
  const [feedInicialFeminino, setFeedInicialFeminino] = useState([]);
  const [feedInicialJoias, setFeedInicialJoias] = useState([]);
  const [feedInicialEletronicos, setFeedInicialEletronicos] = useState([]);

  useEffect(() => {
    const feedMasculino = fetch(
      "https://fakestoreapi.com/products/category/men's%20clothing"
    )
      .then((res) => res.json())
      .then((json) => setFeedInicialMasculino(json));
  }, []);

  useEffect(() => {
    const feedFeminino = fetch(
      "https://fakestoreapi.com/products/category/women's%20clothing"
    )
      .then((res) => res.json())
      .then((json) => setFeedInicialFeminino(json));
  }, []);

  useEffect(() => {
    const feedJoias = fetch(
      "https://fakestoreapi.com/products/category/jewelery"
    )
      .then((res) => res.json())
      .then((json) => setFeedInicialJoias(json));
  }, []);

  useEffect(() => {
    const feedEletronicos = fetch(
      "https://fakestoreapi.com/products/category/electronics"
    )
      .then((res) => res.json())
      .then((json) => setFeedInicialEletronicos(json));
  }, []);

  return (
    <FeedHomeEstilizado>
      <ContainerProdutos>
        {feedInicialMasculino.map((produto) => (
          <img src={produto.image} />
        ))}
      </ContainerProdutos>
      <ContainerProdutos>
        {feedInicialFeminino.map((produto) => (
          <img src={produto.image} />
        ))}
      </ContainerProdutos>
      <ContainerProdutos>
        {feedInicialJoias.map((produto) => (
          <img src={produto.image} />
        ))}
      </ContainerProdutos>
      <ContainerProdutos>
        {feedInicialEletronicos.map((produto) => (
          <img src={produto.image} />
        ))}
      </ContainerProdutos>
    </FeedHomeEstilizado>
  );
};

export default FeedHome;
