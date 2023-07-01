import { createRoot } from 'react-dom/client';
import { App } from './App';
import { StrictMode } from 'react';
// import siteData from 'docuit:site-data';
import { BrowserRouter } from 'react-router-dom';

function renderInBrowser() {
  const containerEl = document.getElementById('docuit-app');
  if (!containerEl) {
    throw new Error('#docuit-app element not found');
  }
  createRoot(containerEl).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}

renderInBrowser();
