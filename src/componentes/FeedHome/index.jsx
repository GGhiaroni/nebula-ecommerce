import { useEffect, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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

const CarrosselContainer = styled.div`
  width: 100%;
  max-width: 800px;

  .swiper-button-prev,
  .swiper-button-next {
    color: #222;
  }
`;

const BotaoFavorito = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: ${({ favoritado }) => (favoritado ? "red" : "gray")};
  transition: color 0.3s;

  &:hover {
    color: red;
  }
`;

const FeedHome = () => {
  const [produtos, setProdutos] = useState({
    masculino: [],
    feminino: [],
    joias: [],
    eletronicos: [],
  });

  const [favoritos, setFavoritos] = useState([]);

  const navigate = useNavigate();

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

      const limite = 4;
      setProdutos({
        masculino: results[0].slice(0, limite),
        feminino: results[1].slice(0, limite),
        joias: results[2].slice(0, limite),
        eletronicos: results[3].slice(0, limite),
      });
    };

    fetchProdutos();
  }, []);

  const produtosDestaque = [
    ...produtos.masculino.slice(0, 2),
    ...produtos.feminino.slice(0, 2),
    ...produtos.joias.slice(0, 2),
    ...produtos.eletronicos.slice(0, 2),
  ];

  const handleSelecionarProduto = (produto) => {
    navigate(`/produto/${produto.id}`);
  };

  return (
    <FeedHomeEstilizado>
      <CategoriaTitulo>🔥 Produtos em Destaque 🔥</CategoriaTitulo>
      <CarrosselContainer>
        <Swiper
          navigation={true}
          autoplay={{ delay: 3000 }}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={20}
        >
          {produtosDestaque.map((produto) => (
            <SwiperSlide key={produto.id}>
              <CardProduto onClick={() => handleSelecionarProduto(produto)}>
                <img src={produto.image} alt={produto.title} />
                <p>{produto.title}</p>
              </CardProduto>
            </SwiperSlide>
          ))}
        </Swiper>
      </CarrosselContainer>

      <div>
        <CategoriaTitulo>Roupas Masculinas</CategoriaTitulo>
        <GridProdutos>
          {produtos.masculino.map((produto) => (
            <CardProduto
              key={produto.id}
              onClick={() => handleSelecionarProduto(produto)}
            >
              <BotaoFavorito
                favoritado={favoritos.includes(produto.id)}
                onClick={() => toggleFavorito(produto.id)}
              >
                {favoritos.includes(produto.id) ? (
                  <MdFavorite />
                ) : (
                  <MdFavoriteBorder />
                )}
              </BotaoFavorito>
              <img src={produto.image} alt={produto.title} />
              <p>{produto.title}</p>
            </CardProduto>
          ))}
        </GridProdutos>
      </div>

      <div>
        <CategoriaTitulo>Roupas Femininas</CategoriaTitulo>
        <GridProdutos>
          {produtos.feminino.map((produto) => (
            <CardProduto
              key={produto.id}
              onClick={() => handleSelecionarProduto(produto)}
            >
              <img src={produto.image} alt={produto.title} />
              <p>{produto.title}</p>
            </CardProduto>
          ))}
        </GridProdutos>
      </div>

      <div>
        <CategoriaTitulo>Joias</CategoriaTitulo>
        <GridProdutos>
          {produtos.joias.map((produto) => (
            <CardProduto
              key={produto.id}
              onClick={() => handleSelecionarProduto(produto)}
            >
              <img src={produto.image} alt={produto.title} />
              <p>{produto.title}</p>
            </CardProduto>
          ))}
        </GridProdutos>
      </div>

      <div>
        <CategoriaTitulo>Eletrônicos</CategoriaTitulo>
        <GridProdutos>
          {produtos.eletronicos.map((produto) => (
            <CardProduto
              key={produto.id}
              onClick={() => handleSelecionarProduto(produto)}
            >
              <img src={produto.image} alt={produto.title} />
              <p>{produto.title}</p>
            </CardProduto>
          ))}
        </GridProdutos>
      </div>
    </FeedHomeEstilizado>
  );
};

export default FeedHome;
