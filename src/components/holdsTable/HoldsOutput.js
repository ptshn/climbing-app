import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { FormContainer, InputDiv, Text, Table, TableRow, TableData } from './StylesHoldsOutput';

const HoldsOutput = props => {
    const [holds, setHolds] = useState([]);

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
                            {/* <TableData textAlign={'center'}>TOTAL HOLDS</TableData> */}
                        </TableRow>
                        {/* <TableRow> */}
                            {holds.map((hold, index) => {
                                return (
                                    <TableRow>
                                        <TableData textAlign={'center'}>{index}</TableData>
                                        <TableData textAlign={'center'}>{hold.jugs}</TableData>
                                        <TableData textAlign={'center'}>{hold.crimps}</TableData>
                                        <TableData textAlign={'center'}>{hold.slopers}</TableData>
                                        <TableData textAlign={'center'}>{hold.pinches}</TableData>
                                    </TableRow>
                                )
                            })}
                            
                            {/* <TableData textAlign={'center'}>1</TableData> */}
                        {/* </TableRow> */}
                        {/* <TableRow>
                            <TableData textAlign={'center'}>2</TableData>
                            <TableData textAlign={'center'}>1</TableData>
                            <TableData textAlign={'center'}>1</TableData>
                            <TableData textAlign={'center'}>1</TableData>
                            <TableData textAlign={'center'}>1</TableData>
                            <TableData textAlign={'center'}>1</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData textAlign={'center'}>1</TableData>
                            <TableData textAlign={'center'}>1</TableData>
                            <TableData textAlign={'center'}>1</TableData>
                            <TableData textAlign={'center'}>1</TableData>
                            <TableData textAlign={'center'}>1</TableData>
                            <TableData textAlign={'center'}>1</TableData>
                        </TableRow> */}
                    </tbody>
                </Table>
            </InputDiv>
        </FormContainer>

        // <FormContainer>
        //     <InputDiv>
        //         <Text size={'1.5rem'}>Current Inventory</Text>
        //         <Table>
        //             <tbody>
        //                 <TableRow>
        //                     <td></td>
        //                     <TableData textAlign={'center'}>Total</TableData>
        //                 </TableRow>
        //                 <TableRow>
        //                     <td>Jugs</td>
        //                     <TableData textAlign={'center'}>
        //                         {props.holds && props.holds.jugs}
        //                     </TableData>
        //                 </TableRow>
        //                 <TableRow>
        //                     <td>Crimps</td>
        //                     <TableData textAlign={'center'}>
        //                         {props.holds && props.holds.crimps}
        //                     </TableData>
        //                 </TableRow>
        //                 <TableRow>
        //                     <td>Slopers</td>
        //                     <TableData textAlign={'center'}>
        //                         {props.holds && props.holds.slopers}
        //                     </TableData>
        //                 </TableRow>
        //                 <TableRow>
        //                     <td>Pinches</td>
        //                     <TableData textAlign={'center'}>
        //                         {props.holds && props.holds.pinches}
        //                     </TableData>
        //                 </TableRow>
        //             </tbody>
        //         </Table>
        //     </InputDiv>
        // </FormContainer>
    );
}


const mapStateToProps = state => ({
    holds: state.inputNewHolds.holds,
    wallNumbers: state.addWallNumbers
});

export default connect(mapStateToProps)(HoldsOutput);