import {legacy_createStore as createStore, applyMiddleware} from "redux";
import {rootReducer} from "./root-reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import {client, jsonplaceholder as PATH} from "../api";

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument({client, PATH})) //withExtraArgument принимает нашу апишку
    )
)