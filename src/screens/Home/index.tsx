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

function Home() {
  const { isLoading, isError, data: responseProducts } = useQueryGetProducts();

  if (isLoading) return <LoadingComponent />;

  if (isError) return <ErrorComponent />;

  return (
    <Container>
      <ListProducts>
        {responseProducts?.map((currentProduct) => (
          <Product>
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

            <ButtonBuy>
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
