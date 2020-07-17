import React from 'react';
import styled from 'styled-components';

// #region 
const SetListParent = styled.div`
    width: 25%;
    height: 500px;
    display: flex;
    flex-direction: row;
`;

const SetListChild = styled.div`
    width: 250px;
`;

const SetList = styled.ul`
    list-style: none;

    > li {
        cursor: pointer;
    }
`;
// #endregion

const SetGuide = ({ firstHalf, secondHalf, mouseOverHandler }) => {
    return (
        <SetListParent>
            <SetListChild>
                <SetList>
                    {firstHalf.map(num => {
                        return (
                            <li 
                                key={num}
                                onMouseEnter={() => mouseOverHandler(num)}
                                onMouseLeave={() => mouseOverHandler(null)}>
                                {num}
                            </li>
                        )
                    })}
                </SetList>
            </SetListChild>
            <SetListChild>
                <SetList>
                    {secondHalf.map(num => {
                        return (
                            <li key={num}>
                                {num}
                            </li>
                        )
                    })}
                </SetList>
            </SetListChild>
        </SetListParent>
    );
}

export default SetGuide;