import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SelectTheme from 'components/SelectTheme';
import useStyles from './styles';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            component={Link}
            to="/"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {t('header_title')}
          </Typography>
          <div className={classes.search}>
            <SelectTheme />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
