import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  listContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.common.white,
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.primary.light,
    margin: theme.spacing(2),
  },
}));

export default useStyles;
