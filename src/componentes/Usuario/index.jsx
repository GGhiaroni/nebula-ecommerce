import { AiOutlineUser } from "react-icons/ai";
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
  position: relative;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: ${({ dropdownIsOpen }) => (dropdownIsOpen ? "block" : "none")};
  z-index: 1000;
`;

const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  color: #333;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const LogoutButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px 20px;
  background: none;
  border: none;
  color: #333;
  font-size: 16px;
  text-align: left;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const Usuario = () => {
  const usuario = useSelector((state) => state.usuario.dados);
  const [dropdownAberto, setDropdownAberto] = useState(false);
  return (
    <Container
      onMouseEnter={() => setDropdownAberto(true)}
      onMouseLeave={() => setDropdownAberto(false)}
    >
      {" "}
      {usuario ? (
        <>
          <FotoUsuario src={exemploFoto} />
          <DropdownMenu dropdownIsOpen={dropdownAberto}>
            <DropdownItem>
              <AiOutlineUser />
              Meu perfil
            </DropdownItem>
            <LogoutButton></LogoutButton>
          </DropdownMenu>
        </>
      ) : (
        <Link to={"/login"}>
          <SpanEstilizado>Faça seu login</SpanEstilizado>
        </Link>
      )}
    </Container>
  );
};

export default Usuario;
