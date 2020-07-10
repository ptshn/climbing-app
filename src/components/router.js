import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ContentPage from '../content/ContentPage';

const Router = () => (
    <Switch>
        <Redirect from='/' to='/content' />
        <Route path='/content' component={ContentPage} />
    </Switch>
);

export default Router;
