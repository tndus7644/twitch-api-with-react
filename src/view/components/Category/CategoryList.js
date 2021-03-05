import React from 'react';
import styled from 'styled-components';
import CategoryContent from "./CategoryContent";

const CategoryList = () => {

    return(
        <Container>
            <h3>취향 저격 카테고리</h3>
            <CategoryContent/>
        </Container>
    )
}

const Container = styled.div`

`;

export default CategoryList;