import React, {useState} from "react";
import './App.css'
import {Display} from "./components/Display/Display";

function App() {
    const [result, setResult] = useState(0);

    const handleButtonPress = (e) => {
        setResult(result + e.currentTarget.name)
    }

    const clear = () => {
        setResult(0)
    }

    const handlePositiveToNegative = () => {
        setResult(-result)
    }


    return (
        <div className='calc'>
            <Display value={result}/>
            <div className='buttons'>
                <button name='AC' className='btn bg-grey' onClick={clear}>{result !== 0 ? 'C' : 'AC'}
                </button>
                <button name='+/-' className='btn bg-grey' onClick={handlePositiveToNegative}>+/-
                </button>
                <button name='%' className='btn bg-grey' onClick={handleButtonPress}>%
                </button>
                <button name='/' className='btn bg-orange' onClick={handleButtonPress}>/
                </button>
                <button name='7' className='btn' onClick={handleButtonPress}>7</button>
                <button name='8' className='btn' onClick={handleButtonPress}>8</button>
                <button name='9' className='btn' onClick={handleButtonPress}>9</button>
                <button name='x' className='btn bg-orange' onClick={handleButtonPress}>x
                </button>
                <button name='4' className='btn' onClick={handleButtonPress}>4</button>
                <button name='5' className='btn' onClick={handleButtonPress}>5</button>
                <button name='6' className='btn' onClick={handleButtonPress}>6</button>
                <button name='-' className='btn bg-orange' onClick={handleButtonPress}>-
                </button>
                <button name='1' className='btn' onClick={handleButtonPress}>1</button>
                <button name='2' className='btn' onClick={handleButtonPress}>2</button>
                <button name='3' className='btn' onClick={handleButtonPress}>3</button>
                <button name='+' className='btn bg-orange' onClick={handleButtonPress}>+
                </button>
                <button name='0' className='btn zero' onClick={handleButtonPress}>0</button>
                <button name=',' className='btn' onClick={handleButtonPress}>,</button>
                <button name='=' className='btn bg-orange' onClick={handleButtonPress}>=
                </button>
            </div>
        </div>
    );
}

export default App;
