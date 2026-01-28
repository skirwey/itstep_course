import {useState} from 'react';
import Timer from './Timer';
import Counter from './Counter';
import TextInput from './TextInput';

import H1 from '../Components/headers/H1';

export default function App () {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState("");



    return (
        <>
            <Counter />
            <Timer />
            <TextInput value={10} onChange={(event) => console.log(event.target.value)}/>
        </>
    );
}