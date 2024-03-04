import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "./translations/es/global.json";
import home_es from "./translations/es/home.json";
import studies_es from "./translations/es/studies.json";
import experience_es from "./translations/es/experience.json";
import apps_es from "./translations/es/apps.json";
import about_es from "./translations/es/about.json";

import global_en from "./translations/en/global.json";
import home_en from "./translations/en/home.json";
import studies_en from "./translations/en/studies.json";
import experience_en from "./translations/en/experience.json";
import apps_en from "./translations/en/apps.json";
import about_en from "./translations/en/about.json";

i18next.init({
    interpolation: { escapeValue: false },
    lng: localStorage.getItem('lang') ?? 'en',
    resources: {
        es: {
            global: global_es,
            home: home_es,
            studies: studies_es,
            experience: experience_es,
            apps: apps_es,
            about: about_es
        },
        en: {
            global: global_en,
            home: home_en,
            studies: studies_en,
            experience: experience_en,
            apps: apps_en,
            about: about_en
        }
    }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <I18nextProvider i18n={i18next}>
          <App />
      </I18nextProvider>
  </React.StrictMode>,
)
