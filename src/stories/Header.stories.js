import React from 'react';
import StoryRouter from 'storybook-react-router';
import Header from 'components/Header';

export default {
  title: 'React-App/components/Header',
  component: Header,
  decorators: [StoryRouter()],
};

export const Default = () => <Header />;
