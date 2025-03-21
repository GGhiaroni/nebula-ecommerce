import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled, { keyframes } from "styled-components";
import ModalEdicaoProduto from "../componentes/ModalEdicaoProduto";
import { mudarCarrinho } from "../store/reducers/carrinho";
import { mudarFavorito, setItens } from "../store/reducers/itens";

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
  color: #fdfdfd;
`;

const BotaoFavorito = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 22px;
  transition: transform 0.2s;
  display: flex;
  align-items: center;
  color: #fdfdfd;

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
  background-color: #1c211f;
  width: 100%;
  padding: 10px;
  margin-top: auto;
  border-radius: 0 0 12px 12px;
  gap: 70px;
`;

const BotaoCarrinho = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #fdfdfd;
  &:hover {
    transform: scale(1.2);
  }
`;

const ContainerBaseCardIcones = styled.div`
  display: flex;
  align-items: center;
`;

const BotaoEditar = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 22px;
  transition: transform 0.2s;
  display: flex;
  align-items: center;
  color: #fdfdfd;

  &:hover {
    transform: scale(1.2);
  }
`;

const Categoria = () => {
  const usuarioLogado = useSelector((state) => state.usuario.usuarioAtual);
  const { nomeCategoria } = useParams();
  const [loading, setLoading] = useState(true);

  const produtosDaStore = useSelector((state) => state.itens.lista || []);

  const [produtos, setProdutos] = useState(produtosDaStore);

  const categoria = useSelector((state) =>
    state.categorias.find((cat) => cat.caminhoUrl === nomeCategoria)
  );

  const dispatch = useDispatch();

  const carrinho = useSelector((state) => state.carrinho);

  const [produtoEditando, setProdutoEditando] = useState(null);

  const abrirModalEdicao = (produto) => {
    setProdutoEditando(produto);
  };

  const fecharModal = () => {
    setProdutoEditando(null);
  };

  const salvarEdicao = (id, dadosEditados) => {
    const produtosAtualizados = produtos.map((produto) =>
      produto.id === id ? { ...produto, ...dadosEditados } : produto
    );
    setProdutos(produtosAtualizados);
    localStorage.setItem(
      `produtos-${categoria.caminhoUrl}`,
      JSON.stringify(produtosAtualizados)
    );
  };

  useEffect(() => {
    if (!categoria) return;

    const produtosSalvos =
      JSON.parse(localStorage.getItem(`produtos-${categoria.caminhoUrl}`)) ||
      [];
    dispatch(setItens(produtosSalvos));

    console.log("produtos salvos no localstorage: ", produtosSalvos);

    const produtosFiltrados = produtosSalvos.filter(
      (produto) => produto.category === categoria.categoryFakeStoreApi
    );

    if (produtosFiltrados.length > 0) {
      setProdutos(produtosFiltrados);
      setLoading(false);
      return;
    }

    setLoading(true);

    fetch(
      `https://fakestoreapi.com/products/category/${categoria.tagNaFakeStoreApi}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Dados da API:", data);

        const produtosComFavorito = data.map((produto) => ({
          ...produto,
          favorito: false,
        }));

        dispatch(setItens(produtosComFavorito));
        setProdutos(produtosComFavorito);
        localStorage.setItem(
          `produtos-${categoria.caminhoUrl}`,
          JSON.stringify(produtosComFavorito)
        );
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar os produtos:", err);
        setLoading(false);
      });
  }, [categoria, dispatch]);

  if (!categoria) return <p>Categoria não encontrada.</p>;

  function handleFavorito(id) {
    dispatch(mudarFavorito(id));
    setProdutos((prevProdutos) =>
      prevProdutos.map((produto) =>
        produto.id === id
          ? { ...produto, favorito: !produto.favorito }
          : produto
      )
    );
  }

  function handleCarrinho(produto) {
    dispatch(mudarCarrinho(produto));
    toast.success("Produto adicionado ao carrinho!");
  }

  return (
    <CategoriaContainer>
      {produtoEditando && (
        <ModalEdicaoProduto
          produto={produtoEditando}
          fecharModal={fecharModal}
          salvarEdicao={salvarEdicao}
        />
      )}
      <HeaderImage src={categoria.header} alt={categoria.nome} />
      <h2>{categoria.nome}</h2>
      <h3>{categoria.descricao}</h3>

      {loading ? (
        <LoadingMessage>🔄 Carregando produtos...</LoadingMessage>
      ) : (
        <ContainerProdutos>
          {produtos.length > 0 ? (
            produtos.map((produto) => {
              const estaNoCarrinho = carrinho.some(
                (item) => item.id === produto.id
              );
              return (
                <Produto key={produto.id}>
                  <img src={produto.image} alt={produto.title} />
                  <h4>{produto.title}</h4>
                  <ContainerBaseCard>
                    <Preco>
                      R$ {Number(produto.price).toFixed(2).replace(".", ",")}
                    </Preco>
                    <ContainerBaseCardIcones>
                      <BotaoFavorito onClick={() => handleFavorito(produto.id)}>
                        {produto.favorito ? (
                          <IoMdHeart color="red" />
                        ) : (
                          <IoMdHeartEmpty />
                        )}
                      </BotaoFavorito>
                      <BotaoCarrinho
                        onClick={() => {
                          handleCarrinho(produto);
                        }}
                      >
                        <FaCartPlus
                          color={estaNoCarrinho ? "#1875E8" : "#fdfdfd"}
                        />
                      </BotaoCarrinho>
                      {usuarioLogado ? (
                        <BotaoEditar onClick={() => abrirModalEdicao(produto)}>
                          {" "}
                          <MdEdit color="#fdfdfd" />{" "}
                        </BotaoEditar>
                      ) : (
                        ""
                      )}
                    </ContainerBaseCardIcones>
                  </ContainerBaseCard>
                </Produto>
              );
            })
          ) : (
            <p>Nenhum produto encontrado nesta categoria.</p>
          )}
        </ContainerProdutos>
      )}
    </CategoriaContainer>
  );
};

export default Categoria;
