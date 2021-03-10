import React from 'react';
import styled from 'styled-components';
import {useHistory} from "react-router";
import {CustomString} from "../../../styled/Title.Styled";

const FeedItem = (props) => {

    const {
        thumbnail_url,
        title,
        viewer_count,
        game_name,
        user_name,
        user_id,
        shape
    } = props

    console.log("shape", shape)


    const ThumbSrc = thumbnail_url.replace('{width}', '316').replace('{height}', '178')

    const history = useHistory();

    const navigate = (url) => {
        history.push(url)
    }

    return (
        <Container onClick={() => navigate(`/live/${user_id}`)}>
            <Thumb>
                <img src={ThumbSrc} alt=""/>
                <h3>생방송</h3>
                <p>시청자 {viewer_count}명</p>
            </Thumb>
            <VideoInfo>
                <Profile/>
                <Info>
                    <Title>{title}</Title>
                    <p>{user_name}</p>
                    <p>{game_name}</p>
                </Info>
            </VideoInfo>
        </Container>
    )
}

const Container = styled.div`
  cursor: pointer;
  max-width: 316px;
  margin-bottom: 20px;
`;

const Thumb = styled.div`
  position: relative;

  .offLive & {
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      box-shadow: 0 1px 3px 2px rgba(0, 0, 0, 0.1);
    }

    h3 {
      display: none;
    }

    p {
      display: none;
    }
  }


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

  img.slide {
    width: 530px;
    height: 330px;
  }
`;

const VideoInfo = styled.div`
  padding-top: 15px;
  display: flex;
`;

const Profile = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #9047ff;
`;

const Info = styled.div`
  max-width: 250px;
  padding-left: 10px;

  p {
    color: #666;
    font-size: 14px;
    line-height: 1.4;
  }
`;

const Title = styled(CustomString)`
`;


export default FeedItem;