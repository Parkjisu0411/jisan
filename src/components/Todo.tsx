import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { useState } from 'react';

type TodoProp = {
    date: Date
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
}

function Todo({date, setDate}:TodoProp) {

    const [todo, setTodo] = useState('');
    const [todoMap, setTodoMap] = useState<Map<Date, string[]>>(new Map([[date, []]]));

    const addTodo = (todo:string) => {
        const todoList = todoMap.get(date) || [];
        if(todo !== '' && !todoList.includes(todo))
            todoList.push(todo);
        todoMap.set(date, todoList);
        setTodoMap(new Map(todoMap));
    }

    return (
        <div>
            <InputGroup>
                <Form.Control value={todo} onChange={e => setTodo(e.target.value)}></Form.Control>
                <Button variant="primary" onClick={() => {addTodo(todo)}}>추가</Button>
            </InputGroup>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {(todoMap.get(date) || []).map(todo => 
                    <Card style={{ width: '100%', margin: '5px' }}>
                        <Card.Body>
                            <Card.Title>{todo}</Card.Title>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </div>
    );
}

export default Todo;