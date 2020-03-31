import { withI18next } from "storybook-addon-i18next";
import { addDecorator } from "@storybook/react";
import i18n from "i18n";
import { languages } from "./utils";

addDecorator(
  withI18next({
    i18n,
    languages,
  })
);
