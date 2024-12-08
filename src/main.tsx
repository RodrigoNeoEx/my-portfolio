import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { ThemeProvider } from "@material-tailwind/react";
import { ScreenProvider } from './context/ScreenContext.tsx';
import { ColorContextProvider } from './context/ColorContext.tsx';

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ScreenProvider>
        <ColorContextProvider>
          <App />
        </ColorContextProvider>
      </ScreenProvider>
    </ThemeProvider>
  </React.StrictMode>
);
