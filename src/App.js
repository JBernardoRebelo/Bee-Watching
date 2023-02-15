import './App.css';
import Draw from './Components/Draw';
import Request from './Components/Request';
import Home from './Components/Home';
import {Routes, Route, Router} from "react-router-dom"
import Awards from './Components/Awards';


function App() {

  return (
    <div className="App">
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Draw" element={<Draw/>}/>
              <Route path="/Request" element={<Request/>}/>
              <Route path="/Awards" element={<Awards/>}/>
          </Routes>
    </div>
  );
}

export default App;
