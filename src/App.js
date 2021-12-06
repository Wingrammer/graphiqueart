import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import GlobalStyle from './globalStyles';
import Sidebar from './components/Sidebar';
import { colors, loading } from './assets';
import { useEffect, useState } from 'react';

function App() {

  const [siteLoading, setSiteLoading] = useState(true)

  useEffect(() => {
    setInterval(() => setSiteLoading(false), 5000)
  }, [])

  return (
    <div className="App">
      {siteLoading ?
      <div style={styles.loadingContainer}>
        <img alt="page loading" style={{maxHeight:'100vh'}} width="100%" src = {loading} />
      </div> :
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
      }
    </div>
  );
}

const styles = {
  loadingContainer:{
    height:"100vh", 
    width:'100%',
    display:'flex', 
    justifyContent:'center', 
    alignItems:'center',
    backgroundColor: colors.black
  }
}

export default App;
