import React, {useEffect} from 'react';
import styled from 'styled-components';
import {videosActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";


const LiveContainer = ({match}) => {

    const id = match.params.id;

    return (
        <Container>
        </Container>
    )
}

const Container = styled.div`

`;

export default LiveContainer;