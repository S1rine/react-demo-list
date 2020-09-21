import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store'
// import App from './container/App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// store.subscribe(() => {
//   ReactDOM.render(
//     <App store={store} />,
//     document.getElementById('root')
//   )
// })