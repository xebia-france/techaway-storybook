import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Material-UI/Typography',
  component: Typography,
  decorators: [withKnobs],
};

const ALIGNMENTS = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
  JUSTIFY: 'justify',
  INHERIT: 'inherit',
};

const COLORS = {
  INITIAL: 'initial',
  INHERIT: 'inherit',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TEXT_PRIMARY: 'textPrimary',
  TEXT_SECONDARY: 'textSecondary',
  ERROR: 'error',
};

const DISPLAYS = {
  INITIAL: 'initial',
  BLOCK: 'block',
  INLINE: 'inline',
};

const VARIANTS = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  SUBTITLE_1: 'subtitle1',
  SUBTITLE_2: 'subtitle2',
  BODY_1: 'body1',
  BODY_2: 'body2',
  CAPTION: 'caption',
  BUTTON: 'button',
  OVERLINE: 'overline',
  SR_ONLY: 'srOnly',
  INHERIT: 'inherit',
};

export const Default = () => {
  const align = select('align', ALIGNMENTS, ALIGNMENTS.INHERIT);
  const color = select('color', COLORS, COLORS.INITIAL);
  const display = select('display', DISPLAYS, DISPLAYS.INITIAL);
  const gutterBottom = boolean('gutterBottom', false);
  const noWrap = boolean('noWrap', false);
  const paragraph = boolean('paragraph', false);
  const variant = select('variant', VARIANTS, VARIANTS.BODY_1);
  return (
    <Fragment>
      <Typography
        align={align}
        color={color}
        display={display}
        gutterBottom={gutterBottom}
        noWrap={noWrap}
        paragraph={paragraph}
        variant={variant}
      >
        {text('children text', 'Your custom component')}
      </Typography>
      <Typography>
        A text under you custom component in order to see in action.
      </Typography>
    </Fragment>
  );
};
