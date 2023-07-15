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
import Xyz from './components/02-07/Xyz';
import SinglePro from './components/02-07/SinglePro';
import DynamicStyles from './components/04-07/DynamicStyles';
import DynamicClasses from './components/04-07/DynamicClasses';
import ChildernProp from './components/04-07/ChildrenProp';
import FormOne from './components/06-07/FormOne';
import FormSingleState from './components/08-07/FormSingleState';
import Todos from './components/Todos';
import UseCallback from './components/UseCallBack';
import UseMemo from './components/09-07/UseMemo';
import UseReducer from './components/09-07/UseReducer';
import ProductFromBackend from './components/11-07/ProductFromBackend';
import Product from './components/13-07/Product';
import Register from './components/15-07/Register';
import Login from './components/15-07/Login';


function App(){
  const [myUsers, setMyUsers] = useState(["Rahul", "Rocky", "Manoj"])

  console.log("Inside App")
  return(
    <div>
       <Navbar/>
      <Routes>
        <Route exact path='login' element={<Login/>}/>
        <Route exact path='register' element={<Register/>}/>
        <Route exact path='/product/:id' element={<Product/>}/>
        <Route exact path='/product-from-backend' element={<ProductFromBackend/>}/>
        <Route exact path='/usereducer' element={<UseReducer/>}/>
        <Route exact path='/use-memo' element={<UseMemo/>}/>
        <Route exact path='/usecallback' element={<UseCallback/>}/>
        <Route exact path='/todos' element={<Todos/>}/>
        <Route exact path='/formsinglestate' element={<FormSingleState/>}/>
        <Route exact path='/formone' element={<FormOne/>}/>
        <Route exact path='/childrenprops' element={<ChildernProp/>} />
        <Route exact path='/dynamicclasses' element={<DynamicClasses/>}/>
        <Route exact path='/dynamicstyles' element={<DynamicStyles/>}/>
        <Route exact path='/singlepro/:id' element={<SinglePro/>}/>
        <Route exact path='/xyz' element={<Xyz/>}/>
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