import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Publicis Sapient Engineering
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Engineering done right!
      </Typography>
    </footer>
  );
};

export default Footer;
