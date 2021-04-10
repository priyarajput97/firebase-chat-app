import './App.css';
import Auth from './pages/Auth';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router';
import Profile from './pages/Profile';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';

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
    <AuthProvider>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path='/login'>
              <Auth />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/'>
              <Auth />
            </Route>
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </AuthProvider>
  );
}

export default App;
