import React, { useState } from 'react';
import QRCode from 'qrcode.react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    Card,
    CardTitle,
    CardText,
    CardHeader
  } from 'reactstrap';
  
  
  const QRcarousel = ({childrenInfo}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const children = childrenInfo;
    // console.log(childrenInfo)
    
    // controls
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === children.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? children.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }

    // slide rendering
    const slides = children.map((child) => {
      return (
        <CarouselItem
          className='custom-tag'
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={child.fname}
          tag='div'
        > 
        <div style={{ display:'flex', justifyContent:'center', height: '50vh', paddingTop:'2vh'}}>
          <QRCode value={child.uuid4} size={150} />
        </div>
        
        </CarouselItem>
      );
    });

    const cards = children.map((child) => {
        return (
            <CarouselItem
            className='custom-card'
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={child.fname}
            tag='div'
            >
            <Card body outline color='primary'>
            <CardTitle>{child.fname}, {child.lname} ({child.dob}) - {child.institution}</CardTitle>
            <CardText>{child.gender}</CardText>
            <CardText>{child.diet_restrictions}</CardText>
            <CardText>{child.remarks}</CardText>
            </Card>
            </CarouselItem>
        )
    })
  
    return (
        <>
      <div style={{ borderRadius: '10px' ,marginTop: '1vh', marginLeft: '2.5vw', marginRight:'2.5vw'}}>
          <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 30vh;
              background: lightBlue;
            }
            .custom-card {
                height: 100%
            }
            `
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={false}
      >
        <CarouselIndicators items={children} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} cssModule={{color:'primary'}}/>
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>

      </div>
    {/* carousel 2 */}
      <div style={{marginLeft: '2.5vw', marginRight:'2.5vw'}}>
      <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={false}
      >
        <CarouselIndicators items={children} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {cards}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} cssModule={{color:'primary'}}/>
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />

      </Carousel>
      </div>

      </>
    );
  }
  
  export default QRcarousel;

