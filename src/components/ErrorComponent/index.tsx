import { Container, Image, Information } from "./styles";

function ErrorComponent() {
  return (
    <Container>
      <Image src="https://www.prosofteng.com/images/tiny-people-examining-operating-system-error-warning-web-page-isolated-flat-illustration.svg" />

      <Information>
        Algo deu errado, estamos buscando o problema. Tente novamente mais tarde
      </Information>
    </Container>
  );
}

export default ErrorComponent;
