import { useSelector } from "react-redux";
import { useParams } from "react-router";

const Categoria = () => {
  const { nomeCategoria } = useParams();
  const categoria = useSelector((state) =>
    state.categorias.find((cat) => cat.caminhoUrl === nomeCategoria)
  );
  return <img src={categoria.header} alt={categoria.nome} />;
};

export default Categoria;
