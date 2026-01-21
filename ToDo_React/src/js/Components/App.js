import {useState} from 'react';

import H1 from '../Components/headers/H1';

export default function App () {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState("");



    return (
        <>
            <H1 headerText={"ToDo"} />
            <input class="input" type="text" placeholder="Новая задача..."/>
            <button class="button">Добавить</button>
            <div class="task">
                <input type="checkbox" class="checkbox"/> <p class="p">Задача 1</p>
                <div class="symbol">
                    &#215;
                </div>
            </div>
            <div class="task">
                <input type="checkbox" class="checkbox"/> <p class="p">Задача 2</p>
                <div class="symbol">
                 &#215;
                </div>
            </div>
    </>
    );
}