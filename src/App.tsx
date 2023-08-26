import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { DefaultLayout } from "./layouts";
import { DefaultTheme } from "./styles/theme/default";
import { HomePage } from "./pages/home";
import { CartProvider } from "./pages/context/useCart";

export function App() {
  return (
    <CartProvider>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        <DefaultLayout />
        <HomePage />
      </ThemeProvider>
    </CartProvider>
  );
}
