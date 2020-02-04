import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './component/account/login/login'
import {createStore, applyMiddleware} from 'redux'
import reducer from './redux/reducers/reducer'
import Question from './component/Question/get-question'
import reduxThunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={createBrowserHistory}>
            <Switch>
                <Route exact path='/' component ={App} />
                <Route path='/login' component={Login} />
                <Route path='/get_question' component={Question} />
            </Switch>
        </BrowserRouter>
</Provider >, document.getElementById('root'));

serviceWorker.unregister();
