import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import styles from './app.module.scss';
import Header from "../Components/Header/header";
import Navigation from "../Components/Navigation/navigation";


function App () {
    return (
            <Router>
                <Switch>
                    <>
                        <Header/>
                        <Navigation/>
                    </>
                </Switch>
            </Router>
    )
}

export default App;