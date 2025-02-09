import styled from "styled-components";
import iconeRelogio from "/public/clock-white.png";
import iconeCartoesDeCredito from "/public/creditCard-white.png";
import iconeCaminhaoEntrega from "/public/delivery-white.png";
import iconePacoteEntrega from "/public/package-white.png";

const informacoesCompra = [
  {
    titulo: "atendimento",
    descricao: "Segunda à sexta das 9h00 às 18h00",
    icone: iconeRelogio,
  },
  {
    titulo: "trocas e devoluções",
    descricao: "Primeira troca grátis",
    icone: iconePacoteEntrega,
  },
  {
    titulo: "frete",
    descricao: "Grátis em compras acima de R$299",
    icone: iconeCaminhaoEntrega,
  },
  {
    titulo: "parcelamento",
    descricao: "Em até 12x sem juros no cartão",
    icone: iconeCartoesDeCredito,
  },
];

const InformacoesCompraEstilizado = styled.div`
  padding: 3rem;
  background-color: var(--preto);
  display: flex;
  justify-content: center;
  gap: 100px;
  color: white;
  border-bottom: 1px solid #ffffff;
`;

const ContainerInformacoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 40px;
  }
`;

const ContainerTexto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    text-transform: uppercase;
    font-size: 20px;
  }
`;
const InformacoesCompra = () => {
  return (
    <InformacoesCompraEstilizado>
      {informacoesCompra.map((info, item) => (
        <ContainerInformacoes key={item}>
          <img src={info.icone} />
          <ContainerTexto>
            <h2>{info.titulo}</h2>
            <p>{info.descricao}</p>
          </ContainerTexto>
        </ContainerInformacoes>
      ))}
    </InformacoesCompraEstilizado>
  );
};

export default InformacoesCompra;
