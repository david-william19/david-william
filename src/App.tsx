// packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import HomePage from "./pages/home";
import ProjectPage from "./pages/project";
import PostsPage from "./pages/posts";
import DefaultPage from "./pages/default";

import styled, { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
import { GlobalStyles } from "./styles/globalStyles";
import Navbar from "./components/navbar";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Container>
          <Navbar />
          <Routes>
            {/* /home */}
            <Route index element={<HomePage />} />
            {/* /project */}
            <Route path="/project" element={<ProjectPage />} />
            {/* /about */}
            <Route path="/posts" element={<PostsPage />} />
            {/* no page */}
            <Route path="*" element={<DefaultPage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
    </QueryClientProvider>
  );
}

const Container = styled.div`
  height: 100vh;
  padding: 0;
  position: relative;
`;

export default App;
