import React from 'react';
import styled from 'styled-components';

const Dot = styled.span`
    height: 5px;
    width: 5px;
    border-radius: 50%;
    display: inline-block;
    background-color: black;
`;

const Dots = props => {
    return (
        <Dot />
    )
}

export default Dots;