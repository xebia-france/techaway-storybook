import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AuthorUnit from 'components/AuthorUnit';
import CardArticle from 'components/CardArticle';
import { fetchDataByAuthorId } from 'api/api';
import useStyles from './styles';

const Author = () => {
  const classes = useStyles();
  const { authorId } = useParams();
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentAuthor, setAuthor] = useState(null);
  const [currentArticles, setArticles] = useState(null);

  useEffect(() => {
    fetchDataByAuthorId(parseInt(authorId, 10))
      .then(({ author, articles }) => {
        setAuthor(author);
        setArticles(articles);
      })
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
  }, [authorId]);

  return (
    <main>
      {loading && (
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      {error && (
        <div className={classes.error}>
          <Paper>
            <Typography variant="h5" align="center" color="error">
              {t(error.message)}
            </Typography>
          </Paper>
        </div>
      )}
      {currentAuthor && (
        <div className={classes.authorContent}>
          <AuthorUnit {...currentAuthor} />
        </div>
      )}

      {currentArticles && (
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {currentArticles.map(card => (
              <CardArticle
                key={card.title}
                title={card.title}
                url={card.url}
                image={card.image}
              />
            ))}
          </Grid>
        </Container>
      )}
    </main>
  );
};

export default Author;
