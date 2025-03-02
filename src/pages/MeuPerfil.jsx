import React from "react";
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
  animation: ${slideIn} 0.5s ease-in-out;
`;

const Nome = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  animation: ${slideIn} 0.6s ease-in-out;
`;

const Email = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1rem;
  animation: ${slideIn} 0.7s ease-in-out;
`;

const Informacoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 400px;
  animation: ${slideIn} 0.8s ease-in-out;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.8rem;
  width: 100%;
`;

const Label = styled.span`
  font-weight: bold;
  margin-bottom: 0.2rem;
`;

const Valor = styled.span`
  font-size: 1.1rem;
`;

const MeuPerfil = () => {
  const usuario = useSelector((state) => state.usuario.dados);

  if (!usuario) {
    return <p>Usuário não logado.</p>;
  }

  return (
    <Container>
      <Avatar
        src={usuario.foto || "caminho/para/avatar-padrao.png"}
        alt="Avatar do usuário"
      />
      <Nome>{usuario.nome}</Nome>
      <Email>{usuario.email}</Email>
      <Informacoes>
        <Item>
          <Label>Nome Completo:</Label>
          <Valor>{usuario.nomeCompleto}</Valor>
        </Item>
        <Item>
          <Label>Data de Nascimento:</Label>
          <Valor>{usuario.dataNascimento}</Valor>
        </Item>
        <Item>
          <Label>Telefone:</Label>
          <Valor>{usuario.telefone}</Valor>
        </Item>
        {/* Adicione mais informações do usuário aqui */}
      </Informacoes>
    </Container>
  );
};

export default MeuPerfil;
