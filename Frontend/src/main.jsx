import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

/**
 * Точка входа в React-приложение.
 *
 * Этот код:
 * 1. Находит корневой DOM-элемент с id="root"
 * 2. Создает корневой React-элемент
 * 3. Рендерит приложение в режиме StrictMode
 *
 * StrictMode помогает выявлять потенциальные проблемы в приложении,
 * включая устаревшие API и неожиданные побочные эффекты.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);