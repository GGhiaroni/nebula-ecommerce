import { Link } from "react-router";
import styled from "styled-components";

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

const LinkLogo = styled(Link)`
  text-decoration: none;
`;

const Logomarca = () => {
  return (
    <LinkLogo to="/">
      <LogomarcaNebula>
        <h1>nebula</h1>
        <img src="../public/nebula-icon-white.png" />
      </LogomarcaNebula>
    </LinkLogo>
  );
};

export default Logomarca;
