import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalThemeContextProvider } from "./shared/theme/GlobalThemeContext.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <GlobalThemeContextProvider>
          <App />
      </GlobalThemeContextProvider>
  </React.StrictMode>,
)
