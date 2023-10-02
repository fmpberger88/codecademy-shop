import reportWebVitals from './reportWebVitals';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';  // Importieren des Providers

import { App } from './App.js';
import store from "./app/store";  // Importieren des Stores

const root = createRoot(document.getElementById('root'));

const render = () => {
    root.render(
        <Provider store={store}>  {/* Hinzufügen des Providers */}
            <App />
        </Provider>
    );
};
render();

// Abonnieren des Renderns im Store
store.subscribe(render);

reportWebVitals();
