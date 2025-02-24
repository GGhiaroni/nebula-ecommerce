import { useState } from "react";
import { MdLogin } from "react-icons/md";
import { Link } from "react-router";
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

const rotate = keyframes`
  from { transform: rotateY(0deg); }
  to { transform: rotateY(180deg); }
`;

const CardContainer = styled.div`
  perspective: 1000px;
`;

const Card = styled.div`
  width: 350px;
  padding: 30px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
  animation: rotate 0.8s ease forwards;
  transform-style: preserve-3d;
`;

const SwitchMode = styled.p`
  margin-top: 20px;
  color: #555;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #333;
  }
`;

const DivSpanEstilizado = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const SpanEstilizado = styled.span`
  font-size: 14px;
  color: #696969;
`;

const SegundoSpanEstilizado = styled(SpanEstilizado)`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: #acb6e5;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const LinkEstilizado = styled(Link)`
  text-decoration: none;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [possuiConta, setPossuiConta] = useState(true);

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Por favor, preencha todos os campos! ⚠️");
      return;
    }
    toast.success("Login realizado com sucesso! 🎉");
  };

  return (
    <PageContainer>
      <CardContainer>
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
          <DivSpanEstilizado>
            <SpanEstilizado>Ainda não possui uma conta?</SpanEstilizado>
            <LinkEstilizado>
              <SegundoSpanEstilizado>Cadastre-se</SegundoSpanEstilizado>
            </LinkEstilizado>
          </DivSpanEstilizado>
          <ToastContainer />
        </Card>
      </CardContainer>
    </PageContainer>
  );
};

export default Login;
