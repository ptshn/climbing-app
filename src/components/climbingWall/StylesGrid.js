import styled from 'styled-components';

export const Frame = styled.div`
    display: flex;
    flex-direction: column;
    /* flex: 1; */
    align-items: flex-end;
    margin-top: 25px;
    /* border: 1px solid red; */
`;

export const Panel = styled.div`
height: 400px;
width: 800px;
background-color: #E6BF83;
`;

export const GridContainer = styled.div`
display: grid;
grid-template-rows: 18px 33px 33px 33px 33px 33px 33px 33px 33px 33px 33px 33px 17px;
grid-template-columns: 33px 67px 67px 67px 67px 67px 67px 67px 67px 67px 66px 66px 34px;
`;

export const ContentDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;

&:nth-child(even) {
    visibility: hidden;
}
`;

export const NumberDiv = styled.span`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    border-radius: 50%;
    width: 5px;
    height: 5px;
    position: absolute;
    bottom: 0;
    right: 0;
`;

export const RandomizeButton = styled.button`
    background-color: #87CEEB;
    height: 25px;
    width: 100px;
`;