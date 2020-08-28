import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { FormContainer, InputDiv, Text, Table, TableRow, TableData, ActionSpan } from './StylesHoldsOutput';

const HoldsOutput = props => {
    const [holds, setHolds] = useState([]);
    const [updateClicked, setUpdateClicked] = useState(false);
    const [updateArrIndex, setUpdateArrIndex] = useState(0);
    const [updatedHold, setUpdatedHold] = useState({ jugs: '', crimps: '', slopers: '', pinches: '' });

    const handleChange = event => {
        const { name, value } = event.target;
        updatedHold[name] = parseInt(value);
        setUpdatedHold({ ...updatedHold });
    }

    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:5000/holds/')
            .then(res => {
                console.log(res.data)
                setHolds(res.data);
            })
            .catch(err => {
                console.log(err)
            });

    }, [])

    const deleteHandleClick = holdId => {
        axios.delete(`http://localhost:5000/holds/${holdId}`)
            .then(res => console.log(res.data));

        setHolds(holds.filter(el => el._id !== holdId));
    }

    const addHandleClick = () => {
        history.push('/');
    }

    const updateHandleClick = index => {
        console.log(index)
        setUpdateArrIndex(index);
        setUpdateClicked(true);
    }

    const saveHandleClick = holdId => {
        setUpdateClicked(false);
        holds[updateArrIndex] = updatedHold;
        setHolds(holds);
        setUpdatedHold({ jugs: '', crimps: '', slopers: '', pinches: '' });

        axios.post(`http://localhost:5000/holds/update/${holdId}`, updatedHold)
            .then(res => console.log(res.data));

    }

    return (
        <FormContainer>
            <InputDiv>
                <Text size={'1.5rem'}>Current Inventory</Text>
                <Table>
                    <tbody>
                        <TableRow>
                            <TableData textAlign={'center'}>Entry</TableData>
                            <TableData textAlign={'center'}>Jugs</TableData>
                            <TableData textAlign={'center'}>Crimps</TableData>
                            <TableData textAlign={'center'}>Slopers</TableData>
                            <TableData textAlign={'center'}>Pinches</TableData>
                            <TableData textAlign={'center'} background={'#A6C0D2'}>Total</TableData>
                            <TableData textAlign={'center'}>Action</TableData>
                        </TableRow>
                        {holds.map((hold, index) => {
                            return (
                                <TableRow key={hold._id}>
                                    {updateClicked ?
                                        index === updateArrIndex ?
                                            <>
                                                <TableData textAlign={'center'}>{index}</TableData>
                                                <TableData textAlign={'center'}>
                                                    <input
                                                        type='text'
                                                        name='jugs'
                                                        value={updatedHold.jugs}
                                                        onChange={handleChange}
                                                    />
                                                </TableData>
                                                <TableData textAlign={'center'}>
                                                    <input
                                                        type='text'
                                                        name='crimps'
                                                        value={updatedHold.crimps}
                                                        onChange={handleChange}
                                                    />
                                                </TableData>
                                                <TableData textAlign={'center'}>
                                                    <input
                                                        type='text'
                                                        name='slopers'
                                                        value={updatedHold.slopers}
                                                        onChange={handleChange}
                                                    />
                                                </TableData>
                                                <TableData textAlign={'center'}>
                                                    <input
                                                        type='text'
                                                        name='pinches'
                                                        value={updatedHold.pinches}
                                                        onChange={handleChange}
                                                    />
                                                </TableData>
                                                <TableData textAlign={'center'} background={'#A6C0D2'}></TableData>
                                                <TableData textAlign={'center'} style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
                                                    <ActionSpan onClick={() => saveHandleClick(hold._id)}># (save)</ActionSpan>
                                                </TableData>
                                            </>
                                            :
                                            <>
                                                <TableData textAlign={'center'}>{index}</TableData>
                                                <TableData textAlign={'center'}>{hold.jugs}</TableData>
                                                <TableData textAlign={'center'}>{hold.crimps}</TableData>
                                                <TableData textAlign={'center'}>{hold.slopers}</TableData>
                                                <TableData textAlign={'center'}>{hold.pinches}</TableData>
                                                <TableData textAlign={'center'} background={'#A6C0D2'}>{hold.jugs + hold.crimps + hold.slopers + hold.pinches}</TableData>
                                                <TableData textAlign={'center'} style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}></TableData>
                                            </>
                                        :
                                        <>
                                            <TableData textAlign={'center'}>{index}</TableData>
                                            <TableData textAlign={'center'}>{hold.jugs}</TableData>
                                            <TableData textAlign={'center'}>{hold.crimps}</TableData>
                                            <TableData textAlign={'center'}>{hold.slopers}</TableData>
                                            <TableData textAlign={'center'}>{hold.pinches}</TableData>
                                            <TableData textAlign={'center'} background={'#A6C0D2'}>{hold.jugs + hold.crimps + hold.slopers + hold.pinches}</TableData>
                                            <TableData textAlign={'center'} style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
                                                <ActionSpan background={'#E8E4E1'} onClick={addHandleClick}>+ (add)</ActionSpan>
                                                <ActionSpan background={'#E8E4E1'} onClick={() => updateHandleClick(index)}>^ (update)</ActionSpan>
                                                <ActionSpan background={'#D11A2A'} onClick={() => deleteHandleClick(hold._id)}>x (delete)</ActionSpan>
                                            </TableData>
                                        </>
                                    }
                                </TableRow>
                            )
                        })}
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