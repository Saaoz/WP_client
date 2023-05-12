// App.js

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Under_Construction from './pages/Under_Construction/index';
import SingleChantier from './pages/SingleChantier/index';
import ChantierExistant from './pages/Chantier_Existant/index';
import Create from './pages/Create_project/index';
import CreateWorkmanager from './pages/Create_worksmanagers/index';
import { useState } from 'react';
import './App.css';
import { ThemeContext } from './ThemeContext';

// import for folding area

import Folding from './pages/Folding_category/index'


import Couvertineschoice from './pages/Folding_category/Couvertines/index'
import FirstCouvertines from './pages/Folding_category/Couvertines/Folding_c/Folding_c1/index'
import SecondCouvertines from './pages/Folding_category/Couvertines/Folding_c/Folding_c2/index'
import ThirstCouvertines from './pages/Folding_category/Couvertines/Folding_c/Folding_c3/index'

import Bavetteschoice from './pages/Folding_category/Bavettes/index'
import FirstBavettes from './pages/Folding_category/Bavettes/Folding_b/Folding_b1/index'
import SecondBavettes from './pages/Folding_category/Bavettes/Folding_b/Folding_b2/index'
import ThirstBavettes from './pages/Folding_category/Bavettes/Folding_b/Folding_b3/index'

import Validation from './pages/Validation';


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
          <Route path='/under_construction' element={<Under_Construction />} />
          <Route path="/chantier/:id" element={<SingleChantier />} />
          <Route path="/chantier_existant/" element={<ChantierExistant />} />
          <Route path="/createproject" element={<Create />} />
          <Route path="/createworkmanager" element={<CreateWorkmanager />} />

          {/* Folding choice page */}

          <Route path="/foldingchoice" element={<Folding/>} />

          <Route path="/foldingchoice/Bavettes" element={<Bavetteschoice/>} />
          <Route path="/foldingchoice/Bavettes/1" element={<FirstBavettes/>} />
          <Route path="/foldingchoice/Bavettes/2" element={<SecondBavettes/>} />
          <Route path="/foldingchoice/Bavettes/3" element={<ThirstBavettes/>} />


          <Route path="/foldingchoice/Couvertines" element={<Couvertineschoice/>} />
          <Route path="/foldingchoice/Couvertines/1" element={<FirstCouvertines/>} />
          <Route path="/foldingchoice/Couvertines/2" element={<SecondCouvertines/>} />
          <Route path="/foldingchoice/Couvertines/3" element={<ThirstCouvertines/>} />

        {/* Final production pdf */}
          <Route path="/pdf" element={<Validation />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
