import { CartCount, HeaderHome, ImagemHome, ListHome } from "./styles";
import logo from "../../assets/logo.png";
import { ShoppingCart } from "phosphor-react";
import { cartCouter } from "../hook/usersCartS";

export function HeaderContainer() {
  const { cartItemCount } = cartCouter();
  console.log(cartItemCount);
  return (
    <HeaderHome className="container">
      <ListHome>
        <ImagemHome>
          <img src={logo} alt="image" />
        </ImagemHome>

        <a href="">Notbook & Computadores</a>
        <a href="">Networking Devices</a>
        <a href="">Todos Produtos</a>
        <a href="">Celulares</a>

        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>

        <CartCount>
          {cartItemCount > 0 && <span>{cartItemCount}</span>}
          <ShoppingCart size={25} />
        </CartCount>
      </ListHome>
      <ImagemHome>
        <img src={logo} alt="image" />
      </ImagemHome>
    </HeaderHome>
  );
}
