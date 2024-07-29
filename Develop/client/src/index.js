import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import ApolloProvider from './utils/ApolloProvider';

const container = document.getElementById('root'); // Get the root element
const root = createRoot(container); // Create a root

root.render(
  <React.StrictMode>
    <ApolloProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<SearchBooks />} />
            <Route path="saved" element={<SavedBooks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
