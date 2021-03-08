import React from 'react';
import styled from 'styled-components';
import {thousandNumberFormat} from "../../../lib/common";
import {CustomString} from "../../../styled/Title.Styled";

const SidebarLiveContent = (props) => {

    const {
        user_name,
        viewer_count,
        game_name,
        user_login
    } = props


    return (
        <Container>
            <Profile>
                <UserName>{user_name} ({user_login})</UserName>
                <p>{game_name}</p>
            </Profile>
            <Viewer>
                <div className={"live"}/>
                <p className={"viewer_count"}>{thousandNumberFormat(viewer_count)}</p>
            </Viewer>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  font-size: 14px;
`;

const UserName = styled(CustomString)`
  font-weight: 600;
  cursor: pointer;
`;

const Profile = styled.div`
  padding-left: 5px;
  line-height: 1.2;
  
  p{
    color: #666;
  }
`;

const Viewer = styled.div`
  display: flex;
  align-items: center;
    .live{
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: red;
    }
  
  .viewer_count{
    padding-left: 5px;
  }
`;

export default SidebarLiveContent;