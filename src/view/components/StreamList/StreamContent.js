import React from 'react';
import styled from 'styled-components';

const StreamContent = (props) => {

    const {
        thumbnail_url,
        viewer_count
    } = props

    // const gameThumb = thumbnail_url.replace('{width}', '153').replace('{height}', '204')

    return(
        <Container>
            {/*<img src={gameThumb} alt=""/>*/}
            {viewer_count}
        </Container>
    )
}

const Container = styled.div`

`;

export default StreamContent;