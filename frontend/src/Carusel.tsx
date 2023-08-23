import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Carusel(): JSX.Element {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2920, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="carousel">
      <h1>Красивая карусель фоточек</h1>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={thisis.props.deviceType !== 'mobile' ? true : false}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1500}
        focusOnSelect={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        react-multiple-carousel__arrow="z-index-100"
      >
        <div className="item">
          <h3>Item 1</h3>
          <img
            src="https://ru-ru.learn.canva.com/wp-content/uploads/sites/19/2020/07/paul-skorupskas-7KLa-xLbSXA-unsplash-2.jpg"
            alt=""
          />
        </div>
        <div className="item">
          <h3>Item 2</h3>
          <img
            src="https://img.freepik.com/free-photo/lavender-field-at-sunset-near-valensole_268835-3910.jpg"
            alt=""
          />
        </div>
        <div className="item">
          <h3>Item 3</h3>
          <img src="./" alt="" />
        </div>
        <div className="item">
          <h3>Item 4</h3>
          <img src="./" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Carusel;
