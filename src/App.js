import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Single from './pages/Single/index';

import './App.css';

function App() {
  return (
    <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chantier/:id" element={<Single />} />

            </Routes>
    </div>
  );
}
export default App;
