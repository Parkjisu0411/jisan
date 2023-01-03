import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { useRef, useState } from 'react';
import { Trash } from "react-bootstrap-icons";
import { ReactSortable } from "react-sortablejs";
import TodoList from "./TodoList";

type TodoProp = {
    date: Date
    // todoList?: {group: string, list: {id:number, name:string, status:symbol} []},
    // setTodoList: React.Dispatch<React.SetStateAction<{group: string, list: {id:number, name:string, status:symbol} []} | undefined>>
}

function Todo({date}:TodoProp) {

    const [group, setGroup] = useState<string>('');
    const [todoList, setTodoList] = useState<{[key:string]: {id:number, name:string, status:symbol} []}>();

    const addGroup = (name:string) => {

        if(name === '') {
            return;
        }

        if(todoList === undefined) {
            setTodoList({[name]: []});
            setGroup('');
            return;
        }

        if(todoList[name] === undefined) {
            todoList[name] = [];
            setTodoList(todoList);
            setGroup('');
            return;
        }
    }

    const removeGroup = (name:string) => {
        if(todoList && todoList[name]) {
            delete todoList[name];
            setTodoList(todoList);
        }
    }

    const keyDownEvent = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.code === 'Enter') {
            addGroup(group);
        }
    }

    const formatter = new Intl.DateTimeFormat('ko');

    return (
        <div>
            <InputGroup>
                <Form.Control value={group} onChange={e => setGroup(e.target.value)} onKeyDown={keyDownEvent}></Form.Control>
                <Button variant="primary" onClick={() => {addGroup(group)}}>추가</Button>
            </InputGroup>
            <h3>{formatter.format(date)}</h3>
            <div style={{display: 'flex', width: '1200px'}}>
                {todoList !== undefined && Object.keys(todoList).map(group => 
                    <ReactSortable key={group} group={{name: 'shared'}} list={todoList[group]} setList={() => {}}>
                        <Card style={{width: '18rem', height: '40rem', margin: '5px' }}>
                            <Card.Header>
                                {group}
                                <Button variant="secondary" style={{float: 'right'}} onClick={() => {removeGroup(group)}}><Trash /></Button>
                            </Card.Header>
                            <Card.Body>
                                <TodoList todos={todoList[group]}></TodoList>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary" onClick={() => {}}>추가</Button>
                            </Card.Footer>
                        </Card>
                    </ReactSortable>
                )}
            </div>
        </div>
    );
}

export default Todo;