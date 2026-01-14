import Header from "./Header";
import {List} from './MainPage';

function ToDoList () {
    const tasks = [
        { title: 'Встать в 5 утра', isFruit: false, id: 1 },
        { title: 'Заглянут ьв план задач', isFruit: false, id: 2 },
        { title: 'Выучить JavaScript', isFruit: true, id: 3 },
    ];

    return (<div className="todo">
        <Header headerTagName="h1" headerText="Список задач"/>
        <List items={tasks} />
    </div>
    );
}

export default ToDoList;

