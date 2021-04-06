import './App.css';
import Auth from './pages/Auth';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7c9473',
    },
    secondary: {
      main: '#e8eae6',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Auth />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
