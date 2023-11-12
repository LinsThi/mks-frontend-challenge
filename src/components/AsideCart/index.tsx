import {
  ButtonClose,
  ButtonFinalizePurchase,
  ButtonQuantity,
  ButtonRemove,
  CloseIcon,
  Container,
  FooterAside,
  Header,
  ImageProductCart,
  LabelQuantity,
  ListCartProducts,
  NameProductCart,
  ProductCart,
  QuantityAndValueProduct,
  QuantityProduct,
  QuantityProductInCart,
  TextButtonFinalizePurchase,
  TextButtonQuantity,
  TextButtonRemove,
  TextQuantity,
  TextTotal,
  Title,
  TotalValueProductsInCart,
  ValueProductCart,
} from "./styles";
import { useAsideCart } from "./store";
import { removeCentsIfEquals0 } from "../../utils/price";
import { useToast } from "../Toast/store";
import { useCallback } from "react";

function AsideCart() {
  const {
    state: { isOpened, productsInCart },
    actions: {
      handleCloseCart,
      handleRemoveItemInCart,
      handleAddMoreQuantityItem,
      handleRemoveQuantityItem,
      getTotalValueForPurchase,
      buyAllProducts,
    },
  } = useAsideCart();

  const {
    actions: { addToast },
  } = useToast();

  const handleFinalizePurchase = useCallback(() => {
    const { message, status } = buyAllProducts();

    addToast(status === true ? "success" : "error", message);
  }, [addToast, buyAllProducts]);

  return (
    <Container $isOpened={isOpened}>
      <Header>
        <Title>
          Carrinho de <br />
          compras
        </Title>

        <ButtonClose onClick={handleCloseCart}>
          <CloseIcon>X</CloseIcon>
        </ButtonClose>
      </Header>

      <ListCartProducts>
        {productsInCart.map(({ product, quantity }) => (
          <ProductCart key={product.id + product.name}>
            <ImageProductCart src={product.photo} alt="image-product" />

            <NameProductCart>{product.name}</NameProductCart>

            <QuantityAndValueProduct>
              <QuantityProductInCart>
                <LabelQuantity>Qtd:</LabelQuantity>

                <QuantityProduct>
                  <ButtonQuantity
                    onClick={() => handleRemoveQuantityItem(product.id)}
                  >
                    <TextButtonQuantity>-</TextButtonQuantity>
                  </ButtonQuantity>

                  <TextQuantity>{quantity}</TextQuantity>

                  <ButtonQuantity
                    onClick={() => handleAddMoreQuantityItem(product.id)}
                  >
                    <TextButtonQuantity>+</TextButtonQuantity>
                  </ButtonQuantity>
                </QuantityProduct>
              </QuantityProductInCart>

              <ValueProductCart>
                R${removeCentsIfEquals0(product.price)}
              </ValueProductCart>
            </QuantityAndValueProduct>

            <ButtonRemove onClick={() => handleRemoveItemInCart(product.id)}>
              <TextButtonRemove>X</TextButtonRemove>
            </ButtonRemove>
          </ProductCart>
        ))}
      </ListCartProducts>

      <FooterAside>
        <TotalValueProductsInCart>
          <TextTotal>Total: </TextTotal>
          <TextTotal>
            R$ {removeCentsIfEquals0(getTotalValueForPurchase())}
          </TextTotal>
        </TotalValueProductsInCart>

        <ButtonFinalizePurchase onClick={handleFinalizePurchase}>
          <TextButtonFinalizePurchase>
            Finalizar compra
          </TextButtonFinalizePurchase>
        </ButtonFinalizePurchase>
      </FooterAside>
    </Container>
  );
}

export default AsideCart;
