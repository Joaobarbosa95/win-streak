import "./App.css";
import Login from "./Components/Login/Login";
import CreateAccount from "./Components/Login/CreateAccount";

// Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="create-account" element={<CreateAccount />} />
      </Routes>
    </div>
  );
}

export default App;
