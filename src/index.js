import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from "react-router-dom" 
import {Provider} from "react-redux"
import store from "./redux/store"
import style from "./index.css"

ReactDOM.render(
  <Provider className={style.container} store={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
