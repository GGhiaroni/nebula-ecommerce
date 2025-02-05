import { useEffect, useState } from "react";

const FeedHome = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const produtos = fetch(
      "https://fakestoreapi.com/products/category/men's%20clothing"
    )
      .then((res) => res.json())
      .then((json) => setFeed(json));
  }, []);

  return (
    <>
      {feed.map((produto) => (
        <img src={produto.image} />
      ))}
    </>
  );
};

export default FeedHome;
