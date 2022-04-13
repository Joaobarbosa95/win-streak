import "./App.css";

// Route Components
import Login from "./Components/Login/Login";
import CreateAccount from "./Components/Login/CreateAccount";
import Dashboard from "./Components/Dashboard";

// Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
