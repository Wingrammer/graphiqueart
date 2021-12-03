import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './globalStyles';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Sidebar />
        <Routes>
          <Route path="/se-connecter" element={<Accueil/>}/>
          <Route path="/Template" element={<Accueil/>}/>
          <Route path="/Galérie-image" element={<Accueil/>}/>
          <Route path="/Music" element={<Accueil/>}/>
          <Route path="/Art-Market" element={<Accueil/>}/>
          <Route path="/Mode-Market" element={<Accueil/>}/>
          <Route path="/CV-design" element={<Accueil/>}/>
          <Route path="/portfolio" element={<Accueil/>}/>
          <Route path="/" element={<Accueil/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
