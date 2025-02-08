import styled from "styled-components";
import Logomarca from "../Logomarca";
import iconeRelogio from "/public/clock-white.png";
import iconeCartoesDeCredito from "/public/creditCard-white.png";
import iconeCaminhaoEntrega from "/public/delivery-white.png";
import iconePacoteEntrega from "/public/package-white.png";

const FooterEstilizado = styled.footer`
  background-color: var(--preto);
  padding: 3rem 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  color: white;
`;

const FooterColunas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 250px;

  h3 {
    font-size: 30px;
    margin-bottom: 15px;
    text-align: center;
    border-bottom: 1px solid #ffffff;
    padding-bottom: 5px;
    width: 100%;
  }

  p {
    font-size: 22px;
    line-height: 1.4;
  }
`;

const FooterColunasLista = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  li {
    font-size: 22px;
    cursor: pointer;
    transition: color 0.3s ease-in-out, transform 0.2s ease-in-out;
  }

  li:hover {
    color: #78b7ff;
    transform: translateX(5px);
  }
`;

const Footer = () => {
  const listaFooter = [
    "Atendimento",
    "Quem somos",
    "Trocas e devoluções",
    "Avaliações",
    "Cashback",
  ];

  const FooterColunasCondicoes = styled.div`
    display: flex;
  `;

  const condicoesFooter = [
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

  return (
    <FooterEstilizado>
      <FooterColunas>
        <Logomarca />
        <p>
          Estilo e moda streetwear na veia! Uma manifestação de arte através de
          roupas, inspiradas nas ruas, cidades e praias.
        </p>
      </FooterColunas>

      <FooterColunas>
        <h3>Institucional</h3>
        <FooterColunasLista>
          {listaFooter.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </FooterColunasLista>
      </FooterColunas>

      <FooterColunas>
        {condicoesFooter.map((condicao, index) => (
          <FooterColunasCondicoes key={index}>
            <img src={condicao.icone} alt={condicao.titulo} />
            <div>
              <h2>{condicao.titulo}</h2>
              <p>{condicao.descricao}</p>
            </div>
          </FooterColunasCondicoes>
        ))}
      </FooterColunas>

      <FooterColunas>
        <h3>Institucional</h3>
        <FooterColunasLista>
          {listaFooter.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </FooterColunasLista>
      </FooterColunas>
    </FooterEstilizado>
  );
};

export default Footer;
