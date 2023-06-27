// Importação dos components para Rota
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { HomePage } from "./pages/Home/HomePage";
import { MinhasPastasPage } from "./pages/MinhasPastas/MinhasPastasPage";
import { HeaderPartial } from "./partials/HeaderPartials/HeaderPartial";

function App() {
  return (
    // Component que precisa estar antes de todos
    <BrowserRouter>
      <div className="App">
        {/* Fica fora  do Routes, pois ele será fixo em todas as páginas */}
        <HeaderPartial />

        {/* Rotas */}
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/minhas-pastas" element={<MinhasPastasPage />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
