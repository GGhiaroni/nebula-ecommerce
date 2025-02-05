const FeedHome = () => {
  const produtos = fetch(
    "https://fakestoreapi.com/products/category/men's%20clothing"
  )
    .then((res) => res.json())
    .then((json) => console.log(json));

  return (
    <>
      {produtos.map((produto) => {
        <img src={produto.image} />;
      })}
    </>
  );
};

export default FeedHome;
