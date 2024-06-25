'use client'
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import project from '../../constant/project.json'
import Image from 'next/image'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import IconBurron from'../iconButton'
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectCarosal() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1536 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1536, min: 1232 },
      items: 3,
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


  return (
    <Carousel
      swipeable={true} // Enable swipe to navigate
      draggable={true} // Enable drag to navigate
      responsive={responsive}
      ssr={true}
      infinite={true}
      arrows={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      containerClass="carousel-container"
      removeArrowOnDeviceType={[
        'tablet',
        'small_mobile',
        
      ]}
      // minimumTouchDrag={50}
      customTransition="all .5"
      autoPlay={true}
      showDots={true}
      transitionDuration={500}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      className="  md:2 sm:2"
    >



      {
        project.map((slide, index) => (

          <div key={slide.id}>

            <div className=' mx-2'>
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                width={500}
                height={500}
              />

              <div className=' p-  md:text-justify text-center'>
                <p className=' md:text-xl text-lg font-bold py-3'>App Dashboard</p>
                <p className='lg:text-base text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam provident explicabo placeat </p>

                <div className=' flex justify-between mb-6'>
                <IconBurron btnName='Project' icon={ArrowOutwardIcon}/>
                <IconBurron btnName='Github' icon={GitHubIcon}/>
                </div>

              </div>

            </div>

          </div>

        ))

      }


    </Carousel>
  );
}

export default ProjectCarosal;
