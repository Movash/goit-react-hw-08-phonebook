import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from 'components/Loader';
import { Toaster } from 'react-hot-toast';
// import Error from 'components/Error';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
          {/* <Error /> */}
          <Toaster />
          <Loader />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);