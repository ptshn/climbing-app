import React, { useRef } from 'react';
import { StyledMenu, MenuIconImg } from './StylesMenu';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import plus from '../../images/add.svg';
import drill from '../../images/drill.svg';
import inventory from '../../images/number.svg';
import { useOnClickOutside } from '../../hooks';
import { setNavMenuBool } from '../../actions/actions';

const Menu = props => {
    // const node = useRef();
    // useOnClickOutside(node, () => props.setNavMenuBool(false));

    return (
        <StyledMenu open={props.open}>
            <div>
                <Link to='/'>
                    <span role="img" aria-label="add holds">
                        <img src={plus} alt='plus' />
                    </span>Add Holds
                </Link>
                <Link to='/main'>
                    <span role="img" aria-label="set wall">
                            <img src={drill} alt='climb' />
                        </span>Set Wall
                </Link>
                <Link to='/inventory'>
                    <span role="img" aria-label="inventory">
                            <MenuIconImg src={inventory} alt='inventory' />
                        </span>Inventory
                </Link>
            </div>
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