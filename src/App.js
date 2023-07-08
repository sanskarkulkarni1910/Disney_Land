import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Chefs from './components/Chefs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Museum from './components/Museum';
import Contact from './components/Contact';
import Store from './components/Store';
import Test from './components/Test';
import Bookcar from './components/Bookcar';
import Special from './components/Special';



function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/museum' element={<Museum />} />
          <Route path='/store' element={<Store />} />
          <Route path='/chefs' element={<Chefs />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/test' element={<Test />} />
          <Route path='/bookcar' element={<Bookcar />} />
          <Route path='/special' element={<Special />} />


        </Routes>

        <Footer />

      </BrowserRouter>


    </div>
  );
}

export default App;
