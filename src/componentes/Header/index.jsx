import styled from "styled-components";
import IconesHeader from "../IconesHeader";
import Logomarca from "../Logomarca";
import Opcoes from "../Opcoes";

const HeaderEstilizado = styled.header`
  background-color: var(--preto);
  padding: 1rem 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderEstilizado>
      <Logomarca />
      <Opcoes />
      <IconesHeader />
    </HeaderEstilizado>
  );
};

export default Header;
