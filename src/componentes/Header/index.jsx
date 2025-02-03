import styled from "styled-components";
import Logomarca from "../Logomarca";
import Opcoes from "../Opcoes";

const HeaderEstilizado = styled.header`
  background-color: var(--preto);
  padding: 1rem 20rem;
`;

const Header = () => {
  return (
    <HeaderEstilizado>
      <Logomarca />
      <Opcoes />
    </HeaderEstilizado>
  );
};

export default Header;
