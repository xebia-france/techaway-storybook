import React from 'react';
import StoryRouter from 'storybook-react-router';
import Home from 'containers/Home';

export default {
  title: 'React-App/containers/Home',
  component: Home,
  decorators: [StoryRouter()],
  parameters: {
    storyshots: { disable: true },
  },
};

export const Default = () => <Home />;
