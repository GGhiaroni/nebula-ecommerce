import { useState } from "react";
import { MdLogin, MdPersonAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled, { keyframes } from "styled-components";
import backgroundImage from "../../public/sign-up-bg.png";
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
  min-height: 100vh;
  background: linear-gradient(135deg, #74ebd5, #acb6e5);
  animation: ${fadeIn} 1s ease-out;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #333;
  font-size: 1.8rem;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s ease;
  font-family: var(--fontePrimaria);
  background-color: #f9f9f9;
  flex: 1;

  &:focus {
    border-color: #74ebd5;
    outline: none;
    box-shadow: 0 0 8px rgba(116, 235, 213, 0.3);
  }

  &::placeholder {
    color: #999;
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
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 500;

  &:hover {
    animation: ${buttonHover} 0.5s ease-in-out;
    background-color: #19c8a8;
    box-shadow: 0 4px 12px rgba(25, 200, 168, 0.3);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Emoji = styled.span`
  font-size: 30px;
`;

const CardContainer = styled.div`
  perspective: 1000px;
  width: 100%;
  max-width: 800px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transform-style: preserve-3d;
  transition: transform 0.8s ease;
  transform: ${({ flipped }) =>
    flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
  position: relative;
  min-height: 500px;
  display: flex;
  flex-direction: column;
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
  top: 0;
  left: 0;
`;

const FrontFace = styled(CardFace)`
  transform: rotateY(0deg);
  display: ${({ flipped }) => (flipped ? "none" : "flex")};
`;

const BackFace = styled(CardFace)`
  transform: rotateY(180deg);
  display: ${({ flipped }) => (flipped ? "flex" : "none")};
  width: 100%;
  height: 100%;
  min-width: 1000px;
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
  color: #1a9b83;
  font-weight: 500;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: #1a9b83;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const CepContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  align-items: stretch;
`;

const SmallInput = styled(Input)`
  flex: 1;
`;

const BackFaceContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const BackFaceEsquerda = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  width: 50%;
  height: 100%;
  border-radius: 12px 0 0 12px;
  min-height: 700px;
`;

const BackFaceDireita = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 4rem 2rem 2rem;
  width: 50%;
`;

const BackFaceDireitaColunas = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.2rem;

  & > div {
    display: flex;
    flex-direction: column;
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
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
  const [buscandoCep, setBuscandoCep] = useState(false);
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
      !sobrenome ||
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
      sobrenome,
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

    setBuscandoCep(true);

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

    setBuscandoCep(false);
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
            <BackFaceContainer>
              <BackFaceEsquerda></BackFaceEsquerda>
              <BackFaceDireita>
                <Title>
                  Crie sua conta! <Emoji>📝</Emoji>
                </Title>
                <BackFaceDireitaColunas>
                  <Input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Sobrenome"
                    value={sobrenome}
                    onChange={(e) => setSobrenome(e.target.value)}
                  />
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFoto(e.target.files[0])}
                  />
                  <Input
                    type="text"
                    placeholder="Telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                  />

                  <Input
                    type="text"
                    placeholder="Data de nascimento"
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                  />
                  <CepContainer>
                    <SmallInput
                      type="text"
                      placeholder="CEP"
                      value={cep}
                      onChange={(e) => {
                        setCep(e.target.value);
                        if (e.target.value.length === 8) {
                          handleCep(e.target.value);
                        }
                      }}
                      style={{ borderColor: buscandoCep ? "#1a9b83" : "" }}
                    />
                    {buscandoCep && <span>🔍</span>}
                  </CepContainer>
                  {rua && (
                    <>
                      <Input
                        type="text"
                        placeholder="Rua"
                        value={rua}
                        readOnly
                      />
                      <Input
                        type="text"
                        placeholder="Bairro"
                        value={bairro}
                        readOnly
                      />
                      <Input
                        type="text"
                        placeholder="Cidade"
                        value={cidade}
                        readOnly
                      />
                      <Input
                        type="text"
                        placeholder="Estado"
                        value={estado}
                        readOnly
                      />
                      <CepContainer>
                        <SmallInput
                          type="text"
                          placeholder="Número"
                          value={numero}
                          onChange={(e) => setNumero(e.target.value)}
                        />
                        <SmallInput
                          type="text"
                          placeholder="Complemento"
                          value={complemento}
                          onChange={(e) => setComplemento(e.target.value)}
                        />
                      </CepContainer>
                    </>
                  )}
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
                  <Input
                    type="password"
                    placeholder="Confirmar senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </BackFaceDireitaColunas>
                <Button onClick={handleCadastro}>
                  Cadastrar <MdPersonAdd color="#ffffff" size={20} />{" "}
                </Button>
                <SpanEstilizado>Já possui uma conta?</SpanEstilizado>
                <SegundoSpanEstilizado onClick={toggleFlip}>
                  Faça login
                </SegundoSpanEstilizado>
              </BackFaceDireita>
            </BackFaceContainer>
          </BackFace>
        </Card>
      </CardContainer>
      <ToastContainer />
    </PageContainer>
  );
};
export default Login;
