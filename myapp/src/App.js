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
import Params from './components/01-07/Params';
import SingleProduct from './components/01-07/SingleProduct';
import DeclarativeWay from './components/01-07/DeclarativeWay';
import { useState } from 'react';
import Map from './components/01-07/Map';
import Wrapper from './components/01-07/Wrapper';
import StyledComponent from './components/01-07/StyledComponent';

function App(){
  const [myUsers, setMyUsers] = useState(["Rahul", "Rocky", "Manoj"])

  console.log("Inside App")
  return(
    <div>
       <Navbar/>
      <Routes>
        <Route exact path='/styledcomponent' element={<StyledComponent/>} />
        <Route exact path='/wrapper' element={<Wrapper/>}/>
      <Route exact path='/map' element={<Map myUsers={myUsers} setMyUsers={setMyUsers} myName={"Krishna"} kuchBhi={["Ajay", "Chetan", "Durvesh"]} />} />
        <Route exact path='/declarativeway' element={<DeclarativeWay/>}/>
        <Route exact path='/singleproduct' element={<SingleProduct/>}/>
        <Route exact path='/params' element={<Params/>}/>
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