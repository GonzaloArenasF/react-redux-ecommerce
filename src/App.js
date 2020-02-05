import React from 'react';
import './App.scss';

// Components
import HeaderSection from './components/header/header';
import FooterSection from './components/footer/footer';
import ProductListSection from './components/product-list/product-list';

const App = () => (
  <main>
    <HeaderSection />
    <ProductListSection />
    <FooterSection />
  </main>
);

export default App;
