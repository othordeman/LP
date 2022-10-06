import './App.css';
import { GlobalStyle } from './GlobalStyle';
import Home from './components/Home'
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";





const App = () =>  (
    <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<p>about</p> } />
            <Route path='/contact' element={<p>about</p>} />
            <Route path='/login' element={<p>about</p>} />

          </Routes>
        <GlobalStyle />
    </Router>
  );


export default App;
