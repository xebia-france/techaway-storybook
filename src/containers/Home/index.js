import React, { useEffect, useState, Fragment } from 'react';
import { fetchAllAuthors } from 'api/api';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './styles';
import LoaderFullPage from '../../components/LoaderFullPage';

const Home = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchAllAuthors()
      .then(authors => {
        setAuthors(authors);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Fragment>
      {loading && <LoaderFullPage loading={loading} />}
      <div className={classes.listContainer}>
        {authors.length > 0 && (
          <List component="nav" className={classes.list}>
            {authors.map(author => (
              <ListItem
                button
                key={author.id}
                component={Link}
                to={`/author/${author.id}`}
              >
                <ListItemText primary={author.name} />
              </ListItem>
            ))}
          </List>
        )}
      </div>
    </Fragment>
  );
};
export default Home;
