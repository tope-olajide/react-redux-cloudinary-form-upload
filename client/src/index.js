import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { fetchAllUsers } from './actions/index';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const store = createStore(rootReducer,compose(
    applyMiddleware(thunk)
  ));

store.dispatch(fetchAllUsers());

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

