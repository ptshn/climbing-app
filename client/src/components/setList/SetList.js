import React from 'react';
import { connect } from 'react-redux';
import { SetListContainer, SetListParent, SetList, ResultPill } from './SetList.styled';
import SetButton from './SetButton';
import { setHoverNum } from '../../actions/actions';

const SetGuide = ({ wallNumbers, setHoverNum }) => {
    return (
        <SetListContainer>
            <SetListParent>
                <SetList>
                    {wallNumbers.map((set, index) => {
                        return (
                            <ResultPill
                                key={index}
                                onMouseEnter={() => setHoverNum(set.num)}
                                onMouseLeave={() => setHoverNum(null)}
                            >
                                {set.num} | {set.hold} | {set.deg}&#176;
                            </ResultPill>

                        )
                    })}
                </SetList>
            </SetListParent>
            <SetButton />
        </SetListContainer>
    );
}


const mapStateToProps = state => ({
    wallNumbers: state.addWallNumbers.sliceBoltArr
})

const mapDispatchToProps = {
    setHoverNum
}

export default connect(mapStateToProps, mapDispatchToProps)(SetGuide);