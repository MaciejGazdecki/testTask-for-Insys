import React from 'react';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import styles from './app.module.scss';
import Header from "../Components/Header/header";
import Navigation from "../Components/Navigation/navigation";
import Profile from "../Components/Profile/profile";
import Gallery from "../Components/Gallery/gallery";
import NotFound from "../Components/NotFound/notFound";
import Welcome from "../Components/Welcome/welcome";

function App () {
    return (
            <Router>
                <Header/>
                <Navigation/>
                <Switch>
                    <Route path="/" exact component={Welcome}/>
                    <Route path="/profile" exact component={Profile}/>
                    <Route path="/gallery" exact component={Gallery}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
    )
}

export default App;