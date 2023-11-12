import {
  Button,
  Container,
  Icon,
  Logo,
  NameLogo,
  QuantityItensInCart,
  SubNameLogo,
} from "./styles";

import cartIcon from "../../assets/cart.svg";
import { useAsideCart } from "../AsideCart/store";

function Navigation() {
  const {
    actions: { handleOpenCart },
  } = useAsideCart();

  return (
    <Container>
      <Logo>
        <NameLogo>MKS</NameLogo>
        <SubNameLogo>Sistemas</SubNameLogo>
      </Logo>

      <Button onClick={handleOpenCart}>
        <Icon src={cartIcon} alt="cart-icon" size={18} />
        <QuantityItensInCart>0</QuantityItensInCart>
      </Button>
    </Container>
  );
}

export default Navigation;
