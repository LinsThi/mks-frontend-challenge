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
import { useMemo } from "react";

function Navigation() {
  const {
    state: { productsInCart },
    actions: { handleOpenCart },
  } = useAsideCart();

  const quantityItensInCart = useMemo(() => {
    return productsInCart.length;
  }, [productsInCart.length]);

  return (
    <Container>
      <Logo>
        <NameLogo>MKS</NameLogo>
        <SubNameLogo>Sistemas</SubNameLogo>
      </Logo>

      <Button onClick={handleOpenCart}>
        <Icon src={cartIcon} alt="cart-icon" size={18} />
        <QuantityItensInCart>{quantityItensInCart}</QuantityItensInCart>
      </Button>
    </Container>
  );
}

export default Navigation;
