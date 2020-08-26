import React from 'react';
import { connect } from 'react-redux';
import { FormContainer, InputDiv, Text, Table, TableRow, TableData } from './StylesHoldsOutput';

const HoldsOutput = props => {
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
            </InputDiv>
        </FormContainer>
    );
}


const mapStateToProps = state => ({
    holds: state.inputNewHolds.holds,
    wallNumbers: state.addWallNumbers
});

export default connect(mapStateToProps)(HoldsOutput);