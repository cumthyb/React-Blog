import React from 'react';
import ReactDOM from 'react-dom';
import RouteMap from './blog/router/routemap';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import "./blog/static/index.css"
import reducers from "./blog/redux/reducers/index"

import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducers);

ReactDOM.render(
    <Provider store={ store }>
      <RouteMap />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();