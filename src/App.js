import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import SingleChantier from './pages/SingleChantier/index';
import Chantier_Existant from './pages/Chantier_Existant/index';
import Create from './pages/Create_project/index'

import './App.css';

function App() {
  return (
    <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chantier/:id" element={<SingleChantier />} />
                <Route path="/chantier_existant/" element={<Chantier_Existant />} />
                <Route path="/create" element={<Create />} />
            </Routes>
    </div>
  );
}
export default App;
