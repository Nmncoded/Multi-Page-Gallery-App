import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter as Router } from 'react-router-dom'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux';
import App from './components/App';
import store from './store/Reducer';
import './stylesheets/style.css'

createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
      <ChakraProvider>
        <Provider store={store} >
          <Router>
            <App />
          </Router>
        </Provider>
      </ChakraProvider>
  // </React.StrictMode>
)
