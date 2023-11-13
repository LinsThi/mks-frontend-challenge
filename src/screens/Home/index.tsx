import {
  ButtonBuy,
  ButtonTitle,
  Container,
  IconButton,
  Image,
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
import { useQueryGetProducts } from "../../queries/useQueryGetProducts";
import LoadingComponent from "../../components/LoadingComponent";
import ErrorComponent from "../../components/ErrorComponent";
import { useAsideCart } from "../../components/AsideCart/store";

function Home() {
  const { isLoading, isError, data: responseProducts } = useQueryGetProducts();
  const {
    actions: { handleAddItemInCart },
  } = useAsideCart();

  if (isLoading) return <LoadingComponent />;

  if (isError) return <ErrorComponent />;

  return (
    <Container data-testid="main-content">
      <ListProducts>
        {responseProducts?.map((currentProduct) => (
          <Product
            key={currentProduct.id + currentProduct.name}
            data-testid="product-component"
          >
            <ImageProduct>
              <Image src={currentProduct.photo} alt="image-product" />
            </ImageProduct>

            <ProductInfo>
              <InfoInSameLine>
                <NameProduct>{currentProduct.name}</NameProduct>

                <ValueProduct>
                  <TextValueProduct>R${currentProduct.price}</TextValueProduct>
                </ValueProduct>
              </InfoInSameLine>

              <InformationProduct>
                {currentProduct.description}
              </InformationProduct>
            </ProductInfo>

            <ButtonBuy
              onClick={() => handleAddItemInCart(currentProduct)}
              data-testid="button-buy-product"
            >
              <IconButton src={shoppingIcon} alt="button-icon" />
              <ButtonTitle>COMPRAR</ButtonTitle>
            </ButtonBuy>
          </Product>
        ))}
      </ListProducts>

      <AsideCart />
    </Container>
  );
}

export default Home;
