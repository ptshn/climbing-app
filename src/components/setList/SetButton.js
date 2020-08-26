import React from 'react';
import { connect } from 'react-redux';
import { addSliceBoltArr } from '../../actions/actions';
import { SubmitButton } from './SetButton.styled';

const SetButton = props => {
    const handleClick = () => {
        const staticArrayCopy = [...props.wallNumbers.staticBoltArr];

        for (let i = staticArrayCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [staticArrayCopy[i], staticArrayCopy[j]] = [staticArrayCopy[j], staticArrayCopy[i]];
        }

        const sliceNumResults = sliceNumbersList(staticArrayCopy, 2);

        props.addSliceBoltArr(sliceNumResults);
    }

    const sliceNumbersList = (numbersList, size) => {
        const results = [];

        for (let i = 0; i < numbersList.length; i += size) {
            results.push(numbersList.slice(i, i + size));
        }
        return results;
    }

    return (
        <SubmitButton onClick={handleClick}>New Set</SubmitButton>
    );
}


const mapStateToProps = state => ({
    holds: state.inputNewHolds.holds,
    wallNumbers: state.addWallNumbers
});

const mapDispatchToProps = {
    addSliceBoltArr
}

export default connect(mapStateToProps, mapDispatchToProps)(SetButton);