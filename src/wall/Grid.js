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
    grid-template-rows: 18px 33px 33px 33px 33px 33px 33px 33px 33px 33px 33px 33px 17px;
    grid-template-columns: 33px 67px 67px 67px 67px 67px 67px 67px 67px 67px 66px 66px 34px;
`;

const ContentDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:nth-child(even) {
        visibility: hidden;
    }
`;

const Dot = styled.span`
    background: black;
    border-radius: 50%;
    width: 5px;
    height: 5px;
    position: absolute;
    bottom: 0;
    right: 0;
`;

const Grid = props => {
    const cellTotal = [];
    const excludeNumberList = [13, 39, 65, 91, 117, 143, 157, 159, 161, 163, 165, 167, 169];

    for (let i = 1; i <= 169; i++) {
        cellTotal.push(i);
    }


    const boltHole = cellTotal.map(num => {
        return (
            <ContentDiv key={num}>
                {excludeNumberList.indexOf(num) === -1 ? 
                    <Dot></Dot>
                    :
                    null
                }
            </ContentDiv>
        )
    })
    
    return (
        <Frame>
            <Panel>
                <GridContainer>
                    {boltHole}
                </GridContainer>
            </Panel>
        </Frame>
    )
}

export default Grid;