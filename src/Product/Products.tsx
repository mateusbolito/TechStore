import { useEffect, useState } from "react";
import { Container } from "./styles";
import apiMercadoLivre from "../services/FetchProducts";
import { DataProductsQuery } from "../types/ISearchProducts";
import { ProductCard } from "../pages/ProductCard/ProductCard";

interface QueryProps {
  query: string;
}

export function Products({ query }: QueryProps) {
  const [products, setProducts] = useState<DataProductsQuery>();

  useEffect(() => {
    if (query !== "") {
      apiMercadoLivre.get(`search?q=${query}`).then((response) => {
        setProducts(response.data);
      });
    } else {
      apiMercadoLivre.get("").then((response) => {
        setProducts(response.data);
      });
    }
  }, [query]);

  return (
    <Container className="container">
      {products?.results?.map((product) => (
        <ProductCard key={product.id} data={product}></ProductCard>
      ))}
    </Container>
  );
}
