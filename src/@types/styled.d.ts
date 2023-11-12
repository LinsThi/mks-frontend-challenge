import "styled-components";
import theme from "../theme";

declare module "styled-components" {
  type TypeProps = typeof theme.light;

  export interface DefaultTheme extends TypeProps {}
}
