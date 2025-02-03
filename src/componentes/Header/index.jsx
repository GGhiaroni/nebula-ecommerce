import styled from "styled-components";

const HeaderEstilizado = styled.header`
  background-color: var(--preto);
  padding: 1rem 20rem;
`;

const LogomarcaNebula = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  h1 {
    color: #ffffff;
    font-size: 38px;
  }
  img {
    width: 40px;
    height: 40px;
  }
`;

const Header = () => {
  return (
    <HeaderEstilizado>
      <LogomarcaNebula>
        <h1>nebula</h1>
        <img src="../public/nebula-icon-white.png" />
      </LogomarcaNebula>
    </HeaderEstilizado>
  );
};

export default Header;
