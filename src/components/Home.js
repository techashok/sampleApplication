import React from 'react';
import '../App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

function Home() {
    return (
        <div>
            <AppNavbar />
            <Container fluid>
                <h2>Dashboard Page</h2>

                <Row>
                    <Col xs={2}>
                        <Stack>
                            <Button color="link"><Link to="/groups">Manage Groups</Link></Button>
                            <Button color="link"><Link to="/groups">Manage Groups2</Link></Button>
                            <Button color="link"><Link to="/groups">Manage Groups3</Link></Button>
                        </Stack>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>


            </Container>
        </div>
    );
}

export default Home;