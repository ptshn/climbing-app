import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { addHolds } from '../../actions/actions';
import { InputDiv, Text, Table, TableRow, TableData, Input, SubmitButton } from './HoldsInput.styled';

const HoldsForm = props => {
    let history = useHistory();
    const [holdsQuantity, setHoldsQuantity] = useState({ jugs: '', crimps: '', slopers: '', pinches: '' });

    const handleChange = event => {
        const { name, value } = event.target;
        holdsQuantity[name] = parseInt(value);
        setHoldsQuantity({ ...holdsQuantity });
    }

    const handleClick = () => {
        props.addHolds(holdsQuantity);
        history.push('/inventory');

        axios.post('/holds/add', holdsQuantity)
            .then(res => console.log(res.data));
    }

    return (
        <InputDiv>
            <Text size={'1.5rem'}>Add New Holds</Text>
            <Table>
                <tbody>
                    <TableRow>
                        <td></td>
                        <TableData textAlign={'center'}>Qty</TableData>
                    </TableRow>
                    <TableRow>
                        <td>Jugs</td>
                        <TableData>
                            <Input
                                type='text'
                                name='jugs'
                                value={holdsQuantity.jugs}
                                onChange={handleChange}
                            />
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <td>Crimps</td>
                        <td>
                            <Input
                                type='text'
                                name='crimps'
                                value={holdsQuantity.crimps}
                                onChange={handleChange}
                            />
                        </td>
                    </TableRow>
                    <TableRow>
                        <td>Slopers</td>
                        <TableData>
                            <Input
                                type='text'
                                name='slopers'
                                value={holdsQuantity.slopers}
                                onChange={handleChange}
                            />
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <td>Pinches</td>
                        <td>
                            <Input
                                type='text'
                                name='pinches'
                                value={holdsQuantity.pinches}
                                onChange={handleChange}
                            />
                        </td>
                    </TableRow>
                </tbody>
            </Table>
            <SubmitButton onClick={handleClick}>Submit</SubmitButton>
        </InputDiv>
    );
}

const mapStateToProps = state => ({
    holds: state.inputNewHolds.holds
})

const mapDispatchToProps = {
    addHolds
}

export default connect(mapStateToProps, mapDispatchToProps)(HoldsForm);