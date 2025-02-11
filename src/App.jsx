import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./features/landing/pages/LandingPage";
import AIConnectPage from "./features/ai-connect/pages/AIConnectPage";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/prompt" element={<AIConnectPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
