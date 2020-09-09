import React from 'react';
import { Link } from 'react-router-dom';
import { MenuIconImg, NavDiv } from './Menu.styled';
import addIcon from '../../images/add.svg';
import drillIcon from '../../images/drill.svg';
import inventoryIcon from '../../images/number.svg';
import homeIcon from '../../images/home.svg';

const NavLink = props => {
    return (
        <NavDiv>
            <Link to='/'>
                <span role="img" aria-label="home">
                    <img src={homeIcon} alt='plus' style={{ height: '30px', width: '30px' }}/>
                </span>Home
                        </Link>
            <Link to='/add'>
                <span role="img" aria-label="add holds">
                    <img src={addIcon} alt='plus' />
                </span>Add Holds
                        </Link>
            <Link to='/main'>
                <span role="img" aria-label="set wall">
                    <img src={drillIcon} alt='climb' />
                </span>Set Wall
                        </Link>
            <Link to='/inventory'>
                <span role="img" aria-label="inventory">
                    <MenuIconImg src={inventoryIcon} alt='inventory' />
                </span>Inventory
            </Link>
        </NavDiv>
    )
}

export default NavLink;