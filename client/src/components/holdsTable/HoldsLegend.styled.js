import styled from 'styled-components';

export const StyledLegend = styled.div`
    display: flex;
    border: 2px solid #E4E4E4;
    border-radius: 10px;
    padding: 0 15px 5px;
    /* height: 100px; */
    /* width: 350px; */
    margin-top: 25px;
    flex-direction: column;
`;

export const Jug = styled.div`
    height: 45px;
    width: 45px;
    border-radius: 0 0 90px 90px;
    background: purple;
`;

export const Sloper = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 25px;
    background: orange;
`;

export const Pinch = styled.div`
    width: 40px; 
    height: 20px; 
    background: yellow;
`;

export const Crimp = styled.div`
    width: 0; 
    height: 0; 
    border-top: 30px solid green;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
`;