import styled from "styled-components";
import bagIcon from "./public/bag-icon-white.png";
import chatIcon from "./public/chat-icon-white.png";
import searchIcon from "./public/search-icon-white.png";

const icones = [bagIcon, chatIcon, searchIcon];

const IconesHeaderEstilizado = styled.ul`
  list-style: none;
`;

const IconesHeader = () => {
  return <IconesHeaderEstilizado>{}</IconesHeaderEstilizado>;
};

export default IconesHeader;
