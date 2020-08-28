import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import MainView from './containers/MainView';
import HoldsInputView from './containers/HoldsInputView';
import InventoryView from './containers/InventoryView';
import SiteHeader from './components/navigation/SiteHeader';
import NavigationView from './containers/NavigationView';

const store = createStore(reducer);

const App = props => {
  return (
  <div>
    <Provider store={store}>
      <NavigationView />
      <SiteHeader />
        <Switch>
          <Route path='/' component={HoldsInputView} exact />
          <Route path='/main' component={MainView} exact />
          <Route path='/inventory' component={InventoryView} exact />
        </Switch>
    </Provider>
  </div>
  )
    }


export default App;