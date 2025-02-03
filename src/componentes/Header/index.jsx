import styled from "styled-components";
import Logomarca from "../Logomarca";

const HeaderEstilizado = styled.header`
  background-color: var(--preto);
  padding: 1rem 20rem;
`;

const Header = () => {
  return (
    <HeaderEstilizado>
      <Logomarca />
    </HeaderEstilizado>
  );
};

export default Header;
