import { useRef, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import styled, { keyframes } from "styled-components";
import { logout } from "../../store/reducers/usuario";
import exemploFoto from "/public/roupas-femininas-thumb.jpg";

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

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
  font-family: var(--fonteSecundaria);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 60px;
  right: -60px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: ${({ dropdownIsOpen }) => (dropdownIsOpen ? "block" : "none")};
  z-index: 1000;
  width: 180px;
  animation: ${({ dropdownIsOpen }) => (dropdownIsOpen ? slideDown : slideUp)}
    0.3s ease-in-out;
  transform-origin: top;
`;

const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  padding: 12px 20px;
  color: #333;
  text-decoration: none;
  font-size: 16px;
  font-family: var(--fonteSecundaria);
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #f8f9fa;
  }
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  font-family: var(--fonteSecundaria);
  background: none;
  border: none;
  color: #333;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #f8f9fa;
  }
`;

const Usuario = () => {
  const usuario = useSelector((state) => state.usuario.dados);
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const timeoutRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMouseEnterContainer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setDropdownAberto(true);
  };

  const handleMouseLeaveContainer = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownAberto(false);
    }, 300);
  };

  const handleMouseEnterDropdown = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setDropdownAberto(true);
  };

  const handleMouseLeaveDropdown = () => {
    setDropdownAberto(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Container
      onMouseEnter={handleMouseEnterContainer}
      onMouseLeave={handleMouseLeaveContainer}
    >
      {usuario ? (
        <>
          <FotoUsuario src={exemploFoto} alt="Foto do usuário" />
          <DropdownMenu
            dropdownIsOpen={dropdownAberto}
            onMouseEnter={handleMouseEnterDropdown}
            onMouseLeave={handleMouseLeaveDropdown}
          >
            <DropdownItem to={"/meu-perfil"}>
              <AiOutlineUser />
              Meu perfil
            </DropdownItem>
            <LogoutButton onClick={handleLogout}>
              <IoLogOutOutline />
              Logout
            </LogoutButton>
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
