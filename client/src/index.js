import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import {UserStore} from './store/UserStore';
import DeviceStore from './store/DeviceStore';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const Context = createContext(null)

root.render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore()
  }}>
    <App />
  </Context.Provider>
);
