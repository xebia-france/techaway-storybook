import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withDesign } from 'storybook-addon-designs';
import AuthorUnit from 'components/AuthorUnit';

export default {
  title: 'React-App/components/AuthorUnit',
  component: AuthorUnit,
  decorators: [withKnobs, withDesign],
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/hGnZzjJ7Un7ClbRMywK7N8/TechAway-Storybook?node-id=2%3A3',
    },
  },
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
