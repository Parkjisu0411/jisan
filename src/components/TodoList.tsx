import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { useRef, useState } from 'react';
import { Trash } from "react-bootstrap-icons";
import { ReactSortable } from "react-sortablejs";

type TodoProp = {
    todos: {id:number, name:string, status:symbol} []
}

const todoStatus = Object.freeze({
    READY: Symbol('ready'),
    DONE: Symbol('done')
});

function TodoList({todos}:TodoProp) {

    const [todoList, setTodoList] = useState([...todos, {id:1, name: 't1', status: todoStatus.READY}, {id:2, name: 't2', status: todoStatus.DONE}, {id:3, name: 't3', status: todoStatus.READY}]);

    return (
        <ReactSortable list={todoList} setList={setTodoList}>
            <Card>
                <Card.Body>
                    <ReactSortable list={todoList} setList={setTodoList}>
                        {todoList.map(todo => 
                            <Card key={todo.id} style={{ width: '100%', margin: '5px' }}>
                                <Card.Body>
                                    <Card.Title style={ {textDecorationLine: todo.status === todoStatus.DONE ? 'line-through' : ''} }>
                                        <Form.Check inline onChange={(e) => {}}/>
                                        {todo.name} 
                                        <Button variant="secondary" style={{float: 'right'}} onClick={() => {}}><Trash /></Button>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        )}
                    </ReactSortable>
                </Card.Body>
            </Card>
        </ReactSortable>
    );
}

export default TodoList;