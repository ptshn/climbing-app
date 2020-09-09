import React, { useState } from 'react';
import { LandingParent, LandingHeader, LandingLink, LandingLinkImgDiv } from './LandingBackground.styled';
import { Link } from 'react-router-dom';
import addIcon from '../../images/add.svg';
import drillIcon from '../../images/drill.svg';
import inventoryIcon from '../../images/number.svg';
import climber from '../../images/climbing.svg';

const LandingBackground = props => {
    const [isClicked, setIsClicked] = useState(false);


    const handleClick = () => {
        setIsClicked(true);
    }

    return (
        <>

            <LandingParent>
            <div style={{display: 'flex'}}>
            
            <LandingHeader>ReadySetClimb</LandingHeader>
              {/* <img src={climber} alt='climber'/> */}
            </div>
            

            <LandingLink>
                <Link to='/add' style={{ textDecoration: 'none', color: 'black', fontSize: '1.5rem' }}>
                    <LandingLinkImgDiv role="img" aria-label="add holds">
                        <img src={addIcon} alt='plus' style={ {height: '50px', width: '50px'}}/>
                        <p>Add Holds</p>
                    </LandingLinkImgDiv>
                </Link>
                <Link to='/main' style={{ textDecoration: 'none', color: 'black', fontSize: '1.5rem' }}>
                    <LandingLinkImgDiv role="img" aria-label="set wall">
                        <img src={drillIcon} alt='climb' style={ {height: '50px', width: '50px'}}/>
                        <p>Set Wall</p>
                    </LandingLinkImgDiv>
                </Link>
                <Link to='/inventory' style={{ textDecoration: 'none', color: 'black', fontSize: '1.5rem' }}>
                    <LandingLinkImgDiv role="img" aria-label="inventory">
                        <img src={inventoryIcon} alt='inventory' style={ {height: '50px', width: '50px'}}/>
                        <p>Inventory</p>
                    </LandingLinkImgDiv>
                </Link>
            </LandingLink>
            </LandingParent>
        </>
    );
}

export default LandingBackground;