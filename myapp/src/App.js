import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import Section from './components/Section';
import Type1UseEffect from './components/Type1UseEffect';
import Type2UseEffect from './components/Type2UseEffect';
import Type3UseEffect from './components/Type3UseEffect';
import Type4UseEffect from './components/Type4UseEffect';

function App(){

  console.log("Inside App")
  return(
    <div>
       <Navbar/>
      <Routes>
        <Route exact path='/type4useEffect' element={<Type4UseEffect/>}/>
        <Route exact path='/type3useEffect' element={<Type3UseEffect/>}/>
        <Route exact path='/type2useEffect' element={<Type2UseEffect/>}/>
        <Route exact path='/type1useEffect' element={<Type1UseEffect/>}/>
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