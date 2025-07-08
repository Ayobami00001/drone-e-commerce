import { Route, Routes } from "react-router-dom";
import Firstpage from './components/Firstpage';
import Seller from "./components/Seller";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Firstpage/>} />
        <Route path="/firstpage" element={<Seller/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element= {<ProtectedRoute> <Dashboard/> </ProtectedRoute>}/>
      </Routes>
      
    </>
  )
}

export default App