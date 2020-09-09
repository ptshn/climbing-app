import React from 'react';
import { StyledMenu } from './Menu.styled';
import { connect } from 'react-redux';
import { setNavMenuBool } from '../../actions/actions';
import NavLink from './NavLink';

const Menu = props => {
    return (
        <StyledMenu open={props.open}>
            <NavLink />
        </StyledMenu>
    )
}

const mapStateToProps = state => ({
    open: state.setNavMenuBool
});


const mapDispatchToProps = {
    setNavMenuBool
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);