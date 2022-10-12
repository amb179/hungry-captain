import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
import App from './App';
// import configureStore from './reducks/store/store';
import createStore from './reducks/store/store';
import reportWebVitals from './reportWebVitals';
import * as History from 'history';
import React from 'react';


const history = History.createBrowserHistory();
export const store = createStore(history);


ReactDOM.render(
    <Provider store={store}>

            <App />

    </Provider>,
    document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
