import { withI18next } from "storybook-addon-i18next";
import { addDecorator } from "@storybook/react";
import i18n from "i18n";

const languagesNamesMap = { fr: "French", en: "English" };

const languages = require
  .context("../public/locales", true, /\.json$/)
  .keys()
  .map((filename) => filename.substr(2).replace(/\.[^/.]+$/, ""))
  .reduce((languages, key) => {
    languages[key] = languagesNamesMap[key] || key;
    return languages;
  }, {});

addDecorator(
  withI18next({
    i18n,
    languages,
  })
);
