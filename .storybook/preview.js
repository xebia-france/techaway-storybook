import React, { Suspense } from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { withMuiTheme } from "@harelpls/storybook-addon-materialui";
import { withI18next } from "storybook-addon-i18next";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { withA11y } from "@storybook/addon-a11y";
import themes from "themes";
import i18n from "./i18n";
import { languages } from "./utils";

addDecorator(
  withI18next({
    i18n,
    languages,
  })
);

addDecorator((story, context) => {
  try {
    return (
      <Suspense fallback={<span>Loading translation for storybook</span>}>
        {story(context)}
      </Suspense>
    );
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

addDecorator(withA11y);

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showRoots: true,
  },
});
