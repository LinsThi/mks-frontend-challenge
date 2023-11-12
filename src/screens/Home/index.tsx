import {
  ButtonBuy,
  ButtonTitle,
  Container,
  IconButton,
  ImageProduct,
  InfoInSameLine,
  InformationProduct,
  ListProducts,
  NameProduct,
  Product,
  ProductInfo,
  TextValueProduct,
  ValueProduct,
} from "./styles";

import shoppingIcon from "../../assets/shopping.svg";
import AsideCart from "../../components/AsideCart";

function Home() {
  return (
    <Container>
      <ListProducts>
        <Product>
          <ImageProduct
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/41-nc-alum-red-sport-band-red-s9?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1693325468410"
            alt="image-product"
          />

          <ProductInfo>
            <InfoInSameLine>
              <NameProduct>Apple WatchApple Wa</NameProduct>
              <ValueProduct>
                <TextValueProduct>R$399</TextValueProduct>
              </ValueProduct>
            </InfoInSameLine>

            <InformationProduct>
              Redesigned from scratch and completely revised.
            </InformationProduct>
          </ProductInfo>

          <ButtonBuy>
            <IconButton src={shoppingIcon} alt="button-icon" />
            <ButtonTitle>COMPRAR</ButtonTitle>
          </ButtonBuy>
        </Product>
      </ListProducts>

      <AsideCart />
    </Container>
  );
}

export default Home;
