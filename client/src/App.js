import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import MainView from './containers/MainView';
import HoldsInputView from './containers/HoldsInputView';
import InventoryView from './containers/InventoryView';
// import SiteHeader from './components/navigation/SiteHeader';
import NavigationView from './containers/NavigationView';
import LandingPageView from './containers/LandingPageView';
import { GlobalStyles } from './global.styled';
import LandingBackground from './components/landingPage/LandingBackground';

const store = createStore(reducer);

const App = props => {
  return (
  <>
    <GlobalStyles />
    <Provider store={store}>
      <NavigationView />
      {/* <SiteHeader /> */}
        <Switch>
          <Route path='/' component={LandingPageView} exact />
          <Route path='/add' component={HoldsInputView} exact />
          <Route path='/main' component={MainView} exact />
          <Route path='/inventory' component={InventoryView} exact />
        </Switch>
    </Provider>
  </>
  )
    }


export default App;