import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useCustomThemeContext } from 'contexts/CustomThemeContext';
import useStyles from './styles';
import { useTranslation } from 'react-i18next';

const SelectTheme = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { currentTheme, onSelectTheme, themes } = useCustomThemeContext();

  const handleChange = event => onSelectTheme(event.target.value);

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="toggle-theme-select-label">{t('theme')}</InputLabel>
      <Select
        labelId="toggle-theme-select-label"
        id="toggle-theme-select"
        value={currentTheme.name}
        onChange={handleChange}
        className={classes.select}
        displayEmpty
      >
        <MenuItem value={null}>
          <em>{t('no_theme')}</em>
        </MenuItem>
        {Object.keys(themes).map(theme => (
          <MenuItem key={theme} value={theme}>
            {theme}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectTheme;
