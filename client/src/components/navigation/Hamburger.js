import React from 'react';
import { StyledBurger } from './Hamburger.styled';
import { connect } from 'react-redux';
import { setNavMenuBool } from '../../actions/actions';

const Hamburger = props => {
    const handleClick = () => {
        props.setNavMenuBool(!props.open);
    }
    return (
        <StyledBurger open={props.open} onClick={handleClick}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}

const mapStateToProps = state => ({
    open: state.setNavMenuBool
})

const mapDispatchToProps = {
    setNavMenuBool
}

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);