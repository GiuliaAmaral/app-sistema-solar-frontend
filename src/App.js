import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './pages/inicio';
import Error from './pages/error';
import ListaPlanetas from './pages/listaPlanetas';
import Detalhes from './pages/detalhes';
import { createTheme, ThemeProvider } from '@mui/material';



const theme = createTheme({
  palette: {
    primary:{
      main: '#F9AD1A',
      contrastText: '#fff'
    },
    secondary: {
      main: '#fff',
      contrastText: '#000'
    }
  }
  
})

function App() {



  return (
    <>

      <ThemeProvider theme={theme}>


        <Router>

          <Routes>

            <Route path="/" element={<Inicio />} />

            <Route path="/planetas" element={<ListaPlanetas />} />

            <Route path="/detalhes/:slug" element={<Detalhes />} />

            <Route path="*" element={<Error />} />

          </Routes>

        </Router>

      </ThemeProvider>




    </>
  );
}

export default App;