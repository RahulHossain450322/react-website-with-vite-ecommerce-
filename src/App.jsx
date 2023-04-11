/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
// eslint-disable-next-line import/no-named-as-default
// eslint-disable-next-line no-unused-vars
import Contact from './Components/Contact';
import About from './Components/About';
import Banner from './Components/Banner';
import Product from './Components/Product';
import AllCategories from './Components/AllCategories/AllCategories';
import AgrAndFood from './Components/AllCategories/AgrAndFood';
import Art from './Components/AllCategories/Art';
import Chemical from './Components/AllCategories/Chemical';
import Electro from './Components/AllCategories/Electro';
import Furniture from './Components/AllCategories/Furniture';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/all-categories" element={<AllCategories />} />
        <Route path="/product/all-catogories/agriculter&food" element={<AgrAndFood />} />
        <Route path="/product/all-catogories/arts&crafts" element={<Art />} />
        <Route path="/product/all-catogories/chemicals" element={<Chemical />} />
        <Route path="/product/all-catogories/electrical&electronics" element={<Electro />} />
        <Route path="/product/all-catogories/furniture" element={<Furniture />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
