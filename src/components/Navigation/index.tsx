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
    <Container data-testid="navigation-header">
      <Logo>
        <NameLogo>MKS</NameLogo>
        <SubNameLogo>Sistemas</SubNameLogo>
      </Logo>

      <Button onClick={handleOpenCart} data-testid="navigation-cart-button">
        <Icon src={cartIcon} alt="cart-icon" size={18} />
        <QuantityItensInCart data-testid="product-quantity-cart">
          {quantityItensInCart}
        </QuantityItensInCart>
      </Button>
    </Container>
  );
}

export default Navigation;
