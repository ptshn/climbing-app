import React from 'react';
import { SetListParent, SetListChild, PTag } from './StylesSetGuide';

const SetGuide = ({ randomizedNumList, mouseOverHandler }) => {
    return (
        <SetListParent>
            {randomizedNumList.map(set => {
                return (
                    <SetListChild key={set}>
                        {set.map(child => {
                            return (
                                <PTag key={child}>
                                    {child}
                                </PTag>
                            )
                        })}
                    </SetListChild>
                )
            })}
            
            {/* <SetListChild>
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
            </SetListChild> */}
            
        </SetListParent>
    );
}

export default SetGuide;