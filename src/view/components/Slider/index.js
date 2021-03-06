import React from 'react';
import styled from 'styled-components';
import LiveVideoContent from "../LiveVideo/LiveVideoContent";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
} from 'swiper';

//style
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss"; // *
import "swiper/components/pagination/pagination.scss"; // *
import "swiper/components/scrollbar/scrollbar.scss"; // *

SwiperCore.use([Navigation, Pagination, Scrollbar]); // *

const VideoSlider = ({LiveStreamsList}) => {

    return (
        <Container>
            <Swiper
                className='swiper-container'
                spaceBetween={50}
                slidesPerView={3}
                navigation //*
                pagination={{clickable: true}} //*
                scrollbar={{draggable: true}} //*
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
            >
                {
                    LiveStreamsList.data.map((item, index) =>
                        <SwiperSlide className={"swiper-slide"}>
                            <LiveVideoContent key={index} {...item}/>
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

  .swiper-slide {
  }
`;


export default VideoSlider;