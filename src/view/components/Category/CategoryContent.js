import React from 'react';
import styled from 'styled-components';
import {ColumnDotSvg} from "../svg";

const CategoryContent = ({name, box_art_url}) => {

    const gameThumb = box_art_url.replace('{width}', '153').replace('{height}', '204')

    return (
        <Container>
            <img src={gameThumb} alt=""/>
            <CategoryInfo>
                <h1>{name}</h1>
            </CategoryInfo>
        </Container>
    )
}

const Container = styled.div`
  cursor: pointer;
  max-width: 153px;


  h1 {
    padding-top: 10px;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    &:hover {
      color: #9047ff;
    }
  }

`;

const CategoryInfo = styled.div`
  
`;

export default CategoryContent;