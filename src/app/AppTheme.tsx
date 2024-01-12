import React from 'react';
import {ThemeProvider, createTheme} from '@rneui/themed';

const theme = createTheme({
  lightColors: {
    primary: '#31394c',
    secondary: '#077bfb',
    white: '#ffffff',
    black: '#121618',
    success: '#029c58',
    warning: '#e1c902',
    error: '#ef1201',
    background: '#ffffff',
  },
  components: {
    Card: (props, _theme) => ({
      containerStyle: {
        width: '100%',
        borderRadius: 8,
        shadowColor: _theme.colors.black,
        shadowOpacity: 0.4,
        shadowRadius: 1,
        shadowOffset: {
          height: 2,
          width: 0,
        },
        ...props,
      },
    }),
    CardTitle: (props, _theme) => ({
      style: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      ...props,
    }),
    CardDivider: (props, _theme) => ({
      color: _theme.colors.divider,
      ...props,
    }),
    Button: (props, _theme) => ({
      containerStyle: {
        borderRadius: 4,
      },
      titleStyle: {
        fontSize: 16,
      },
      style: {
        marginTop: 8,
      },
      ...props,
    }),
    Input: (props, _theme) => ({
      inputContainerStyle: {
        borderWidth: 1,
        borderColor: _theme.colors.divider,
        paddingHorizontal: 8,
        borderRadius: 4,
      },
      inputStyle: {
        fontSize: 14,
      },
      errorStyle: {
        fontSize: 14,
      },
      ...props,
    }),
    Text: (props, _theme) => ({
      style: {
        fontSize: 14,
      },
      ...props,
    }),
  },
  mode: 'light',
});

type AppThemeProps = {
  children: React.ReactNode;
};

const AppTheme = (props: AppThemeProps) => {
  const {children} = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppTheme;
