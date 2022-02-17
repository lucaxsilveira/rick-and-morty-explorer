import { ThemeProvider } from '@mui/material/styles';

import AppRoutes from './routes';

import AppContext from './context';
import GlobalStyle from './styles/global';
import MainLayout from './layouts/MainLayout';
import { theme } from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <AppContext>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </AppContext>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
