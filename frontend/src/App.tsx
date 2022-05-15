import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from './pages/Listing';
import Form from 'pages/Form';
import Navbar from "components/Navbar";

function App() {
  return (
    //iniciar a configuração das rotas
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* na rota localhost:3000 abre a lista de filmes */}
        <Route path="/" element={<Listing />} />
        {/* na rota localhost:3000/form/idfilme abre a pagina de formulario*/}
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
