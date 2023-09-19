import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index.js'
import App from './App.jsx'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </BrowserRouter>
//   </React.StrictMode>,
// )


ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
)
