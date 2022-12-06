import { Container, Nav, Navbar } from "react-bootstrap";


function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">JISAN BOARD</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;