import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

const ResultadosDePesquisa = () => {
  const [searchParams] = useSearchParams();
  const termoDePesquisa = searchParams.get("query") || "";

  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    if (termoDePesquisa) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          const produtosFiltrados = data.filter((produto) =>
            produto.title.toLowerCase().includes(termoDePesquisa.toLowerCase())
          );
          setResultados(produtosFiltrados);
        });
    }
  }, [termoDePesquisa]);

  return (
    <div>
      <h2>Resultados para: "{termoDePesquisa}"</h2>
      <div>
        {resultados.length > 0 ? (
          resultados.map((produto) => (
            <div key={produto.id}>
              <img src={produto.image} alt={produto.title} width="100" />
              <p>{produto.title}</p>
            </div>
          ))
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default ResultadosDePesquisa;
