import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { linkTo } from '@storybook/addon-links';
import CardArticle from 'components/CardArticle';

export default {
  title: 'React-App/components/CardArticle',
  component: CardArticle,
  decorators: [withKnobs],
};

export const Default = () => (
  <>
    <CardArticle
      url="https://blog.engineering.publicissapient.fr/2019/09/23/xebia-devient-publicis-sapient-engineering"
      image="https://blog.engineering.publicissapient.fr/wp-content/uploads/2019/09/article-blog.jpg"
      title="Xebia devient Publicis Sapient Engineering"
      description="Il y a un peu moins d’un an, Xebia rejoignait le groupe Publicis afin de renforcer Publicis Sapient, sa branche technologique."
    />
    <button
      onClick={linkTo('React-App/containers/Author', 'Default With Param Id 0')}
    >
      Got to Author container to see CardArticle in a real context
    </button>
  </>
);

export const WithKnobs = () => (
  <CardArticle
    url={text('url', 'https://blog.engineering.publicissapient.fr')}
    image={text('image', 'http://placeimg.com/640/480/tech')}
    title={text('title', 'Bla bli blou')}
    description={text(
      'description',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere nunc ut nunc tempor, nec vehicula nisi dapibus. Sed tincidunt lectus id condimentum eleifend.',
    )}
  />
);
