import React from 'react';
import { Container } from './Mainview.styled';
import SetList from '../components/setList/SetList';
import ClimbingWallGrid from '../components/climbingWall/WallGrid';


const MainView = () => {
    return (
        <Container>
            <ClimbingWallGrid />
            <SetList />
        </Container>
    );
}

export default MainView;