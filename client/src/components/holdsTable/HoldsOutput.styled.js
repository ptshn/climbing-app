import styled from 'styled-components';

export const FormContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    /* align-items: center; */
    justify-content: space-evenly;
`;

export const InputDiv = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
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
    border-radius: 10px;
    padding: 0 15px 5px;
    border-collapse: collapse;
    margin-top: 10px;
    background: #fff;
    -webkit-box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.29);
    -moz-box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.29);
    box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.29);
`;

export const TableRow = styled.tr`
    font-size: 1.5rem;
    border: 1px solid;
`;

export const TableData = styled.td`
    width: 10px;
    text-align: ${props => props.textAlign};
    border: none;
    background: ${props => props.background};
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

export const ActionSpan = styled.span`
    cursor: pointer;
    background-color: ${props => props.background};
    border: 2px solid;
    color: black;
    padding: 5px 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    border-radius: 16px;
    font-size: 14px;

    &:hover {
        /* background: ${props => props.delete ? '#D11A2A': "#FB9360"}; */
        background: #fff;
    }
`