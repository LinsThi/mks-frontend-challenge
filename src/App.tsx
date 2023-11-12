import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";

import GlobalStyle from "./styles/global";
import theme from "./theme";
import Home from "./screens/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme.light}>
        <Navigation />

        <Home />

        <Footer />

        <Toast />
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
