import React from 'react';
import { connect } from 'react-redux';
import { addSliceBoltArr } from '../../actions/actions';
import { SubmitButton } from './SetButton.styled';

const SetButton = props => {
    const handleClick = () => {
        const newWallSet = [];

        const staticArrayCopy = [...props.wallNumbers.staticBoltArr];
        const holds = ['jug', 'crimp', 'sloper', 'pinch']

        const randomNumbersArray = shuffleNumberArray(staticArrayCopy);

        for (let i = 0; i < randomNumbersArray.length; i++) {
            let obj = {};

            const randomHoldIndex = randomArrayIndex(holds.length);
            const randomAngleIndex = randomArrayIndex(360);

            obj['num'] = randomNumbersArray[i];
            obj['hold'] = holds[randomHoldIndex];
            obj['deg'] = randomAngleIndex;

            newWallSet.push(obj);
        }

        props.addSliceBoltArr(newWallSet);
    }

    const shuffleNumberArray = numberArr => {
        for (let i = numberArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [numberArr[i], numberArr[j]] = [numberArr[j], numberArr[i]];
        }
        return numberArr;
    }

    const randomArrayIndex = arrLength => {
        return Math.floor(Math.random() * arrLength);
    }

    return (
        <SubmitButton onClick={handleClick}>New Sets</SubmitButton>
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