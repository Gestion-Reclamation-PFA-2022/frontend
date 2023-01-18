import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Me from "./pages/me/me";
import PendingManagers from "./pages/pending-managers/pending.managers";
import NewReclamation from "./pages/new-reclamation/newReclamation";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import EditReclamation from "./pages/update-reclamation/updateReclamtion";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login/:role" element={<Login />}></Route>
            <Route exact path="/signup/:role" element={<Signup />}></Route>
            <Route exact path="/me" element={<Me />}></Route>
            <Route exact path="/admin/me" element={<PendingManagers />}></Route>
            <Route
              exact
              path="/me/edit/:id"
              element={<EditReclamation />}
            ></Route>
            <Route
              exact
              path="/me/new-reclamation"
              element={<NewReclamation />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
