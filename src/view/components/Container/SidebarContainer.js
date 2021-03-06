import React from 'react';
import styled from 'styled-components';
import StreamList from "../StreamList/StreamList";

const SidebarContainer = () => {


    return(
        <Container>
            <h3>추천 채널</h3>
            <StreamList/>
        </Container>
    )
}

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0; 
  padding: 80px 10px 10px;
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