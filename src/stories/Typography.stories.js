import React from 'react';
import Typography from '@material-ui/core/Typography';

export default {
  title: 'Material-UI/Typography', // Story Hierarchy
  component: Typography,
};

export const Default = () => <Typography>Hello Typo!</Typography>;

export const WithComponentH1 = () => (
  <Typography component="h1" variant="h1" gutterBottom>
    h1. Heading
  </Typography>
);

export const WithComponentH2 = () => (
  <Typography component="h2">h2. Heading</Typography>
);

export const TextWithAlignRight = () => (
  <Typography align="right">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta augue
    urna. Donec euismod aliquet neque non varius. In in tincidunt risus. Sed
    ultrices est nec sapien pharetra, sed euismod augue hendrerit. Nullam vel
    blandit lorem. Ut vulputate imperdiet turpis venenatis volutpat. Maecenas
    massa augue, porta sit amet mattis vitae, congue nec mauris.
  </Typography>
);
