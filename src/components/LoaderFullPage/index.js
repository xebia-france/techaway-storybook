import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles';

const LoaderFullPage = ({ loading }) => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={loading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

LoaderFullPage.propTypes = {
  loading: PropTypes.bool,
};

LoaderFullPage.defaultProps = {
  loading: false,
};

export default LoaderFullPage;
