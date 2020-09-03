import React from 'react';
import { Container } from './Mainview.styled';
import SetList from '../components/setList/SetList';
import ClimbingWallGrid from '../components/climbingWall/WallGrid';
import WallFilter from '../components/climbingWall/WallFilter';


const MainView = () => {
    return (
        <Container>
            <WallFilter />
            <ClimbingWallGrid />
            <SetList />
        </Container>
    );
}

export default MainView;