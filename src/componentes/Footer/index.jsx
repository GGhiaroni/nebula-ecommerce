import styled from "styled-components";
import Logomarca from "../Logomarca";

const FooterEstilizado = styled.footer`
  background-color: var(--preto);
  padding: 1rem 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterColunas = styled.div``;

const Footer = () => {
  return (
    <FooterEstilizado>
      <FooterColunas>
        <Logomarca />
      </FooterColunas>
    </FooterEstilizado>
  );
};

export default Footer;
