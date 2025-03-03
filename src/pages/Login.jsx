import { useState } from "react";
import { MdLogin, MdPersonAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled, { keyframes } from "styled-components";
import { login } from "../store/reducers/usuario";

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
  padding: 6rem 12rem;
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

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
  text-align: left;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [flipped, setFlipped] = useState(false);
  const [foto, setFoto] = useState(null);
  const [dataNascimento, setDataNascimento] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [endereco, setEndereco] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Por favor, preencha todos os campos! ⚠️");
      return;
    }
    const usuariosCadastrados =
      JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuario = usuariosCadastrados.find(
      (u) => u.email === email && u.senha === password
    );

    if (usuario) {
      toast.success("Login realizado com sucesso! 🎉");

      dispatch(login(usuario));

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      toast.error("Email ou senha incorretos! ⚠️");
    }
  };

  const handleCadastro = () => {
    if (
      !nome ||
      !telefone ||
      !cpf ||
      !email ||
      !password ||
      !dataNascimento ||
      !cep
    ) {
      toast.error("Por favor, preencha todos os campos! ⚠️");
      return;
    }

    const usuariosCadastrados =
      JSON.parse(localStorage.getItem("usuarios")) || [];

    const emailJaExiste = usuariosCadastrados.find((u) => u.email === email);
    const telefoneJaExiste = usuariosCadastrados.find(
      (u) => u.telefone === telefone
    );
    const cpfJaExiste = usuariosCadastrados.find((u) => u.cpf === cpf);

    if (emailJaExiste) {
      toast.error("Este e-mail já está cadastrado! ⚠️");
      return;
    }

    if (telefoneJaExiste) {
      toast.error("Este número de telefone já está cadastrado! ⚠️");
      return;
    }

    if (cpfJaExiste) {
      toast.error("Este CPF já está cadastrado! ⚠️");
      return;
    }

    const reader = new FileReader();

    let novoUsuario = {
      nome,
      telefone,
      cpf,
      email,
      senha: password,
      foto: null,
      dataNascimento,
      cep,
      endereco,
    };

    reader.onloadend = () => {
      novoUsuario.foto = reader.result;
      usuariosCadastrados.push(novoUsuario);
      localStorage.setItem("usuarios", JSON.stringify(usuariosCadastrados));
      toast.success("Cadastro realizado com sucesso! 🎉");
      setTimeout(() => {
        toggleFlip();
      }, 2000);
    };

    if (foto) {
      reader.readAsDataURL(foto);
    } else {
      usuariosCadastrados.push(novoUsuario);
      localStorage.setItem("usuarios", JSON.stringify(usuariosCadastrados));
      toast.success("Cadastro realizado com sucesso! 🎉");
      setTimeout(() => {
        toggleFlip();
      }, 2000);
    }
  };

  const handleCep = async (cep) => {
    if (!cep) {
      setRua("");
      setBairro("");
      setCidade("");
      setEstado("");
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        toast.error("CEP não encontrado! ⚠️");
        setRua("");
        setBairro("");
        setCidade("");
        setEstado("");
        return;
      }

      setRua(data.logradouro);
      setBairro(data.bairro);
      setCidade(data.localidade);
      setEstado(data.uf);
    } catch (error) {
      toast.error("Erro ao buscar o endereço! ⚠️");
      setRua("");
      setBairro("");
      setCidade("");
      setEstado("");
    }
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
            <Label>Nome</Label>
            <Input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <Label>Foto</Label>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setFoto(e.target.files[0])}
            />
            <Label>Telefone</Label>
            <Input
              type="text"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />

            <Label>Data de nascimento</Label>
            <Input
              type="text"
              placeholder="Data de nascimento"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
            />
            <Label>CPF</Label>
            <Input
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <FormGrid>
              <FormGroup>
                <Label>CEP</Label>
                <Input
                  type="text"
                  placeholder="CEP"
                  value={cep}
                  onChange={(e) => {
                    setCep(e.target.value);
                    handleCep(e.target.value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label>Rua</Label>
                <Input type="text" placeholder="Rua" value={rua} readOnly />
              </FormGroup>
              <FormGroup>
                <Label>Bairro</Label>
                <Input
                  type="text"
                  placeholder="Bairro"
                  value={bairro}
                  readOnly
                />
              </FormGroup>
              <FormGroup>
                <Label>Cidade</Label>
                <Input
                  type="text"
                  placeholder="Cidade"
                  value={cidade}
                  readOnly
                />
              </FormGroup>
              <FormGroup>
                <Label>Estado</Label>
                <Input
                  type="text"
                  placeholder="Estado"
                  value={estado}
                  readOnly
                />
              </FormGroup>
              <FormGroup>
                <Label>Número</Label>
                <Input
                  type="text"
                  placeholder="Número"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label>Complemento</Label>
                <Input
                  type="text"
                  placeholder="Complemento"
                  value={complemento}
                  onChange={(e) => setComplemento(e.target.value)}
                />
              </FormGroup>
            </FormGrid>
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
