import React from 'react';
import HoldsInventoryList from '../components/holdsTable/HoldsOutput';
import ClimbingWallGrid from '../components/climbingWall/Grid';
import { Container } from './StylesMainView';

const MainView = () => {
    return (
        <Container>
            <HoldsInventoryList />
            <ClimbingWallGrid />
        </Container>
    );
}

export default MainView;