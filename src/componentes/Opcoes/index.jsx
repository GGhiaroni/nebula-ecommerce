import styled from "styled-components";

const opcoes = [
  "Lançamentos",
  "Camisetas",
  "Shorts",
  "Moletons",
  "Jaquetas",
  "Calças",
  "Camisas",
  "Acessórios",
];
const OpcoesEstilizadas = styled.ul`
  list-style: none;
  color: #fff;
  display: flex;
`;

const Opcoes = () => {
  return (
    <OpcoesEstilizadas>
      {opcoes.map((opcao, index) => (
        <li key={index}>{opcao}</li>
      ))}
    </OpcoesEstilizadas>
  );
};

export default Opcoes;
