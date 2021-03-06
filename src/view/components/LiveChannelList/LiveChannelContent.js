import React from 'react';
import styled from 'styled-components';

const LiveChannelContent = (props) => {

    const {
        thumbnail_url,
        title,
        viewer_count,
        game_name,
        user_name
    } = props

    const VideoThumbSrc = thumbnail_url.replace('{width}', '316').replace('{height}', '178')

    return (
        <Container>
            <Video>
            <img src={VideoThumbSrc} alt=""/>
            <h3>생방송</h3>
            <p>시청자 {viewer_count}명</p>
        </Video>
            <VideoInfo>
                <h1>{title}</h1>
                <p>{user_name}</p>
                <p>{game_name}</p>
            </VideoInfo>
        </Container>
    )
}

const Container = styled.div`
  cursor: pointer;
  max-width: 316px;
`;

const Video = styled.div`
  position: relative;

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

const VideoInfo = styled.div`
  padding-top: 15px;

  h1 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-height: 1.5;
    font-weight: 600;
  }

  p {
    color: #666;
    font-size: 14px;
    line-height: 1.4;
  }
`;

export default LiveChannelContent;