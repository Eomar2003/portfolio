
import { Nav } from 'react-bootstrap';
import './App.css';

import Navs from './Component/Navs/Navs';
import Header from './Component/Home.js/Header';
import Home from './Component/Home.js/Home';
import Slogan from './Component/Home.js/Slogan';
import Ingr from './Component/Home.js/Ingr';
import Product from './Component/Home.js/Product';
import Slide from './Component/Home.js/Slide';
import Question from './Component/Home.js/Question';
import Subscripe from './Component/Home.js/Subscripe';
import Social from './Component/Home.js/Social';


// import Home from 'Coponent/Home.js/Home'
const App = ()=> {
  return (
    <>
      <Navs />
      <Header/>
      <Home />
      <Slogan/>
      <Ingr/>
      <Product/>
      <Slide/>
      <Question/>
      <Subscripe/>
      <Social/>
    </>
  );
}

export default App;
