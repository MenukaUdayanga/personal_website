'use client'
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import project from '../../constant/project.json'
import experiance from '../../constant/experiance'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import CustomRightArrow from '../customArrow'


function ProjectCarosal() {

  // const dataList = [
  //   { id: 1, icon: FaFacebookF, iconProps: { color: 'blue', size: 40 }, paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  //   { id: 2, icon: FaTwitter, iconProps: { color: 'skyblue', size: 40 }, paragraph: 'Expedita quas perferendis eveniet perspiciatis, nulla distinctio sed dolore voluptas ullam molestias debitis consectetur ducimus, mollitia beatae tempora.' },
  //   { id: 3, icon: FaInstagram, iconProps: { color: 'purple', size: 40 }, paragraph: 'Laboriosam reprehenderit atque sit quo adipisci debitis officia, nobis rerum! Perferendis dolorem autem veritatis, possimus aliquam unde repellendus! Numquam laborum sapiente distinctio.' },
  //   { id: 4, icon: FaLinkedinIn, iconProps: { color: 'blue', size: 40 }, paragraph: 'Qui repellat maiores necessitatibus, fuga praesentium, iure quis vero porro non earum iste? Fuga sit repellendus natus veritatis earum aperiam aliquam. Repudiandae.' },
  //   { id: 5, icon: FaYoutube, iconProps: { color: 'red', size: 40 }, paragraph: 'Expedita quas perferendis eveniet perspiciatis, nulla distinctio sed dolore voluptas ullam molestias debitis consectetur ducimus, mollitia beatae tempora.' },
  // ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1536 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1536, min: 1232 },
      items: 4,
      partialVisibilityGutter: 70,
    },
    minidesktop: {
      breakpoint: { max: 1232, min: 1063 },
      items: 3,
      partialVisibilityGutter: 80,
    },
    tablet: {
      breakpoint: { max: 1063, min: 768 },
      items: 2,
      partialVisibilityGutter: 50,
    },
    small_mobile: {
      breakpoint: { max: 439, min: 0 },
      items: 1,
      partialVisibilityGutter: 60,
    },
  };

  const handleNextClick = () => {
    // Implement logic for handling next click
    console.log('Next button clicked');
  };


  return (
    <Carousel
      swipeable={true} // Enable swipe to navigate
      draggable={true} // Enable drag to navigate
      responsive={responsive}
      ssr={true}
      infinite={true}
      arrows={false}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      containerClass="carousel-container"
      // removeArrowOnDeviceType={[
      //   'tablet',
      //   'small_mobile',

      // ]}
      // minimumTouchDrag={50}
      customTransition="all .5"
      autoPlay={true}
      showDots={false}
      transitionDuration={500}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      className="  md:2 sm:2 w-[100%]"

    >

      {experiance.map((item) => (
        <div key={item.id} className='mr-4 bg-blue-100   h-[100%]' >
          <div className='flex items-center justify-start  rounded-full p-4'>
            <item.icon {...item.iconProps} />
          </div>
          <div className='pl-4 text-xl font-semibold text-left'>
            {item.heading}
          </div>
          <p className='  p-4 text-justify lg:text-base text-xs'>
            {item.paragraph}
            </p>
        </div>
      ))}


    </Carousel>
  );
}

export default ProjectCarosal;
