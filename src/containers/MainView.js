import React from 'react';
import HoldsInventoryList from '../components/holdsTable/HoldsOutput';
import ClimbingWallGrid from '../components/climbingWall/WallGrid';
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