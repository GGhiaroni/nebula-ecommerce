import styled from "styled-components";

const HeaderEstilizado = styled.header`
  background-color: var(--preto);
  padding: 1rem 20rem;
`;

const LogomarcaNebula = styled.div`
  display: flex;
  gap: 20px;
  h1 {
    color: #ffffff;
    font-size: 32px;
  }
`;

const Header = () => {
  return (
    <HeaderEstilizado>
      <LogomarcaNebula>
        <h1>nebula</h1>
        <img src="../public/nebula-icon.png" />
      </LogomarcaNebula>
    </HeaderEstilizado>
  );
};

export default Header;
