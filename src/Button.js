import React from 'react';
import styled from 'styled-components';

const Button = styled.button `
width: ${props => props.large ? "50%" : "25%"};
height: 100%;
font-size: 2rem;
font-family: inherit;
background: ${props => props.op ? "bisque" : "beige"};
color: ${props => props.op ? "tomato" : "cyan"};
border: ${props => props.op ? "1px solid tomato" : "1px solid cyan"};
outline: none;
display: flex;
padding: 0.1em 0.1em;
justify-content: center;
align-items: center;
transition: all .2s;

&:hover {
  color: ${props => props.op ? "darkred" : "darkblue"};
  border: ${props => props.op ? "1px solid darkred" : "1px solid darkblue"};
  &:active {
    transform: scale(0.90);  
  }
  transform: scale(1.10);
}
`;

export default Button;