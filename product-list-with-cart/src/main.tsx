import './index.css';

import App from './App.tsx';
import StateProvider from './context/context.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <StateProvider>
    <App />
  </StateProvider>,
  // </StrictMode>,
);
