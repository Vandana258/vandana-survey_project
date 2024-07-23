import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Login from './Components/Login/Login';
import Survey from './Components/Survey/Survey';
// import {Survey} from './Components/Survey/Survey';
// import Section1 from './Components/Section 1/Section1';
// import Section2 from './Components/Section 2/Section2';
// import Section3 from './Components/Section3/Section3';
import SectionA from './Components/Section A/SectionA';
import SectionB from './Components/Section B/SectionB';
import SectionC from './Components/Section C/SectionC';

function App() {
  return (
    <Router>
      <Routes>
          <Route element={<Login />} path="/"  />
          <Route element={<Survey/>} path="/Survey" exact/>
          <Route element={<SectionA/>} path="/SectionA" exact/>
          <Route element={<SectionB/>} path="/SectionB" exact/>
          <Route element={<SectionC/>} path="/SectionC" exact/>
      </Routes>
    </Router>
  );
}

export default App;

