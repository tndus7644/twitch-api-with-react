import React,{useEffect} from 'react';
import styled from 'styled-components';
import StreamerList from "../StreamerList";
import {StreamActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";

const SidebarContainer = () => {

    const {LiveStreamsList} = useSelector(state => state.stream);

    // useEffect(() => {
    //     getLiveStreams();
    // },[])

    const getLiveStreams = () => {
        StreamActions.getLiveStreams({
        })
    }

    return(
        <Container>
            <h3>추천 채널</h3>
            <StreamerList/>
        </Container>
    )
}

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0; 
  padding: 80px 10px 10px;
  width: 230px;
  height: 100vh;
  background: #eee;
  z-index: 100;
  
  h3{
    font-size: 14px;
  }
`;

export default SidebarContainer;