import React, {useState} from "react";
import './App.css'
import {Display} from "./components/Display/Display";

function App() {
    const [result, setResult] = useState('');

    const handleClick = (e) => {
        setResult(result.concat(e.target.name))
    }

    const clear = () => {
        setResult('')
    }

    const backspase = () => {
        setResult(result.slice(0, -1))
    }

    const percenter = () => {
        setResult((result / 100).toString())
    }

    const calculate = () => {
        try {
            setResult(eval(result).toString())
        } catch (error) {
            setResult('Error')
        }
    }

    return (
        <div className='calc'>
            <Display value={result}/>
            <div className='buttons'>
                <button name='AC' className='btn bg-grey'
                        onClick={clear}>AC
                </button>
                <button name='C' className='btn bg-grey'
                        onClick={backspase}>C
                </button>
                <button name='%' className='btn bg-grey' onClick={percenter}>%
                </button>
                <button name='/' className='btn bg-orange' onClick={handleClick}>/
                </button>
                <button name='7' className='btn' onClick={handleClick}>7</button>
                <button name='8' className='btn' onClick={handleClick}>8</button>
                <button name='9' className='btn' onClick={handleClick}>9</button>
                <button name='*' className='btn bg-orange' onClick={handleClick}>x
                </button>
                <button name='4' className='btn' onClick={handleClick}>4</button>
                <button name='5' className='btn' onClick={handleClick}>5</button>
                <button name='6' className='btn' onClick={handleClick}>6</button>
                <button name='-' className='btn bg-orange' onClick={handleClick}>-
                </button>
                <button name='1' className='btn' onClick={handleClick}>1</button>
                <button name='2' className='btn' onClick={handleClick}>2</button>
                <button name='3' className='btn' onClick={handleClick}>3</button>
                <button name='+' className='btn bg-orange' onClick={handleClick}>+
                </button>
                <button name='0' className='btn zero' onClick={handleClick}>0</button>
                <button name='.' className='btn' onClick={handleClick}>.</button>
                <button name='=' className='btn bg-orange' onClick={calculate}>=
                </button>
            </div>
        </div>
    );
}

export default App;
