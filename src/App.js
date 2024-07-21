import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Login from './Components/Login/Login';
import Survey from './Components/Survey/Survey';
// import {Survey} from './Components/Survey/Survey';
import Section1 from './Components/Section 1/Section1';
import Section2 from './Components/Section 2/Section2';
import Section3 from './Components/Section3/Section3';

function App() {
  return (
    <Router>
      <Routes>
          <Route element={<Login />} path="/"  />
          <Route element={<Survey/>} path="/Survey" exact/>
          <Route element={<Section1/>} path="/Section1" exact/>
          <Route element={<Section2/>} path="/Section2" exact/>
          <Route element={<Section3/>} path="/Section3" exact/>
      </Routes>
    </Router>
  );
}

export default App;

