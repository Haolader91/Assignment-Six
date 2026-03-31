import "./App.css";
import { FaFacebookSquare } from "react-icons/fa";
import { ArrowBigRight } from "lucide-react";
import NavBar from "./components/Header/NavBar/NavBar";
import Banner from "./components/Header/Banner/Banner";
import Rating from "./components/MainBody/Rating/Rating";
import Card from "./components/MainBody/Card/Card";
import GetStart from "./components/MainBody/GetStart/GetStart";
import Ready from "./components/MainBody/Ready/Ready";

function App() {
  return (
    <>
      <header>
        <nav>
          <NavBar></NavBar>
        </nav>
        <section>
          <Banner></Banner>
        </section>
      </header>
      <main>
        <section>
          <Rating></Rating>
          <Card></Card>
          <GetStart></GetStart>

          <Ready></Ready>
        </section>
      </main>
    </>
  );
}

export default App;
