import React from 'react';
import Button from './Button.js';
import './Keyboard.css';

function Keyboard() {
    return(
        <div className="Keyboard">
            <div className="Row">
                <Button op> CE </Button>
                <Button op> C </Button>
                <Button op> / </Button>
                <Button op> * </Button>
            </div>
            <div className="Row">
                <Button> 7 </Button>
                <Button> 8 </Button>
                <Button> 9 </Button>
                <Button op> + </Button>
            </div>
            <div className="Row">
                <Button> 4 </Button>
                <Button> 5 </Button>
                <Button> 6 </Button>
                <Button op> - </Button>
            </div>
            <div className="Row">
                <Button> 1 </Button>
                <Button> 2 </Button>
                <Button> 3 </Button>
                <Button op> X </Button>
            </div>
            <div className="Row">
                <Button> 0 </Button>
                <Button op> . </Button>
                <Button large op> = </Button>
            </div>
        </div>      
    );
}

export default Keyboard;