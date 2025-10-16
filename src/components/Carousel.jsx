import React from "react";
import Carousel from "react-bootstrap/Carousel";

// Import local images
// (Place your image files inside src/assets or src/images)
import slide1 from "../images/rsz_2burger.jpg";
import slide2 from "../images/rsz_2burger.jpg";
import slide3 from "../images/rsz_2burger.jpg";

function SliderCarousel() {
  // Slides array with local imports
  const slides = [
    {
      src: slide1,
      alt: "Delicious Burger",
      caption: "First Slide - Burger",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1238",
      alt: "Cheesy Pizza",
      caption: "Second Slide - Pizza",
    },
    {
      src: slide3,
      alt: "Hot Momo",
      caption: "Third Slide - Momo",
    },
  ];

  return (
    <Carousel fade interval={3000} className="my-4">
      {slides.map((s, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={s.src}
            alt={s.alt}
            style={{
              maxHeight: 400,
              objectFit: "cover",
              borderRadius: "10px",
            }}
            onError={(e) =>
              (e.target.src =
                "https://via.placeholder.com/900x400?text=Image+Not+Found")
            }
          />
          <Carousel.Caption>
            <h5>{s.caption}</h5>
            <p>Enjoy our {s.alt.toLowerCase()} — freshly made and delicious!</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default SliderCarousel;
