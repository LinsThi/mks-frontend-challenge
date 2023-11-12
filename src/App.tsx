import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import theme from "./theme";
import Home from "./screens/Home";

function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <Home />

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
