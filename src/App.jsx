import "./App.css";
import { FaFacebookSquare } from "react-icons/fa";
import { ArrowBigRight } from "lucide-react";
import NavBar from "./components/Header/NavBar/NavBar";
import Banner from "./components/Header/Banner/Banner";
import Rating from "./components/MainBody/Rating/Rating";

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
        </section>
      </main>
    </>
  );
}

export default App;
