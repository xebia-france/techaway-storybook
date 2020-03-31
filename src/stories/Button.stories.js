import React from 'react';
import Button from '@material-ui/core/Button';
import Memory from '@material-ui/icons/Memory';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Material-UI/Button',
  component: Button,
  decorators: [withKnobs],
};

const COLORS = {
  DEFAULT: 'default',
  INHERIT: 'inherit',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const VARIANTS = {
  TEXT: 'text',
  OUTLINED: 'outlined',
  CONTAINED: 'contained',
};

export const Default = () => {
  const color = select('color', COLORS, COLORS.DEFAULT);
  const disabled = boolean('disabled', false);
  const disableElevation = boolean('disableElevation', false);
  const disableFocusRipple = boolean('disableFocusRipple', false);
  const disableRipple = boolean('disableRipple', false);
  const fullWidth = boolean('fullWidth', false);
  const size = select('size', SIZES, SIZES.MEDIUM);
  const variant = select('variant', VARIANTS, VARIANTS.CONTAINED);
  const withStartIcon = boolean('with startIcon', false);
  const withEndIcon = boolean('with endIcon', false);

  return (
    <Button
      color={color}
      disabled={disabled}
      disableElevation={disableElevation}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      fullWidth={fullWidth}
      size={size}
      variant={variant}
      startIcon={withStartIcon && <Memory />}
      endIcon={withEndIcon && <Memory />}
      onClick={action('button action click')}
    >
      {text('children text', 'Default')}
    </Button>
  );
};
