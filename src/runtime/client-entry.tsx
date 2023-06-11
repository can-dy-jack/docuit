import { createRoot } from 'react-dom/client';
import { App } from './App';
import { StrictMode } from 'react';

function renderInBrowser() {
  const containerEl = document.getElementById('docuit-app');
  if (!containerEl) {
    throw new Error('#docuit-app element not found');
  }
  createRoot(containerEl).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

renderInBrowser();
