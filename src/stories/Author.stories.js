import React from 'react';
import { Route, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Author from 'containers/Author';

export default {
  title: 'React-App/containers/Author',
  component: Author,
  parameters: {
    storyshots: { disable: true },
  },
};

const renderWithRouter = (Component, paramId) => (
  <Router
    history={createMemoryHistory({ initialEntries: [`/author/${paramId}`] })}
  >
    <Route path="/author/:id" component={Component} />
  </Router>
);

export const DefaultWithParamId0 = () => renderWithRouter(Author, '0');

export const DefaultWithParamId1 = () => renderWithRouter(Author, '1');

export const WidthWrongParamId = () => renderWithRouter(Author, 'unknown-id');
