import React from 'react';
import styled from 'styled-components';
import LiveVideoInfo from "./LiveVideoInfo";

const LiveVideoContent = (props) => {

    const {
        thumbnail_url,
        viewer_count,
    } = props

    const VideoThumbSrc = thumbnail_url.replace('{width}', '530').replace('{height}', '300')

    return(
        <Container>
            <Video>
                <img src={VideoThumbSrc} alt=""/>
                <h3>생방송</h3>
                <p>시청자 {viewer_count}명</p>
            </Video>
            <LiveVideoInfo/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
`;

const Video = styled.div`
  position: relative;
  max-width: 530px;
  cursor: pointer;

  h3 {
    position: absolute;
    top: 9px;
    left: 9px;
    background: #e91a17;
    color: #fff;
    padding: 3px 4px;
    border-radius: 3px;
    font-size: 13px;
  }

  p {
    position: absolute;
    bottom: 9px;
    left: 9px;
    padding: 3px 4px;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    border-radius: 2px;
    font-size: 13px;
  }
  
  img.slide{
    width: 530px;
    height: 330px;
  }
`;

export default LiveVideoContent;