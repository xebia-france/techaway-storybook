import React from 'react';
import LoaderFullPage from 'components/LoaderFullPage';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'React-App/components/LoaderFullPage',
  component: LoaderFullPage,
  decorators: [withKnobs],
};

export const WithKnobs = () => (
  <LoaderFullPage loading={boolean('loading', true)} />
);
