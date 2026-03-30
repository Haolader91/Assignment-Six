import "./App.css";
import { FaFacebookSquare } from "react-icons/fa";
import { ArrowBigRight } from "lucide-react";
import NavBar from "./components/Header/NavBar/NavBar";
import Banner from "./components/Header/Banner/Banner";

function App() {
  return (
    <>
      <header>
        <nav>
          <NavBar></NavBar>
          <Banner></Banner>
        </nav>
      </header>
    </>
  );
}

export default App;
