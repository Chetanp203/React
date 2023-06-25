import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router';
import Welcome from './Welcome';
import Home from './components/Home';

function App() {
  return (
    <>
    <Home />
    <Routes>
      <Route exact path="/" element={<Welcome />} />
    </Routes></>
  );
}

export default App