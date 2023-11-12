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

function AsideCart() {
  const {
    state: { isOpened },
    actions: { handleCloseCart },
  } = useAsideCart();

  return (
    <Container isOpened={isOpened}>
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
        <ProductCart>
          <ImageProductCart
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/41-nc-alum-red-sport-band-red-s9?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1693325468410"
            alt="image-product"
          />

          <NameProductCart>Apple Watch Series 4 GPS</NameProductCart>

          <QuantityProductInCart>
            <LabelQuantity>Qtd:</LabelQuantity>

            <QuantityProduct>
              <ButtonQuantity>
                <TextButtonQuantity>-</TextButtonQuantity>
              </ButtonQuantity>

              <TextQuantity>1</TextQuantity>

              <ButtonQuantity>
                <TextButtonQuantity>+</TextButtonQuantity>
              </ButtonQuantity>
            </QuantityProduct>
          </QuantityProductInCart>

          <ValueProductCart>R$399</ValueProductCart>

          <ButtonRemove>
            <TextButtonRemove>X</TextButtonRemove>
          </ButtonRemove>
        </ProductCart>

        <ProductCart>
          <ImageProductCart
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/41-nc-alum-red-sport-band-red-s9?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1693325468410"
            alt="image-product"
          />

          <NameProductCart>Apple Watch Series 4 GPS</NameProductCart>

          <div>quantity</div>

          <ValueProductCart>R$399</ValueProductCart>

          <ButtonRemove>
            <TextButtonRemove>X</TextButtonRemove>
          </ButtonRemove>
        </ProductCart>

        <ProductCart>
          <ImageProductCart
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/41-nc-alum-red-sport-band-red-s9?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1693325468410"
            alt="image-product"
          />

          <NameProductCart>Apple Watch Series 4 GPS</NameProductCart>

          <div>quantity</div>

          <ValueProductCart>R$399</ValueProductCart>

          <ButtonRemove>
            <TextButtonRemove>X</TextButtonRemove>
          </ButtonRemove>
        </ProductCart>

        <ProductCart>
          <ImageProductCart
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/41-nc-alum-red-sport-band-red-s9?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1693325468410"
            alt="image-product"
          />

          <NameProductCart>Apple Watch Series 4 GPS</NameProductCart>

          <div>quantity</div>

          <ValueProductCart>R$399</ValueProductCart>

          <ButtonRemove>
            <TextButtonRemove>X</TextButtonRemove>
          </ButtonRemove>
        </ProductCart>

        <ProductCart>
          <ImageProductCart
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/41-nc-alum-red-sport-band-red-s9?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1693325468410"
            alt="image-product"
          />

          <NameProductCart>Apple Watch Series 4 GPS</NameProductCart>

          <div>quantity</div>

          <ValueProductCart>R$399</ValueProductCart>

          <ButtonRemove>
            <TextButtonRemove>X</TextButtonRemove>
          </ButtonRemove>
        </ProductCart>

        <ProductCart>
          <ImageProductCart
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/41-nc-alum-red-sport-band-red-s9?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1693325468410"
            alt="image-product"
          />

          <NameProductCart>Apple Watch Series 4 GPS</NameProductCart>

          <div>quantity</div>

          <ValueProductCart>R$399</ValueProductCart>

          <ButtonRemove>
            <TextButtonRemove>X</TextButtonRemove>
          </ButtonRemove>
        </ProductCart>

        <ProductCart>
          <ImageProductCart
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/41-nc-alum-red-sport-band-red-s9?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1693325468410"
            alt="image-product"
          />

          <NameProductCart>Apple Watch Series 4 GPS</NameProductCart>

          <div>quantity</div>

          <ValueProductCart>R$399</ValueProductCart>

          <ButtonRemove>
            <TextButtonRemove>X</TextButtonRemove>
          </ButtonRemove>
        </ProductCart>
      </ListCartProducts>

      <FooterAside>
        <TotalValueProductsInCart>
          <TextTotal>Total: </TextTotal>
          <TextTotal>R$ 798 </TextTotal>
        </TotalValueProductsInCart>

        <ButtonFinalizePurchase>
          <TextButtonFinalizePurchase>
            Finalizar compra
          </TextButtonFinalizePurchase>
        </ButtonFinalizePurchase>
      </FooterAside>
    </Container>
  );
}

export default AsideCart;
