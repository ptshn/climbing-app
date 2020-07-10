import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Panel = styled.div`
    height: 400px;
    width: 800px;
    background-color: #E6BF83;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-rows: 18px 33px 33px 33px 33px 33px 33px 33px 33px 33px 33px 33px 18px;
    grid-template-columns: 33px 67px 67px 67px 67px 67px 67px 67px 67px 67px 66px 66px 33px;
`;

const ContentDiv = styled.div`
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Grid = props => {
    const cellTotal = [];

    for (let i = 1; i <= 169; i++) {
        cellTotal.push(i);
    }

    const cell = cellTotal.map(num => {
        return (
            <ContentDiv key={num}>
                {num}
            </ContentDiv>
        )
    })

    return (
        <Frame>
            <Panel>
                <GridContainer>
                    {cell}
                </GridContainer>
            </Panel>
        </Frame>
    )
}

export default Grid;