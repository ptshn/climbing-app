import styled from 'styled-components';

export const SetListContainer = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
`;

export const SetListParent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    width: 80%;
    margin-top: 10px;
`;

export const SetList = styled.div`
    flex: 1;
    font-size: 14px;
`;

export const PTag = styled.p`
    cursor: pointer;
    margin: 0;
    border: 1px solid red;
`;

export const ResultPill = styled.div`
    background-color: #ddd;
    border: none;
    color: black;
    padding: 5px 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 16px;
    width: 130px;
`;