import React from 'react';
import styled from 'styled-components';
import LiveVideoInfo from "./LiveVideoInfo";
import {useHistory} from "react-router";

const LiveVideoContent = (props) => {

    const {
        viewer_count,
        user_name,
        game_name,
        user_id,
        user_login
    } = props

    const history = useHistory();

    const navigate = (url) => {
        history.push(url)
    }

    return (
        <Container onClick={() => navigate(`/live/${user_id}`)}>
                <Video>
                    <iframe
                        src={`https://player.twitch.tv/?channel=${user_login}&parent=localhost`}
                        title={user_id}
                        height="300"
                        width="530"
                        allowFullScreen={true}>
                    </iframe>
                </Video>
                <LiveVideoInfo viewer_count={viewer_count} user_name={user_name} game_name={game_name}/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
`;

const Video = styled.div`
  position: relative;
`;

export default LiveVideoContent;