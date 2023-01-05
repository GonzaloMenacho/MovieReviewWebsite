import styled from 'styled-components';

export const HelloButton = styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
`;

export function sayHello() {
    alert('You clicked me!');
}