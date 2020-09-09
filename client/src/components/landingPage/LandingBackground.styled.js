import styled from 'styled-components';

export const LandingParent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LandingChild = styled.div`
    background: ${props => props.backgroundColor};
    height: 50vh;
`;

export const LandingLink = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    display: flex;
    justify-content: space-between;
    width: 40%;
`;

export const LandingLinkImgDiv = styled.section`
    cursor: pointer;
    height: 150px;
    width: 150px;
    border: 2px solid #1B1B1B;
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background: #fff;

    -webkit-box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.29);
    -moz-box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.29);
    box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.29);

    &:hover {
        background: #FB9360;
    }
`;

export const LandingHeader = styled.p`
    font-family: 'Rubik Mono One', sans-serif;
    font-size: 4rem;
    color: #1B1B1B;
    letter-spacing: 0.5rem;
`;