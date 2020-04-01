import React from 'react';
import LoaderFullPage from 'components/LoaderFullPage';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'React-App/components/LoaderFullPage',
  component: LoaderFullPage,
  decorators: [withKnobs],
  parameters: {
    storyshots: { disable: true },
  },
};

export const WithKnobs = () => (
  <LoaderFullPage loading={boolean('loading', true)} />
);
