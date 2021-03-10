import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const GridList = ({data, renderItem, direction = 'row'}) => {

    return (
        <Container className={cn("gridList", direction)}>
            <Row>
                {data.map((item, index) => (
                        <Col key={index}>
                            {renderItem(item)}
                        </Col>
                    )
                )}
            </Row>
        </Container>
    )
}

const Container = styled.div`

`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
  
  .column &{
    flex-direction: column;
  }
`;

const Col = styled.div`
  width: 25%;
  padding: 10px;
`;

export default GridList;