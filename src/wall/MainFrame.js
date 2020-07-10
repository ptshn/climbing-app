import React from 'react';
import styled from 'styled-components';
import Panel from './Panel';

const ParentDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`;

const Frame = styled.div`
height: 600px;
width: 600px;
display: flex;
`;

const HalfFrame = styled.div`
width: 300px;
`;

const MainFrame = props => {
    return (
        <ParentDiv>
            <Frame>
                <HalfFrame>
                    <Panel holdType={'Jugs'} />
                    <Panel borderTopNone={true} holdType={'Crimps'} />
                </HalfFrame>
                <HalfFrame>
                    <Panel borderLeftNone={true} holdType={'Slopers'}/>
                    <Panel borderTopNone={true} borderLeftNone={true} holdType={'Pinches'}/>
                </HalfFrame>
            </Frame>
        </ParentDiv>
    )
}

export default MainFrame;