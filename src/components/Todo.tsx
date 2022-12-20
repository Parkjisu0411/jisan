import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { useState } from 'react';
import { Trash } from "react-bootstrap-icons";

type TodoProp = {
    date: Date
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
}

const todoStatus = Object.freeze({
    READY: Symbol('ready'),
    DONE: Symbol('done')
});

function Todo({date, setDate}:TodoProp) {

    const [todo, setTodo] = useState('');
    const [todoMap, setTodoMap] = useState<Map<Date, {name:string, status:symbol}[]>>(new Map([[date, []]]));

    const addTodo = (todo:string) => {
        const todoList = todoMap.get(date) || [];
        if(todo !== '' && todoList.find(o => o.name === todo) === undefined)
            todoList.push({name: todo, status: todoStatus.READY});
        todoMap.set(date, todoList);
        setTodoMap(new Map(todoMap));
    }

    const removeTodo = (name:string) => {
        const todoList = todoMap.get(date)?.filter(todo => todo.name !== name) || [];
        todoMap.set(date, todoList);
        setTodoMap(new Map(todoMap));
    }

    const setStatus = (name:string, status:symbol) => {
        const todoList = todoMap.get(date) || [];
        const todo = todoList.find(todo => todo.name === name);
        if(todo !== undefined) {
            todo.status = status;
            todoMap.set(date, todoList);
            setTodoMap(new Map(todoMap));
        }
    }

    const formatter = new Intl.DateTimeFormat('ko');

    return (
        <div>
            <InputGroup>
                <Form.Control value={todo} onChange={e => setTodo(e.target.value)}></Form.Control>
                <Button variant="primary" onClick={() => {addTodo(todo)}}>추가</Button>
            </InputGroup>
                <h3>{formatter.format(date)}</h3>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {(todoMap.get(date) || []).map(todo => 
                    <Card style={{ width: '100%', margin: '5px' }}>
                        <Card.Body>
                            <Card.Title style={ {textDecorationLine: todo.status === todoStatus.DONE ? 'line-through' : ''} }>
                                <Form.Check inline onChange={e => {setStatus(todo.name, e.target.checked ? todoStatus.DONE : todoStatus.READY)}}/>
                                {todo.name} 
                                <Button variant="secondary" style={{float: 'right'}} onClick={() => {removeTodo(todo.name)}}><Trash /></Button>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </div>
    );
}

export default Todo;