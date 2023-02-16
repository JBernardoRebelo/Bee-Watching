/* eslint-disable react/jsx-pascal-case */
// import './App.css';
import Draw from './Components/Draw';
import Request from './Components/Request';
import Home from './Components/Home';
import {Routes, Route} from "react-router-dom"
import Awards from './Components/Awards';
import { _App } from './Style';

function App() {

  return (
    <_App>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Draw" element={<Draw/>}/>
              <Route path="/Request" element={<Request/>}/>
              <Route path="/Awards" element={<Awards/>}/>
          </Routes>
    </_App>
  );
}

export default App;
