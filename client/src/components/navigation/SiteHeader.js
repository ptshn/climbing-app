import React from 'react';
import climber from '../../images/climbing.svg';
import { FixedLogo, Title, TitleDiv } from './SiteHeader.styled';

const SiteHeader = () => {
    return (
        <>
        <FixedLogo>
            <div>
                <img src={climber} alt='climber'/>
            </div>
            <TitleDiv>
                <Title>climbing</Title>
                <Title>app</Title>
            </TitleDiv>
            
        </FixedLogo>
        
        </>
    )
}

export default SiteHeader;