import React from 'react';
import { connect } from 'react-redux';
import { SetListParent, SetList, PTag, ResultPill } from './SetList.styled';
import SetButton from './SetButton';

const SetGuide = ({ wallNumbers, mouseOverHandler }) => {
    return (
        <div style={ { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'  }}>

        
        <SetListParent>
            <SetList>
                {wallNumbers.map(set => {
                    return (
                        <>
                            {set.map(child => {
                                return (
                                    <ResultPill key={child}>
                                        {/* <PTag> */}
                                            {child} / jug / 45
                                        {/* </PTag> */}
                                    </ResultPill>
                                )
                            })}
                        </>
                    )
                })}
                </SetList>
            
        </SetListParent>
        <SetButton />
        </div>
    );
}
            //     {/* <SetListChild>
            //     <SetList>
            //         {firstHalf.map(num => {
            //             return (
            //                 <li 
            //                     key={num}
            //                     onMouseEnter={() => mouseOverHandler(num)}
            //                     onMouseLeave={() => mouseOverHandler(null)}>
            //                     {num}
            //                 </li>
            //             )
            //         })}
            //     </SetList>
            // </SetListChild> */}
            
    

const mapStateToProps = state => ({
    wallNumbers: state.addWallNumbers.sliceBoltArr
})

export default connect(mapStateToProps)(SetGuide);