import React from 'react';
import styled from 'styled-components';
import Button from './Button.js';
import './Keyboard.css';
// ^ this file is oboslete

const Row = styled.div`
    height: 10vh;
    width: 100%;
    display: flex;
    background-color: antiquewhite;
`

const KeyBoard = styled.div`
    height: 50vh;
    width: 100%;
`

//structure is very nice well done
function Keyboard() {
    return(
        <KeyBoard>
            <Row>
                <Button op> CE </Button>
                <Button op> C </Button>
                <Button op> / </Button>
                <Button op> * </Button>
            </Row>
            <Row>
                <Button> 7 </Button>
                <Button> 8 </Button>
                <Button> 9 </Button>
                <Button op> + </Button>
            </Row>
            <Row>
                <Button> 4 </Button>
                <Button> 5 </Button>
                <Button> 6 </Button>
                <Button op> - </Button>
            </Row>
            <Row>
                <Button> 1 </Button>
                <Button> 2 </Button>
                <Button> 3 </Button>
                <Button op> X </Button>
            </Row>
            <Row>
                <Button> 0 </Button>
                <Button op> . </Button>
                <Button large op> = </Button>
            </Row>
        </KeyBoard>      
    );
}

export default Keyboard;