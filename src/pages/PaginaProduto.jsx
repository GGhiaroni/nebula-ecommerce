import { useEffect, useState } from "react";
import { useParams } from "react-router";

const PaginaProduto = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    const produto = fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduto(data));
  }, []);

  return (
    <>
      <h1>{produto.title}</h1>
      <h3>R${produto.price}</h3>
      <img src={produto.image} />
    </>
  );
};

export default PaginaProduto;
