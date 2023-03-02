import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
<<<<<<< HEAD
    <Router basename="/irkBitig-App"
    >
=======
    <Router>
>>>>>>> a469eacc0ee3a3a636c7c55cf9cf32bf1ce15b70
      <Navbar />
      <Data setInfo={setInfo} />
      <Container>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Anasayfa />} />
=======
        <Route  exact path="/" element={<Anasayfa />} />
          <Route path="/Anasayfa" element={<Anasayfa />} />
>>>>>>> a469eacc0ee3a3a636c7c55cf9cf32bf1ce15b70
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
