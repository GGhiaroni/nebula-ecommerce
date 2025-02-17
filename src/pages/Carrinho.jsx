import { GiShoppingCart } from "react-icons/gi";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Total = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  object-fit: cover;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;

const ItemQuantity = styled.p`
  font-size: 14px;
  color: #555;
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: #888;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const Carrinho = () => {
  const carrinho = useSelector((state) => state.carrinho);

  const total = carrinho.reduce((acc, item) => {
    acc += item.price * item.quantidade || 0;
    return acc;
  }, 0);

  return (
    <Container>
      <Header>
        <Title>
          <GiShoppingCart size={28} /> Carrinho de Compras
        </Title>
        <Total>Total: R$ {total.toFixed(2).replace(".", ",")}</Total>
      </Header>

      {carrinho.length > 0 ? (
        <ItemList>
          {carrinho.map((item) => (
            <Item key={item.id}>
              <ItemImage src={item.image} alt={item.title} />
              <ItemDetails>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemQuantity>Quantidade: {item.quantidade}</ItemQuantity>
              </ItemDetails>
            </Item>
          ))}
        </ItemList>
      ) : (
        <EmptyMessage>O carrinho está vazio.</EmptyMessage>
      )}

      <div style={{ textAlign: "right", marginTop: "20px" }}>
        <Button>Finalizar Compra</Button>
      </div>
    </Container>
  );
};

export default Carrinho;
