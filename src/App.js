import BarChart from './components/BarChart'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/bar-chart' element={<BarChart/>}/>
        </Routes>
    </Router>
  );
}

export default App;
