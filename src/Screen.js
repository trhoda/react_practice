import React from 'react';
import styled from 'styled-components';
import './Screen.css'

const ScreenDiv = styled.div`
    height: 10vh;
    width: 79%;
    font-size: 3rem;
    padding: 0 2rem;
    overflow: hidden;
    white-space: no-wrap;
    color: black;
    background-color:white;
    border: 2px solid cyan;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`

//this is 100% correct with how you are passing down the expression from the calculator to the screen
function Screen(props) {
    return(
        <ScreenDiv>
          {props.expr}
        </ScreenDiv>
    );   
}
  
export default Screen;