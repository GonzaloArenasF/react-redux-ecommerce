import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import './App.scss';

// Components
import HeaderSection from './components/header/header';
import FooterSection from './components/footer/footer';
import ProductListSection from './components/product-list/product-list';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const App = () => (
  <Provider store={store}>
      <HeaderSection />
      <ProductListSection />
      <FooterSection />
  </Provider>
);

export default App;
