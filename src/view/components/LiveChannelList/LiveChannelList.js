import React from 'react';
import styled from 'styled-components';
import LiveChannelContent from "./LiveChannelContent";
import {Title} from "../../../styled/Title.Styled";

const LiveChannelList = ({LiveStreamsList}) => {

    return (
        <Container>
            <VideoListTitle>
                <h1>취향 저격 생방송 채널</h1>
            </VideoListTitle>
            <VideoGroup>
                {
                    LiveStreamsList.data.map((item, index) =>
                        <LiveChannelContent key={index} {...item}/>)
                }
            </VideoGroup>
        </Container>
    )
}

const Container = styled.div`
  margin-bottom: 30px;
`;

const VideoListTitle = styled(Title)`
`;

const VideoGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default LiveChannelList;