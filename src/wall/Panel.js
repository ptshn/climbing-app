import React from 'react';
import styled from 'styled-components';
import Dots from './Dots';

const PanelDiv = styled.div`
        height: 300px;
        width: 300px;
        border-top: ${props => (props.borderTop ? 'none' : '1px solid')};
        border-right: ${props => (props.borderRight ? 'none' : '1px solid')};
        border-bottom: ${props => (props.borderBottom ? 'none' : '1px solid')};
        border-left: ${props => (props.borderLeft ? 'none' : '1px solid')};
    `;

const Panel = props => {
    return (
        <PanelDiv
            borderTop={props.borderTopNone}
            borderRight={props.borderRightNone}
            borderBottom={props.borderBottomNone}
            borderLeft={props.borderLeftNone}
        >
            <Dots />
            <Dots />
        </PanelDiv>
    )
}

export default Panel;