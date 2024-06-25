"use client"
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Index = () => {
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }:any) => {
    const { carouselState: { currentSlide, totalItems } } = rest;
    return (
      <div className="carousel-button-group" style={{ position: 'absolute', bottom: 10, right: 10 }}>
        <button
          className={currentSlide === 0 ? 'disable' : 'prev-button'}
          onClick={() => previous()}
          disabled={currentSlide === 0}
        >
          Prev
        </button>
        <button
          className={currentSlide === totalItems - 1 ? 'disable' : 'next-button'}
          onClick={() => next()}
          disabled={currentSlide === totalItems - 1}
        >
          Next
        </button>
        <button
          className="go-to-slide-button bg-red-600"
          onClick={() => goToSlide(currentSlide + 1)}
        >
          Go to any slide
        </button>
      </div>
    );
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel
      responsive={responsive}
      arrows={false}
      customButtonGroup={<ButtonGroup />}
    >
      <div>Hello 1</div>
      <div>Hello 2</div>
      <div>Hello 3</div>
    </Carousel>
  );
}

export default Index;
