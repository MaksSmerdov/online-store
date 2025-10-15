import { createContext, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import UserStore from './store/UserStore.js';
import DeviceStore from './store/DeviceStore.js';

export const Context = createContext(null);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      devices: new DeviceStore(),
    }}>
      <App/>
    </Context.Provider>
  </StrictMode>,
);
