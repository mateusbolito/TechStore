import { createContext, useContext, useState } from "react";

interface CartContextData {
  cartItems: CartItem[];
  cartItemCount: number;
  handleAddToCart: (item: CartItem) => void;
}

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

interface CartItem {
  id: string;
}

export const CartProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartItemCount, setCartItemCount] = useState<number>(1);
  console.log(cartItems);
  const handleAddToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
    setCartItemCount(cartItemCount + 1);
    console.log(cartItemCount);
  };
  const contextValue: CartContextData = {
    cartItems,
    cartItemCount,
    handleAddToCart,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}

export { useCart };
