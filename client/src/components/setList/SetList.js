import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { SetListContainer, SetListParent, SetList, ResultPill } from './SetList.styled';
import SetButton from './SetButton';
import { setHoverNum } from '../../actions/actions';

const SetGuide = ({ wallNumbers, setHoverNum }) => {
    return (
        <SetListContainer>

            <SetListParent>
                <SetList>
                    {wallNumbers.map(set => {
                        return (
                            <Fragment key={set}>
                                {set.map(num => {
                                    return (
                                        <ResultPill
                                            key={num}
                                            onMouseEnter={() => setHoverNum(num)}
                                            onMouseLeave={() => setHoverNum(null)}
                                        >
                                            {num} / jug / 45
                                        </ResultPill>
                                    )
                                })}
                            </Fragment>
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