import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {useTheme} from '@rneui/themed';

type AppNavigationProps = {
  children: React.ReactNode;
};

const AppNavigation = (props: AppNavigationProps) => {
  const {children} = props;
  const {theme} = useTheme();

  const navigationTheme = {
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      primary: theme.colors.primary,
      background: theme.colors.background,
      card: theme.colors.white,
      text: theme.colors.black,
      border: theme.colors.divider,
    },
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      {children}
    </NavigationContainer>
  );
};

export default AppNavigation;
