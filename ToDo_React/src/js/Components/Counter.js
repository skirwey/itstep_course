import { useState } from 'react';
import Button from './Button';

export default function Counter() {
    const [counter, setCounter] = useState(0);

    const decrement = function() {
        if(counter > 0) {
            setCounter(counter - 1);
        }
    }

    const increment = function() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <Button label="-" handleClick={decrement} />
            <input type="text" value = {counter} readOnly={true} />
            <Button label="+" handleClick={increment} />
        </div>
    )
}