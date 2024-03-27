import React from 'react'
import ReactDOM from 'react-dom/client'
import { appRouter } from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { RouterProvider } from 'react-router-dom'
import './styles/bootstrap.min.css';
import "../src/styles/app.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
    <RouterProvider router={appRouter} />
  </Provider>
  </React.StrictMode>,
)
