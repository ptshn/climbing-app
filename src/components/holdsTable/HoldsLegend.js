import React from 'react';
import { connect } from 'react-redux';
import { StyledLegend, Jug, Sloper, Pinch, Crimp } from './HoldsLegend.styled';

const HoldsLegend = props => {
    return (
        <StyledLegend>
            <Jug />
            <Sloper />
            <Pinch />
            <Crimp />
        </StyledLegend>
    );
}


const mapStateToProps = state => ({
    holds: state.inputNewHolds.holds,
    wallNumbers: state.addWallNumbers
});


export default connect(mapStateToProps)(HoldsLegend);