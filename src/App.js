import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import MainView from './containers/MainView';
import HoldsInputView from './containers/HoldsInputView';
import Hamburger from './components/navigation/Hamburger';
import Menu from './components/navigation/Menu';

const store = createStore(reducer);

const App = props => (
  <div>
    <Provider store={store}>
      <Hamburger />
      <Menu />
      <Switch>
        <Route path='/' component={HoldsInputView} exact />
        <Route path='/main' component={MainView} exact />
      </Switch>
    </Provider>
  </div>
)

export default App;