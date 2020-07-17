import React, { useState, useEffect } from 'react';
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

const RandomizeButton = styled.button`
    background-color: #87CEEB;
    height: 25px;
    width: 100px;
`;

// #endregion

const Grid = props => {
    const excludeNumberList = [13, 39, 65, 91, 117, 143, 157, 159, 161, 163, 165, 167, 169];

    const [staticBoltNumbers, setStaticBoltNumbers] = useState([]);
    const [randomizedBoltNumbers, setRandomizedBoltNumbers] = useState([]);
    const [firstHalfDiv, setFirstHalfDiv] = useState([]);
    const [secondHalfDiv, setSecondHalfDiv] = useState([]);
    const [hoveredNumber, setHoveredNumber] = useState(null);

    useEffect(() => {
        const totalBoltList = [];
        const firstHalf = [];
        const secondHalf = [];

        for (let i = 1; i <= 169; i++) {
            totalBoltList.push(i);
        }

        const boltNumbers = totalBoltList.filter(num => num % 2 !== 0).filter(num => !excludeNumberList.includes(num));
        
        for (let i = 0; i < boltNumbers.length; i++) {
            if (i < boltNumbers.length / 2) {
                firstHalf.push(boltNumbers[i]);
            } else {
                secondHalf.push(boltNumbers[i]);
            }
        }

        setRandomizedBoltNumbers(boltNumbers);
        setStaticBoltNumbers(totalBoltList);
        setFirstHalfDiv(firstHalf);
        setSecondHalfDiv(secondHalf);
    }, []);

    const splitArray = numbersList => {
        const firstHalf = [];
        const secondHalf = [];

        for (let i = 0; i < numbersList.length; i++) {
            if (i < numbersList.length / 2) {
                firstHalf.push(numbersList[i]);
            } else {
                secondHalf.push(numbersList[i]);
            }
        }

        setFirstHalfDiv(firstHalf);
        setSecondHalfDiv(secondHalf);
    }

    const mouseOverHandler = num => {
        setHoveredNumber(num);
    }
    
    const randomizeBtnHandler = () => {
        const staticArrayCopy = [...randomizedBoltNumbers]

        for (let i = staticArrayCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i +1));
            [staticArrayCopy[i], staticArrayCopy[j]] = [staticArrayCopy[j], staticArrayCopy[i]]
        }
        
        splitArray(staticArrayCopy);
    }

    const boltHole = staticBoltNumbers.map(num => {
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
    });

    return (
        <Frame>
            <RandomizeButton onClick={randomizeBtnHandler}>Randomize</RandomizeButton>
            <SetGuide
                firstHalf={firstHalfDiv}
                secondHalf={secondHalfDiv}
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