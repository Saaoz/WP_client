// App.js

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import SingleChantier from './pages/SingleChantier/index';
import Chantier_Existant from './pages/Chantier_Existant/index';
import Create from './pages/Create_project/index';
import CreateWorkmanager from './pages/Create_worksmanagers/index';
import { useState } from 'react';
import './App.css';
import { ThemeContext } from './ThemeContext';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chantier/:id" element={<SingleChantier />} />
          <Route path="/chantier_existant/" element={<Chantier_Existant />} />
          <Route path="/createproject" element={<Create />} />
          <Route path="/createworkmanager" element={<CreateWorkmanager />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
