import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard"
import Detail from "./views/Detail"
import Create from "./views/Create"
import Edit from "./views/Edit"

function App() {
  return (
    <div className="Container mt-5 ms-3" >
      <h1 className='text-success'>Welcome to the coffee shop</h1>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/coffees/:_id" element={<Detail />}></Route>
        <Route path="/coffees/new" element={<Create />}></Route>
        <Route path="/coffees/:_id/update" element={<Edit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
