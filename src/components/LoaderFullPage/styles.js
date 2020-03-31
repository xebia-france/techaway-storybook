import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.primary.contrastText,
  },
}));

export default useStyles;
