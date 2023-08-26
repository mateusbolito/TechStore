import { useState } from "react";
import { Products } from "../../Product/Products";
import { InputSearch } from "../Input/Inputs";
import { LogoCenter } from "../Logo/LogoCenter";

export function HomePage() {
  const [query, setQuery] = useState("");
  return (
    <>
      <LogoCenter />
      <InputSearch setQuery={setQuery} />
      <Products query={query} />
    </>
  );
}
