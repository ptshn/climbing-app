import React from 'react';
import { connect } from 'react-redux';
import { SetListContainer, SetListParent, SetList, ResultPill } from './SetList.styled';
import SetButton from './SetButton';
import { setHoverNum } from '../../actions/actions';

const SetGuide = ({ wallNumbers, setHoverNum }) => {
    const hoverOffObj = {
        num: 0,
        hold: '',
        deg: 0
    }

    return (
        <SetListContainer>
            <SetListParent>
                <SetList>
                    {wallNumbers.map((set, index) => {
                        return (
                            <ResultPill
                                key={index}
                                onMouseEnter={() => setHoverNum(set)}
                                onMouseLeave={() => setHoverNum(hoverOffObj)}
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