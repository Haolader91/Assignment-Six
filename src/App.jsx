import "./App.css";
import { FaFacebookSquare } from "react-icons/fa";
import NavBar from "./components/Header/NavBar/NavBar";
import Banner from "./components/Header/Banner/Banner";
import Rating from "./components/MainBody/Rating/Rating";
import Card from "./components/MainBody/Card/Card";
import GetStart from "./components/MainBody/GetStart/GetStart";
import Ready from "./components/MainBody/Ready/Ready";
import Footer from "./components/Footer/Footer";
import Pricing from "./components/MainBody/Pricing/Pricing";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const ProductsCardDataPromise = fetch("/ProductsCardData.json").then((res) =>
  res.json(),
);
function App() {
  const [itemCard, setItemCard] = useState([]);
  // console.log(activeTab);
  return (
    <>
      <header>
        <NavBar itemCard={itemCard}></NavBar>
        <Banner></Banner>
      </header>
      <main>
        <Rating></Rating>

        <Card
          ProductsCardDataPromise={ProductsCardDataPromise}
          itemCard={itemCard}
          setItemCard={setItemCard}
        ></Card>

        <GetStart></GetStart>
        <Pricing></Pricing>
        <Ready></Ready>
      </main>
      <Footer></Footer>

      <ToastContainer />
    </>
  );
}

export default App;
