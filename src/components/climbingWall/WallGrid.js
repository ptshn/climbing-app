import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addStaticBoltNums } from '../../actions/actions';
import { Frame, Panel, GridContainer, ContentDiv, NumberDiv } from './StylesWallGrid';

const WallGrid = props => {
    const excludeNumberList = [13, 39, 65, 91, 117, 143, 157, 159, 161, 163, 165, 167, 169];
    const [staticBoltNumbers, setStaticBoltNumbers] = useState([]);
    const [hoveredNumber, setHoveredNumber] = useState(null);

    useEffect(() => {
        const totalBoltList = [];

        for (let i = 1; i <= 169; i++) {
            totalBoltList.push(i);
        }

        const boltNumbers = totalBoltList.filter(num => num % 2 !== 0).filter(num => !excludeNumberList.includes(num));

        props.addStaticBoltNums(boltNumbers);
        setStaticBoltNumbers(totalBoltList);
        
    }, []);

    const mouseOverHandler = num => {
        setHoveredNumber(num);
    }

    const staticWallBoltNums = staticBoltNumbers.map(num => {
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
            <Panel>
                <GridContainer>
                    {staticWallBoltNums}
                </GridContainer>
            </Panel>
        </Frame>
    );
}

const mapStateToProps = state => ({
    wallNumbers: state.addWallNumbers
})

const mapDispatchToProps = {
    addStaticBoltNums
}

export default connect(mapStateToProps, mapDispatchToProps)(WallGrid);