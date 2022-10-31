import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './pages/inicio';
import Error from './pages/error';
import ListaPlanetas from './pages/listaPlanetas';




function App() {



  return (
    <>


      <Router>

        <Routes>

          <Route path="/" element={<Inicio />} />

          <Route path="/planetas" element={<ListaPlanetas />} />

          <Route path="*" element={<Error/>} />

        </Routes>

      </Router>




    </>
  );
}

export default App;