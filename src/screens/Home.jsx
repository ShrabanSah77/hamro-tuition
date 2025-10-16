import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import SliderCarousel from "../components/Carousel";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <SliderCarousel />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
