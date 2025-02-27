import styled from "styled-components";
import exemploFoto from "/public/roupas-femininas-thumb.jpg";

const FotoUsuario = styled.img`
  border-radius: 50%;
  object-fit: cover;
  height: 50px;
  width: 50px;
`;

const Usuario = () => {
  <FotoUsuario src={exemploFoto} />;
};

export default Usuario;
