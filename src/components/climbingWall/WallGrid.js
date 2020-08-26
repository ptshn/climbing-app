import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addStaticBoltNums } from '../../actions/actions';
import { Frame, Panel, GridContainer, ContentDiv, NumberDiv } from './StylesWallGrid';

const WallGrid = props => {
    const excludeNumberList = [13, 39, 65, 91, 117, 143, 157, 159, 161, 163, 165, 167, 169];
    const [staticBoltNumbers, setStaticBoltNumbers] = useState([]);
    
    useEffect(() => {
        const totalBoltList = [];

        for (let i = 1; i <= 169; i++) {
            totalBoltList.push(i);
        }

        const boltNumbers = totalBoltList.filter(num => num % 2 !== 0).filter(num => !excludeNumberList.includes(num));

        props.addStaticBoltNums(boltNumbers);
        setStaticBoltNumbers(totalBoltList);
    }, []);

    const staticWallBoltNums = staticBoltNumbers.map(num => {
        return (
            <ContentDiv key={num}>
                {excludeNumberList.indexOf(num) === -1 ?
                    <NumberDiv>
                        {props.hoverNumber === num ? 
                            <p style={{ color: 'red', fontWeight: 'bold', fontSize: '25px' }}>{num}</p>
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
    wallNumbers: state.addWallNumbers,
    hoverNumber: state.setHoverNumber.selected
})

const mapDispatchToProps = {
    addStaticBoltNums
}

export default connect(mapStateToProps, mapDispatchToProps)(WallGrid);