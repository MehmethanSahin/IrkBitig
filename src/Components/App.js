import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Nedir from "./Nedir.js";
import Data from "./Data.js";
import Navbar from "./Navbar";
import Cards from "./Cards.js";
import Footer from "./Footer";
import Galeri from "./Galeri.js";
import Anasayfa from "./Anasayfa.js";

function App(props) {
  const [getInfo, setInfo] = useState([]);
  const [data, setData] = useState([]);
  return (
    <Router>
      <Navbar />
      <Data setInfo={setInfo} />
      <Container>
        <Routes>
        <Route path="/irkBitig-App" element={<Anasayfa />} />
          <Route path="/Anasayfa" element={<Anasayfa />} />
          <Route path="/Nedir" element={<Nedir />} />
          <Route path="/Cards"element={<Cards getInfo={getInfo} setInfo={setInfo} />}/>
          <Route path="/Galeri" element={<Galeri data={data} getInfo={getInfo} setInfo={setInfo} />}/>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
