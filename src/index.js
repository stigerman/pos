import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import App from "./components/App"
import rootReducer from "../reducers/rootReducer"

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

const rootElement = document.getElementById("root")
ReactDOM.render( <
    BrowserRouter >
    <
    Provider store = { store } >
    <
    App / >
    <
    /Provider> <
    /BrowserRouter>,
    rootElement
)