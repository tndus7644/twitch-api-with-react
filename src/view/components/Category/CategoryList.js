import React from 'react';
import styled from 'styled-components';
import CategoryContent from "./CategoryContent";

const CategoryList = ({categoryList}) => {

    return (
        <Container>
            <Title>
                취향저격 <span>카테고리</span>
            </Title>
            <GameCategory>
            {
                categoryList.data.map((item, index) =>
                    <CategoryContent {...item} key={index}/>)
            }
            </GameCategory>
        </Container>
    )
}

const Container = styled.div`
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 18px;
  padding-bottom: 15px;

  span {
    color: #9047ff;
    cursor: pointer;
  }

`;

const GameCategory = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default CategoryList;