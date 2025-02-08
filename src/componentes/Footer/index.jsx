import styled from "styled-components";
import Logomarca from "../Logomarca";

const FooterEstilizado = styled.footer`
  background-color: var(--preto);
  padding: 1rem 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterColunas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  max-width: 250px;
  p {
    font-size: 20px;
    line-height: 1.5;
  }
`;

const Footer = () => {
  return (
    <FooterEstilizado>
      <Logomarca />
      <FooterColunas>
        <p>
          Estilo e moda streetwear na veia! Uma manifestação de arte através de
          roupas. Inspiradas nas ruas, nas cidades e nas praias, nos vales e nos
          montes, de leste a oeste.
        </p>
      </FooterColunas>
      <FooterColunas>
        <Logomarca />
        <p>
          Estilo e moda streetwear na veia! Uma manifestação de arte através de
          roupas. Inspiradas nas ruas, nas cidades e nas praias, nos vales e nos
          montes, de leste a oeste.
        </p>
      </FooterColunas>
      <FooterColunas>
        <Logomarca />
        <p>
          Estilo e moda streetwear na veia! Uma manifestação de arte através de
          roupas. Inspiradas nas ruas, nas cidades e nas praias, nos vales e nos
          montes, de leste a oeste.
        </p>
      </FooterColunas>
    </FooterEstilizado>
  );
};

export default Footer;
