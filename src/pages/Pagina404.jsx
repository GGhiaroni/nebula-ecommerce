import { Link } from "react-router";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PaginaDeErroEstilizada = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #121212;
  color: #ffffff;
  text-align: center;
  animation: ${fadeIn} 1s ease-in-out;

  h1 {
    font-size: 6rem;
    margin: 0;
    color: #ff4757;
    text-shadow: 4px 4px 10px rgba(255, 71, 87, 0.7);
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.8;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  background: linear-gradient(45deg, #ff4757, #ff6b81);
  padding: 12px 24px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 71, 87, 0.5);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(255, 71, 87, 0.7);
  }
`;
const Pagina404 = () => {
  return (
    <PaginaDeErroEstilizada>
      <h1>404</h1>
      <h2>Oops! Página não encontrada</h2>
      <p>
        A página que você está procurando pode ter sido removida ou nunca
        existiu.
      </p>
      <Button to="/">Voltar para a Home</Button>
    </PaginaDeErroEstilizada>
  );
};

export default Pagina404;
