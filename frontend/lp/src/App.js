import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Style
import { GlobalStyle } from './GlobalStyle';
//Components
import Home from './components/Home'
import Header from './components/Header';
import About from './components/About';
import Lp from './components/Lp'
import Contact from './components/Contact';

const App = () =>  (
    <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<Lp />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<p>about</p>} />
          </Routes>
        <GlobalStyle />
    </Router>
  );


export default App;
