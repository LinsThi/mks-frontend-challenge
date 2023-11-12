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

function Navigation() {
  return (
    <Container>
      <Logo>
        <NameLogo>MKS</NameLogo>
        <SubNameLogo>Sistemas</SubNameLogo>
      </Logo>

      <Button>
        <Icon src={cartIcon} alt="cart-icon" size={18} />
        <QuantityItensInCart>0</QuantityItensInCart>
      </Button>
    </Container>
  );
}

export default Navigation;
