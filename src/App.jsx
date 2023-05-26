import { BrowserRouter } from "react-router-dom";
import Routing from "./components/Routing";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routing />
    </BrowserRouter>
  );
}

export default App