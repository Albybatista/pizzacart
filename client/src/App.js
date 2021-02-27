import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import { productData, productDataDesserts } from './components/Products/data';
import Feature from './components/Feature';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your Pizza' data={productData} />
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataDesserts} />
    </Router>
  );
}

export default App;
