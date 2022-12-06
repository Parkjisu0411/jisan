import { Button, Form, InputGroup } from "react-bootstrap";

function Todo() {
    return (
        <div>
            <InputGroup>
                <Form.Control></Form.Control>
                <Button variant="primary">추가</Button>
            </InputGroup>
        </div>
    );
}

export default Todo;