import React from 'react';
import { connect } from 'react-redux';
import { addSlicedBoltNums } from '../../actions/actions';
import { FormContainer, InputDiv, Text, Table, TableRow, TableData, SubmitButton } from './StylesHoldsOutput';

const HoldsOutput = props => {
    const handleClick = () => {
        const staticArrayCopy = [...props.grid.rando];
        // console.log(staticArrayCopy)
        for (let i = staticArrayCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i +1));
            [staticArrayCopy[i], staticArrayCopy[j]] = [staticArrayCopy[j], staticArrayCopy[i]];
        }
        
        const sliceNumResults = sliceNumbersList(staticArrayCopy, 12);
        
        props.addSlicedBoltNums(sliceNumResults);
    }

    const sliceNumbersList = (numbersList, size) => {
        const results = [];

        for (let i = 0; i < numbersList.length; i+= size) {
            results.push(numbersList.slice(i, i+size));
        }
        return results;
    }

    return (
        <FormContainer>
            <InputDiv>
                <Text size={'1.5rem'}>Inventory</Text>
                <Table>
                    <tbody>
                        <TableRow>
                            <td></td>
                            <TableData textAlign={'center'}>Total</TableData>
                        </TableRow>
                        <TableRow>
                            <td>Jugs</td>
                            <TableData textAlign={'center'}>
                                {props.holds && props.holds.jugs}
                            </TableData>
                        </TableRow>
                        <TableRow>
                            <td>Crimps</td>
                            <TableData textAlign={'center'}>
                                {props.holds && props.holds.crimps}
                            </TableData>
                        </TableRow>
                        <TableRow>
                            <td>Slopers</td>
                            <TableData textAlign={'center'}>
                                {props.holds && props.holds.slopers}
                            </TableData>
                        </TableRow>
                        <TableRow>
                            <td>Pinches</td>
                            <TableData textAlign={'center'}>
                                {props.holds && props.holds.pinches}
                            </TableData>
                        </TableRow>
                    </tbody>
                </Table>
                <SubmitButton onClick={handleClick}>Randomize</SubmitButton>
            </InputDiv>
        </FormContainer>
    );
}


const mapStateToProps = state => ({
    holds: state.holdsInput.holds,
    grid: state.grid
});

const mapDispatchToProps = {
    addSlicedBoltNums
}

export default connect(mapStateToProps, mapDispatchToProps)(HoldsOutput);