import { useSelector } from "react-redux";
import { Link } from "react-router";
import styled from "styled-components";
import exemploFoto from "/public/roupas-femininas-thumb.jpg";

const FotoUsuario = styled.img`
  border-radius: 50%;
  object-fit: cover;
  height: 50px;
  width: 50px;
`;

const SpanEstilizado = styled.span`
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerFotoSpan = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const Usuario = () => {
  const usuario = useSelector((state) => state.usuario.dados);
  return (
    <Container>
      {" "}
      {usuario ? (
        <ContainerFotoSpan>
          <FotoUsuario src={exemploFoto} />
        </ContainerFotoSpan>
      ) : (
        <Link to={"/login"}>
          <SpanEstilizado>Faça seu login</SpanEstilizado>
        </Link>
      )}
    </Container>
  );
};

export default Usuario;
