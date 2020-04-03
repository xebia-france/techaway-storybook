import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import useStyles from './styles';

const AuthorUnit = ({ name, description, twitter, linkedin }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleClick = url => () => window.open(url);

  return (
    <Container maxWidth="sm">
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        {name}
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        {description}
      </Typography>
      <div className={classes.authorButtons}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClick(twitter)}
              size="small"
            >
              {t('see_twitter_profile')}
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClick(linkedin)}
              size="small"
            >
              {t('see_linkedin_profile')}
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

AuthorUnit.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};

export default AuthorUnit;
