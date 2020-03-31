import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import AuthorUnit from 'components/AuthorUnit';

export default {
  title: 'React-App/components/AuthorUnit',
  component: AuthorUnit,
  decorators: [withKnobs],
};

const props = {
  name: 'Publicis Sapient Engineering',
  description:
    'Depuis près de trente ans, nous agissons pour la transformation digitale des entreprises. Nous utilisons le pouvoir de la technologie et de la créativité pour soutenir les ambitions de nos clients. Nous imaginons avec, et pour eux, de nouvelles expériences et anticipons les business clés de demain.',
  twitter: 'https://twitter.com/PubSapientEng',
  linkedin: 'https://www.linkedin.com/company/publicis-sapient-engineering',
};

export const WithKnobs = () => (
  <AuthorUnit
    name={text('name', props.name)}
    description={text('description', props.description)}
    twitter={text('twitter', props.twitter)}
    linkedin={text('linkedin', props.linkedin)}
  />
);
