import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Me from "./pages/me/me";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login/:role" element={<Login />}></Route>
          <Route exact path="/signup/:role" element={<Signup />}></Route>
          <Route exact path="/me" element={<Me />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
