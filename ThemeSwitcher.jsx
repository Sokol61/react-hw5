import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './actions/themeActions';
import { Button, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.isDarkTheme);

  const theme = createTheme({
    palette: {
      mode: isDarkTheme ? 'dark' : 'light'
    }
  });

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Button variant="contained" onClick={handleToggleTheme}>
          Переключить тему
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default ThemeSwitcher;
