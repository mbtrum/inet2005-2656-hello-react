import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import App from './App.jsx'
import Dog from './Dog.jsx';
import Pokemon from './Pokemon.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />
    <Dog breed="Pug" name="Audrey" />*/}
    <Pokemon />
  </StrictMode>,
)
