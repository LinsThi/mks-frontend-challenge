import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import theme from "./theme";
import Home from "./screens/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <Navigation />

      <Home />

      <Footer />

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
