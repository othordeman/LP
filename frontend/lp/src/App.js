import './App.css';
import { GlobalStyle } from './GlobalStyle';
import Home from './components/Home'
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import Lp from './components/Lp'
import ErrorBoundary from './components/ErrorBoundary';

const App = () =>  (
    <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<Lp />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<p>contact</p>} />
            <Route path='/login' element={<p>about</p>} />
          </Routes>
        <GlobalStyle />
    </Router>
  );


export default App;
