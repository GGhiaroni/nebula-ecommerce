import { Link } from "react-router";
import styled from "styled-components";
import Logomarca from "../Logomarca";

const FooterEstilizado = styled.footer`
  background-color: var(--preto);
  padding: 3rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  gap: 8rem;
  font-family: var(--fonteSecundaria);

  @media (min-width: 768px) {
    padding: 3rem 5rem;
  }
`;

const FooterColunasLista = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  text-align: center;

  li {
    font-size: 22px;
    cursor: pointer;
    position: relative;
    white-space: nowrap;
  }

  li::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.5s ease;
  }

  li:hover::after {
    width: 100%;
  }

  li:hover {
    color: #ffffff;
  }

  @media (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }
`;

const Footer = () => {
  const listaFooter = [
    "Atendimento",
    "Quem somos",
    "Trocas e devoluções",
    "Avaliações",
    "Cashback",
  ];

  const rotas = {
    Atendimento: "/atendimento",
    "Quem somos": "/quem-somos",
    "Trocas e devoluções": "/trocas-e-devolucoes",
    Avaliações: "/avaliacoes",
    Cashback: "/cashback",
  };

  const LinkEstilizado = styled(Link)`
    text-decoration: none;
    color: white;
  `;

  return (
    <FooterEstilizado>
      <Logomarca />
      <FooterColunasLista>
        {listaFooter.map((item, index) => (
          <li key={index}>
            {rotas[item] ? (
              <LinkEstilizado to={rotas[item]}>{item}</LinkEstilizado>
            ) : (
              item
            )}
          </li>
        ))}
      </FooterColunasLista>
      <h2>Nebula © Todos os direitos reservados.</h2>
    </FooterEstilizado>
  );
};

export default Footer;
