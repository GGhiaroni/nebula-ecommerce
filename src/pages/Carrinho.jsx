import { useSelector } from "react-redux";

const Carrinho = () => {
  const carrinho = useSelector((state) => state.carrinho);

  const total = carrinho.reduce((acc, item) => {
    acc += item.price * item.quantidade || 0;
    return acc;
  }, 0);

  return (
    <div>
      <h1>Carrinho de Compras</h1>
      <div>Total: R$ {total.toFixed(2).replace(".", ",")}</div>
      <div>Total de itens no carrinho: {carrinho.length}</div>
      {carrinho.length > 0 ? (
        carrinho.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>Quantidade: {item.quantidade}</p>
            <img src={item.image} alt="" />
          </div>
        ))
      ) : (
        <p>O carrinho está vazio.</p>
      )}
    </div>
  );
};

export default Carrinho;
