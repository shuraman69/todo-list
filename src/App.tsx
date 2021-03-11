import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {TodoPage} from "./components/TodoPage/TodoPage";
import {InfoPage} from "./components/InfoPage/InfoPage";


const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className='container'>
                <Switch>
                    <Route path='/' exact component={TodoPage}/>
                    <Route path='/info' component={InfoPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
