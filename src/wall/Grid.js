import React, { useState } from 'react';
import styled from 'styled-components';
import SetGuide from '../setguide/SetGuide';

// #region Styled Components
const Frame = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 100vh;
    margin-top: 25px;
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

const NumberDiv = styled.span`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    border-radius: 50%;
    width: 5px;
    height: 5px;
    position: absolute;
    bottom: 0;
    right: 0;
`;

// #endregion

const Grid = props => {
    const [hoveredNumber, setHoveredNumber] = useState(null);

    const cellTotal = [];
    const excludeNumberList = [13, 39, 65, 91, 117, 143, 157, 159, 161, 163, 165, 167, 169];

    const firstHalf = [];
    const secondHalf = [];

    for (let i = 1; i <= 169; i++) {
        cellTotal.push(i);
    }

    const boltNumbers = cellTotal.filter(num => num % 2 !== 0).filter(num => !excludeNumberList.includes(num))

    for (let i = 0; i < boltNumbers.length; i++) {
        if (i < boltNumbers.length / 2) {
            firstHalf.push(boltNumbers[i]);
        } else {
            secondHalf.push(boltNumbers[i]);
        }
    }

    const mouseOverHandler = num => {
        console.log(num);
        setHoveredNumber(num);
    }

    const boltHole = cellTotal.map(num => {
        return (
            <ContentDiv key={num}>
                {excludeNumberList.indexOf(num) === -1 ?
                    <NumberDiv>
                        {hoveredNumber === num ? 
                            <p style={{ color: 'red', fontWeight: 'bold' }}>{num}</p>
                            :
                            <p>{num}</p>
                        }
                    </NumberDiv>
                    :
                    null
                }
            </ContentDiv>
        );
    })

    return (
        <Frame>
            <SetGuide
                firstHalf={firstHalf}
                secondHalf={secondHalf}
                mouseOverHandler={mouseOverHandler}
            />
            <Panel>
                <GridContainer>
                    {boltHole}
                </GridContainer>
            </Panel>
        </Frame>
    );
}

export default Grid;