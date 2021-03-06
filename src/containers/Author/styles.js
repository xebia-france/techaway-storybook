import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  authorContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  error: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
    },
  },
}));

export default useStyles;
