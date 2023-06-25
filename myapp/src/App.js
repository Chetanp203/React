import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import Section from './components/Section';

function App(){

  console.log("Inside App")
  return(
    <div>
       <Navbar/>
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/welcome" element={<Welcome/>} />
        <Route exact path="/counter" element={<Counter/>}/>
        <Route exact path="/section" element={<Section/>}/>
      </Routes>
       
       <Footer/>

    </div>
  );
}
export default App;