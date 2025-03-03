import React from "react";
import { MdEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

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
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 1rem;
  animation: ${slideIn} 0.5s ease-in-out;
  object-fit: cover;
`;

const Nome = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  animation: ${slideIn} 0.6s ease-in-out;
  color: #333;
`;

const Email = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1.5rem;
  animation: ${slideIn} 0.7s ease-in-out;
`;

const Informacoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  animation: ${slideIn} 0.8s ease-in-out;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
`;

const Label = styled.span`
  font-weight: 600;
  margin-bottom: 0.2rem;
  color: #444;
`;

const Valor = styled.span`
  font-size: 1rem;
  color: #333;
`;

const EditButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const MeuPerfil = () => {
  const usuario = useSelector((state) => state.usuario.dados);

  if (!usuario) {
    return <p>Usuário não logado.</p>;
  }

  return (
    <Container>
      <Card>
        <EditButton>
          <MdEdit size={20} />
        </EditButton>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar src={usuario.foto} alt="foto usuário" />
          <Nome>{usuario.nome}</Nome>
          <Email>{usuario.email}</Email>
        </div>
        <Informacoes>
          <Item>
            <Label>Nome Completo:</Label>
            <Valor>{usuario.nome}</Valor>
          </Item>
          <Item>
            <Label>Telefone:</Label>
            <Valor>{usuario.telefone}</Valor>
          </Item>
          {usuario.dataNascimento && (
            <Item>
              <Label>Data de Nascimento:</Label>
              <Valor>{usuario.dataNascimento}</Valor>
            </Item>
          )}
          {usuario.endereco && (
            <Item>
              <Label>Endereço:</Label>
              <Valor>{usuario.endereco}</Valor>
            </Item>
          )}
        </Informacoes>
      </Card>
    </Container>
  );
};

export default MeuPerfil;
