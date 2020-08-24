import styled from 'styled-components';

export const FormContainer = styled.div`
    display: flex;
`;

export const InputDiv = styled.div`
    height: 500px;
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
    border: 2px solid #E4E4E4;
    border-radius: 10px;
    padding: 0 15px 5px;
    height: 400px;
    width: 350px;
`;

export const TableRow = styled.tr`
    font-size: 1.5rem;
`;

export const TableData = styled.td`
    width: 10px;
    text-align: ${props => props.textAlign};
`;

export const SubmitButton = styled.button`
    color: white;
    border-radius: 3px;
    border: none;
    background: #0BB81B;
    height: 40px;
    width: 100px;
    font-size: 18px;
    margin-left: 250px;
    cursor: pointer;
`;