import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import thunk from "redux-thunk";

import { Provider } from "react-redux";
import reducers from "./redux/reducers/index";
import { createStore, applyMiddleware } from "redux";

ReactDOM.render(
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <App />
    </Provider>,
    document.querySelector("#root")
);
