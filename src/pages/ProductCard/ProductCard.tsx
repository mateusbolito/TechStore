import { InfosCard, SectionCard } from "./styles";
import { Result } from "../../types/ISearchProducts";
import { ShoppingCart } from "phosphor-react";

import formatCurrency from "../../utils/FormatPrice";

import { useCart } from "../context/useCart";

interface dataProps {
  data: Result;
}

export function ProductCard({ data }: dataProps) {
  const { thumbnail, price, title } = data;

  const { handleAddToCart } = useCart();

  return (
    <SectionCard>
      <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} />

      <InfosCard>
        <h2 className="card__price">{formatCurrency(price, "BRL")} </h2>
        <h2 className="card__title"> {title} </h2>

        <button type="button" onClick={() => handleAddToCart({ id: data.id })}>
          <ShoppingCart size={25} />
        </button>
      </InfosCard>
    </SectionCard>
  );
}
