import { Link } from "react-router";
import styled, { keyframes } from "styled-components";

const opcoes = ["Masculino", "Feminino", "Acessórios", "Jóias", "Eletrônicos"];

const rotas = {
  Masculino: "/categoria/roupas-masculinas",
  Feminino: "/categoria/roupas-femininas",
  Acessórios: "/categoria/acessorios",
  Jóias: "/categoria/joias",
  Eletrônicos: "/categoria/eletronicos",
};

const bgFade = keyframes`
  0% {
    background: rgba(255, 255, 255, 0);
    transform: scale(1);
  }
  50% {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
  }
  100% {
    background: rgba(255, 255, 255, 0);
    transform: scale(1.05);
  }
`;

const OpcoesEstilizadas = styled.ul`
  list-style: none;
  color: #fff;
  display: flex;
  gap: 20px;
  font-size: 25px;
  cursor: pointer;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 0.3s ease-in-out;

  li {
    position: relative;
    padding: 6px 12px;
    transition: all 0.4s ease-in-out;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 50%;
      width: 0%;
      height: 2px;
      background: white;
      transition: width 0.4s ease-in-out, left 0.4s ease-in-out;
      transform: translateX(-50%);
      opacity: 0;
    }

    &:hover {
      color: #ddd;
      animation: ${bgFade} 0.6s ease-in-out forwards;
      border-radius: 8px;
    }

    &:hover::after {
      width: 100%;
      left: 0%;
      opacity: 1;
    }
  }
`;

const LinkEstilizado = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Opcoes = () => {
  return (
    <OpcoesEstilizadas>
      {opcoes.map((opcao, index) => (
        <li key={index}>
          {rotas[opcao] ? (
            <LinkEstilizado to={rotas[opcao]}>{opcao}</LinkEstilizado>
          ) : (
            opcao
          )}
        </li>
      ))}
    </OpcoesEstilizadas>
  );
};

export default Opcoes;
