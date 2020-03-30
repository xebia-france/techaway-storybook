import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import useStyles from './styles';
import Grid from '@material-ui/core/Grid';

const CardArticle = ({ title, description, url, image }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleClick = () => {
    window.open(url);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={image}
          title={t('image_alt_article_card', { title })}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          {description && <Typography>{description}</Typography>}
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={handleClick}>
            {t('view_article')}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

CardArticle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CardArticle;
