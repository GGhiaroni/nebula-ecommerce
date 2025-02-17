import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import ModalDePesquisa from "../ModalDePesquisa";
import bagIcon from "/public/bag-icon-white.png";
import chatIcon from "/public/chat-icon-white.png";
import searchIcon from "/public/search-icon-white.png";

const icones = [searchIcon, chatIcon, bagIcon];

const IconesHeaderEstilizado = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  cursor: pointer;
  li {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.4);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 50%;
      width: 0%;
      height: 2px;
      background-color: white;
      transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
      transform: translateX(-50%);
    }
  }

  img {
    width: 28px;
    transition: filter 0.3s ease-in-out;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const IconesHeader = () => {
  const [modalAberta, setModalAberta] = useState(false);

  const abrirModal = () => setModalAberta(true);
  const fecharModal = () => setModalAberta(false);

  const navigate = useNavigate();

  const handleIconClick = (index) => {
    if (index === 0) {
      abrirModal();
    } else {
      navigate("/carrinho");
    }
  };

  return (
    <>
      <IconesHeaderEstilizado>
        {icones.map((icone, index) => (
          <li key={index} onClick={() => handleIconClick(index)}>
            <img src={icone} alt="icone header" />
          </li>
        ))}
        ;
      </IconesHeaderEstilizado>
      {modalAberta && <ModalDePesquisa fecharModal={fecharModal} />}
    </>
  );
};

export default IconesHeader;
