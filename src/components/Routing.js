import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from './Products';
import Login from './Login';
import CheckCredits from './CheckCredits';
import StartSend from './StartSend';

const Routing = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/products" component={Products} />
            <Route path="/check-credits" component={CheckCredits} />
            <Route path="/start-send" component={StartSend} />
        </Switch>
    </main>
);

export default Routing;
