import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import { atualizarPerfil } from "../store/reducers/usuario";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 4rem;
  width: 90%;
  max-width: 600px;
  position: relative;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #f4f7f9;
  padding: 80px 0px;
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 5px;
  animation: ${slideIn} 0.5s ease-in-out;
  object-fit: cover;
`;

const Nome = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  animation: ${slideIn} 0.6s ease-in-out;
  color: #333;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-in-out;
  padding: 20px;
`;

const ModalConteudo = styled.div`
  background-color: white;
  padding: 5rem;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  position: relative;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ModalFechar = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f4f4f4;
  padding: 10px;
  border-radius: 6px;
  margin-top: 10px;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: 600;
  color: #444;
`;

const Valor = styled.span`
  font-size: 1rem;
  color: #333;
`;

const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #007bff;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.3);
    background-color: #f9fbfd;
  }
`;

const SaveButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 12px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const AlterarSenhaButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 12px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const MeuPerfil = () => {
  const usuarioLogado = useSelector((state) => state.usuario.dados);
  const todosOsUsuarios = useSelector((state) => state.usuario.lista);
  const [modalAberta, setModalAberta] = useState(false);
  const [campoEditando, setCampoEditando] = useState("");
  const [valorEditado, setValorEditado] = useState("");

  if (!usuarioLogado) {
    return <p>Usuário não logado.</p>;
  }

  const dispatch = useDispatch();

  const abrirModal = (campo, valor) => {
    setCampoEditando(campo);
    setValorEditado(valor);
    setModalAberta(true);
  };

  const fecharModal = () => {
    setModalAberta(false);
  };

  const alterarDado = () => {
    if (!usuarioLogado || !campoEditando) return;

    const usuarioAtualizado = {
      ...usuarioLogado,
      [campoEditando]: valorEditado,
    };

    const novaListaDeUsuarios = todosOsUsuarios.map((user) => {
      user.id === usuarioLogado.id ? usuarioAtualizado : user;
    });

    localStorage.setItem("usuarios", JSON.stringify(novaListaDeUsuarios));

    dispatch(atualizarPerfil(usuarioAtualizado));

    fecharModal();
  };

  return (
    <Container>
      <Card>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar src={usuarioLogado.foto} alt="foto usuário" />
          <Nome>
            {usuarioLogado.nome} {usuarioLogado.sobrenome}
          </Nome>
        </div>
        <Label>Nome</Label>
        <InputGroup>
          <Valor>
            {usuarioLogado.nome} {usuarioLogado.sobrenome}
          </Valor>
          <EditButton onClick={() => abrirModal("Nome", usuarioLogado.nome)}>
            <MdEdit />
          </EditButton>
        </InputGroup>

        <Label>E-mail</Label>
        <InputGroup>
          <Valor>{usuarioLogado.email}</Valor>
          <EditButton>
            <MdEdit />
          </EditButton>
        </InputGroup>

        <Label>Telefone</Label>
        <InputGroup>
          <Valor>{usuarioLogado.telefone}</Valor>
          <EditButton>
            <MdEdit />
          </EditButton>
        </InputGroup>

        <Label>Endereço</Label>
        <InputGroup>
          <Valor>{usuarioLogado.endereco}</Valor>
          <EditButton>
            <MdEdit />
          </EditButton>
        </InputGroup>
        <AlterarSenhaButton>alterar senha</AlterarSenhaButton>
      </Card>
      {modalAberta && (
        <Modal>
          <ModalConteudo>
            <ModalFechar onClick={fecharModal}>&times;</ModalFechar>
            <h2>Editar Perfil</h2>
            <Modal>
              <ModalConteudo>
                <ModalFechar onClick={fecharModal}>&times;</ModalFechar>
                <h2>Editar {campoEditando}</h2>
                <Input placeholder={valorEditado} />
                <SaveButton onClick={alterarDado}>Salvar</SaveButton>
              </ModalConteudo>
            </Modal>
          </ModalConteudo>
        </Modal>
      )}
    </Container>
  );
};

export default MeuPerfil;
