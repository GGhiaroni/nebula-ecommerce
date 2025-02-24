import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled, { keyframes } from "styled-components";
import ModalDePesquisa from "../ModalDePesquisa";
import cartIcon from "/public/cart-icon-white.png";
import chatIcon from "/public/chat-icon-white.png";
import searchIcon from "/public/search-icon-white.png";
import userIcon from "/public/user-icon-white.png";

const icones = [searchIcon, chatIcon, cartIcon, userIcon];

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

const bounceInItens = keyframes`
  0% { transform: scale(0.8); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); }
`;

const QuantidadeDeItens = styled.span`
  position: absolute;
  bottom: -12px;
  right: -15px;
  background: #ff4d4f;
  color: white;
  font-size: 15px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 50%;
  width: 6px;
  height: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  animation: ${bounceInItens} 0.3s ease-in-out;

  ${(props) =>
    props.quantidade > 9 &&
    `
    max-width: 26px;
    border-radius: 16px;
    padding: 4px 10px;
    `}
`;

const IconesHeader = () => {
  const [modalAberta, setModalAberta] = useState(false);

  const abrirModal = () => setModalAberta(true);
  const fecharModal = () => setModalAberta(false);

  const navigate = useNavigate();

  const totalItensCarrinho = useSelector((state) => state.carrinho).reduce(
    (acc, itens) => {
      acc += itens.quantidade;
      return acc;
    },
    0
  );

  const handleIconClick = (index) => {
    if (index === 0) {
      abrirModal();
    } else if (index === 2) {
      navigate("/carrinho");
    }
  };

  return (
    <>
      <IconesHeaderEstilizado>
        {icones.map((icone, index) => (
          <li key={index} onClick={() => handleIconClick(index)}>
            <img src={icone} alt="icone header" />
            {index === 2 && totalItensCarrinho > 0 && (
              <QuantidadeDeItens quantidade={totalItensCarrinho}>
                {totalItensCarrinho}
              </QuantidadeDeItens>
            )}
          </li>
        ))}
      </IconesHeaderEstilizado>
      {modalAberta && <ModalDePesquisa fecharModal={fecharModal} />}
    </>
  );
};

export default IconesHeader;
