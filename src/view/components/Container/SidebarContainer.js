import React, {useEffect} from 'react';
import styled from 'styled-components';
import SidebarLiveList from "../Sidebar/SidebarLiveList";
import {videosActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";
import SidebarInfo from "../Sidebar/SidebarInfo";
import Footer from "../Footer";

const SidebarContainer = () => {

    const {LiveStreamsList} = useSelector(state => state.videos);

    useEffect(() => {
        getLiveStreamsList();
    },[])

    const getLiveStreamsList = () => {
        videosActions.getLiveStreamsList({
            first:5,
            language:'ko'
        })
    }


    return(
        <Container>
            <h3>추천 채널</h3>
            <SidebarLiveList LiveStreamsList={LiveStreamsList}/>
            <SidebarInfo/>
            <Footer/>
        </Container>
    )
}

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0; 
  padding: 80px 10px 0;
  width: 220px;
  height: 100vh;
  background: #eee;
  z-index: 100;
  
  h3{
    font-size: 14px;
    font-weight: 600;
  }
`;

export default SidebarContainer;