import { useContext } from "react"; 

import { CartContext  } from "../context/useCart";

export const cartCouter = () => {
    const context = useContext(CartContext)
    return context
}