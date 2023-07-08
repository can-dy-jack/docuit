import { createRoot } from 'react-dom/client';
import { App, initPageData } from './App';
import { StrictMode } from 'react';
// import siteData from 'docuit:site-data';
import { BrowserRouter } from 'react-router-dom';
import { DataContext } from './hooks';

async function renderInBrowser() {
  const containerEl = document.getElementById('docuit-app');
  if (!containerEl) {
    throw new Error('#docuit-app element not found');
  }

  const pageData = await initPageData(location.pathname);

  createRoot(containerEl).render(
    <StrictMode>
      <DataContext.Provider value={pageData}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DataContext.Provider>
    </StrictMode>
  );
}

renderInBrowser();
