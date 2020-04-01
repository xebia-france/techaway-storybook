import React, { Suspense } from "react";
import { withMuiTheme } from "@harelpls/storybook-addon-materialui";
import { withI18next } from "storybook-addon-i18next";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { addDecorator, addParameters } from "@storybook/react";
import themes from "themes";
import i18n from "i18n";
import { languages } from "./utils";

addDecorator(
  withI18next({
    i18n,
    languages,
  })
);

addDecorator((story, context) => {
  try {
    return <Suspense fallback={<span>...</span>}>{story(context)}</Suspense>;
  } catch (error) {
    return <span>{JSON.stringify(error)}</span>;
  }
});

addDecorator(
  withMuiTheme({
    Brownwave: themes.Brownwave,
    Cralga: themes.Cralga,
    None: null,
  })
);

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
