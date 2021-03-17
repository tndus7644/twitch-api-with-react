import React from 'react';
import styled from 'styled-components';
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

const LiveContainer = () => {

    return (
        <Container>
            <Video>
                <ReactTwitchEmbedVideo channel={"sunbaking"}
                                       className={"StreamVideo"}
                                       width={"1680px"}
                                       height={"900px"}/>
            </Video>
        </Container>
    )
}

const Container = styled.div`
  padding-top: 55px;
`;

const Video = styled.div`
  max-width: 100%;
  max-height: 100%;
`;


export default LiveContainer;