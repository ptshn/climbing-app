import styled from 'styled-components';

export const FormContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
`;

export const Text = styled.p`
    font-size: ${props => props.size};
    display: inline-block;
    text-align: center;
    width: 100%;
    margin: 0px;
    font-weight: bold;
`;

export const Table = styled.table`
    border: 2px solid;
    border-radius: 10px;
    padding: 0 15px 5px;
    height: 400px;
    width: 350px;
    -webkit-box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.29);
    -moz-box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.29);
    box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.29);
    background: #fff;
    margin-bottom: 25px;
    margin-top: 25px;
`;

export const TableRow = styled.tr`
    font-size: 1.5rem;
`;

export const TableData = styled.td`
    width: 10px;
    text-align: ${props => props.textAlign};
`;

export const Input = styled.input`
    border-radius: 5px;
    border: 1px solid;
    height: 40px;
    width: 83px;
    font-size: 1.5rem;
`;

export const SubmitButton = styled.button`
    color: #000;
    border-radius: 3px;
    border: none;
    background: #FB9360;
    height: 40px;
    width: 80px;
    font-size: 18px;
    margin-left: auto;
    cursor: pointer;
    font-weight: bold;
`;
