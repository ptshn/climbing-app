import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addRandomizedBoltNums } from '../../actions/actions';
import { Frame, Panel, GridContainer, ContentDiv, NumberDiv } from './StylesGrid';
import SetGuide from '../setguide/SetGuide';

const Grid = props => {
    const excludeNumberList = [13, 39, 65, 91, 117, 143, 157, 159, 161, 163, 165, 167, 169];

    const [staticBoltNumbers, setStaticBoltNumbers] = useState([]);
    const [randomizedBoltNumbers, setRandomizedBoltNumbers] = useState([]);
    const [slicedNumList, setSlicedNumList] = useState([]);
    const [hoveredNumber, setHoveredNumber] = useState(null);

    useEffect(() => {
        const totalBoltList = [];

        for (let i = 1; i <= 169; i++) {
            totalBoltList.push(i);
        }

        const boltNumbers = totalBoltList.filter(num => num % 2 !== 0).filter(num => !excludeNumberList.includes(num));

        props.addRandomizedBoltNums(boltNumbers);
        // setRandomizedBoltNumbers(boltNumbers);
        setStaticBoltNumbers(totalBoltList);
        
    }, []);


    const sliceNumbersList = (numbersList, size) => {
        const results = [];

        for (let i = 0; i < numbersList.length; i+= size) {
            results.push(numbersList.slice(i, i+size));
        }
        return results;
    }

    const mouseOverHandler = num => {
        setHoveredNumber(num);
    }
    
    const randomizeBtnHandler = () => {
        // console.log(props.state.grid)
        const staticArrayCopy = [...randomizedBoltNumbers];

        for (let i = staticArrayCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i +1));
            [staticArrayCopy[i], staticArrayCopy[j]] = [staticArrayCopy[j], staticArrayCopy[i]];
        }
        
        const sliceNumResults = sliceNumbersList(staticArrayCopy, 12);
        setSlicedNumList(sliceNumResults);
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
            {/* <RandomizeButton onClick={randomizeBtnHandler}>Randomize</RandomizeButton> */}
            <Panel>
                <GridContainer>
                    {boltHole}
                </GridContainer>
            </Panel>
            <SetGuide
                randomizedNumList={props.grid.slicer && props.grid.slicer}
                mouseOverHandler={mouseOverHandler}
            />
        </Frame>
    );
}

const mapStateToProps = state => ({
    grid: state.grid
})

const mapDispatchToProps = {
    addRandomizedBoltNums
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);