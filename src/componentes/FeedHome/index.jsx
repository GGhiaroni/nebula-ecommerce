import { useEffect, useState } from "react";
import styled from "styled-components";

const FeedHomeEstilizado = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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

      // Novo produto a ser adicionado
      const novoProduto = {
        id: Date.now(), // Criando um ID único para o produto
        title: "Blusa do Fluminense",
        price: 88.9,
        description: "lorem ipsum set",
        image:
          "https://dcdn.mitiendanube.com/stores/002/263/620/products/u31fl514231_425_00-removebg-preview-11-eb8db83b00e15767d816576328395233-240-0.png",
        category: "men's%20clothing",
      };

      // Buscar produtos por categoria
      const results = await Promise.all(
        categorias.map((categoria) =>
          fetch(`https://fakestoreapi.com/products/category/${categoria}`).then(
            (res) => res.json()
          )
        )
      );

      // Atualizar estado com os produtos existentes + novo produto em todas as categorias
      setProdutos({
        masculino: [novoProduto, ...results[0]],
        feminino: [novoProduto, ...results[1]],
        joias: [novoProduto, ...results[2]],
        eletronicos: [novoProduto, ...results[3]],
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
