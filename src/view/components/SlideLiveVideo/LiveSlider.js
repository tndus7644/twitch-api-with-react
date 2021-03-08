import React from 'react';
import styled from 'styled-components';
import LiveVideoContent from "./LiveVideoContent";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation,} from 'swiper';
//style
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss"; // *

SwiperCore.use([Navigation]); // *

const LiveSlider = ({LiveStreamsList}) => {

    return (
        <Container>
            <Swiper
                className='swiper-container'
                spaceBetween={50}
                slidesPerView={2}
                navigation //*
                pagination={{clickable: true}} //*
                scrollbar={{draggable: true}} //*
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
            >
                {
                    LiveStreamsList.data.map((item, index) =>
                        <SwiperSlide key={index} className={"swiper-slide"}>
                            <LiveVideoContent {...item}/>
                        </SwiperSlide>)

                }
            </Swiper>

        </Container>
    )
}

const Container = styled.div`
  margin-bottom: 30px;

  .swiper-container {
    max-width: 1684px;
  }
  
  .swiper-slide{
    display: flex;
    justify-content: center;
  }

`;


export default LiveSlider;