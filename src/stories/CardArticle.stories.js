import React from 'react';
import CardArticle from 'components/CardArticle';

export default {
  title: 'React-App/CardArticle',
  component: CardArticle,
};

export const Default = () => (
  <CardArticle
    url="https://www.publicissapient.fr/services/technology-engineering"
    image="http://placeimg.com/640/480/tech"
    title="Publicis Sapient Engineering"
  />
);
