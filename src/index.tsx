import 'normalize.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Resume } from './Resume';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Resume />
  </StrictMode>
);
