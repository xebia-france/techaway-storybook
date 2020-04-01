import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        header_title: "React App with Material-UI",
        see_twitter_profile: "See its twitter profil",
        see_linkedin_profile: "See its linkedin profil",
        view_article: "Read",
        image_alt_article_card: 'Illustration of "{{title}}"',
        theme: "Theme",
        no_theme: "No theme",
        no_author: "Oops the author doesn't exist!",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
