import ReactDom from "react-dom";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";

import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./store";

const store = createStore(rootReducer, composeWithDevTools());

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
