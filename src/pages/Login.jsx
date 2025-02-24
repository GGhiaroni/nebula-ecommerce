import { useState } from "react";
import { MdLogin } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const buttonHover = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #74ebd5, #acb6e5);
  animation: ${fadeIn} 1s ease-out;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 320px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #333;
`;

const Input = styled.input`
  width: 90%;
  padding: 12px;
  margin: 10px 0;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  font-family: var(--fontePrimaria);
  &:focus {
    border-color: #74ebd5;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 12px;
  background-color: #1a9b83;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;
  gap: 10px;

  &:hover {
    animation: ${buttonHover} 0.5s ease-in-out;
    background-color: #19c8a8;
  }
`;

const Emoji = styled.span`
  font-size: 40px;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Por favor, preencha todos os campos! 😅");
      return;
    }
    toast.success("Login realizado com sucesso! 🎉");
  };

  return (
    <PageContainer>
      <Card>
        <Emoji>🥳</Emoji>
        <Title>Bem-vindo de volta!</Title>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>
          Entrar <MdLogin color="#ffffff" size={20} />{" "}
        </Button>
        <ToastContainer />
      </Card>
    </PageContainer>
  );
};

export default Login;
