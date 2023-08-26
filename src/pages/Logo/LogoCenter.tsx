import { LogoImage } from "./styles";
import Group from "../../assets/Group.png";
export function LogoCenter() {
  return (
    <LogoImage>
      <img src={Group} className="container" />
    </LogoImage>
  );
}
