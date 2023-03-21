import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function Login() {

    const initialFormState = {
        name: '',
        pass: ''
    };
    const [loginUser, setLoginUser] = useState(initialFormState);

    const navigate = useNavigate();

    const handleChange = (event) => {

        const { name, value } = event.target
        console.log(event.target);
        setLoginUser({ ...loginUser, [name]: value })
    }

    function loginHandler() {
        console.log("handling submit..." + JSON.stringify(loginUser))

        fetch("http://localhost:8080/userservice/v1/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginUser)

        }).then(response => {
            if (response.ok) {
                console.log(response.status);
                window.location.href = `//${window.location.hostname}:3000/home`;
            }

        })
            
    }

    return (
        <div>
            
            <h2>Login</h2>
            <Container>
                <Form onSubmit={loginHandler}>
                    <FormGroup className="col-md-4 mb-3">
                        <Label for="name">User Name</Label>
                        <Input type="text" name="name" value={loginUser.name || ''}
                            onChange={handleChange}
                            autoComplete="name" />
                    </FormGroup>
                    <FormGroup className="col-md-4 mb-3">
                        <Label for="email">Password</Label>
                        <Input type="password" name="pass" value={loginUser.pass || ''}
                            onChange={handleChange}
                            autoComplete="pass" />
                    </FormGroup>
               
                <FormGroup>
                    <Button color="primary" type="submit">Login</Button>{' '}
                    <Button color="success" tag={Link} to="/signup">Signup</Button>
                </FormGroup>
                
                    </Form>
                </Container>
            
        </div>
        );
}

export default Login;