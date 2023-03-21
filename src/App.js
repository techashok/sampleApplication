
import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GroupList from './components/GroupList'
import GroupEdit from './components/GroupEdit'
import Login from './components/login.component';
import SignUp from './components/signup.component'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/home" element={<Home />} />
                <Route path='/groups' exact={true} element={<GroupList />} />
                <Route path='/groups/:id' element={<GroupEdit />} />
            </Routes>
        </Router>
    );
}

export default App;
