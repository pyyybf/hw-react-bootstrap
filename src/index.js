import React from 'react';
import './index.css'
import ReactDOM from 'react-dom';
import Login from './pages/login';
import Home from './pages/home';
import Header from './component/header';
import Editor from './pages/editor';
import {BrowserRouter as Router, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Header/>
        <Router>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/editor" component={Editor}></Route>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
