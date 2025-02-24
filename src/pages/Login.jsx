import { useState } from "react";
import { MdLogin, MdPersonAdd } from "react-icons/md";
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
  transform-style: preserve-3d;
  transition: transform 0.8s ease;
  transform: ${({ flipped }) =>
    flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
  height: ${({ flipped }) => (!flipped ? "380px" : "550px")};
  position: relative;
`;

const CardFace = styled.div`
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 12px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 30px;
`;

const FrontFace = styled(CardFace)`
  transform: rotateY(0deg);
  display: ${({ flipped }) => (flipped ? "none" : "flex")};
`;

const BackFace = styled(CardFace)`
  transform: rotateY(180deg);
  display: ${({ flipped }) => (flipped ? "flex" : "none")};
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
  margin-top: 15px;
`;

const SegundoSpanEstilizado = styled(SpanEstilizado)`
  margin-top: 10px;
  position: relative;
  cursor: pointer;
  display: inline-block;

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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [flipped, setFlipped] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Por favor, preencha todos os campos! ⚠️");
      return;
    }
    toast.success("Login realizado com sucesso! 🎉");
  };

  const handleCadastro = () => {
    if (!nome || !telefone || !cpf || !email || !password) {
      toast.error("Por favor, preencha todos os campos! ⚠️");
      return;
    }
    toast.success("Cadastro realizado com sucesso! 🎉");
  };

  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <PageContainer>
      <CardContainer>
        <Card flipped={flipped}>
          <FrontFace flipped={flipped}>
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

            <SpanEstilizado>Ainda não possui uma conta?</SpanEstilizado>
            <SegundoSpanEstilizado onClick={toggleFlip}>
              Cadastre-se
            </SegundoSpanEstilizado>
          </FrontFace>
          <BackFace flipped={flipped}>
            <Emoji>📝</Emoji>
            <Title>Crie sua conta!</Title>
            <Input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
            <Input
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
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
            <Button onClick={handleCadastro}>
              Cadastrar <MdPersonAdd color="#ffffff" size={20} />{" "}
            </Button>
            <SpanEstilizado>Já possui uma conta?</SpanEstilizado>
            <SegundoSpanEstilizado onClick={toggleFlip}>
              Faça login
            </SegundoSpanEstilizado>
          </BackFace>
        </Card>
      </CardContainer>
      <ToastContainer />
    </PageContainer>
  );
};

export default Login;
