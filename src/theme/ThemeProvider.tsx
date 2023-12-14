"use client"
import {FC,ReactNode, useEffect} from 'react'
import {ThemeProvider as MTThemeProvider} from '@mui/material/styles';
import getTheme from '.';
import { useDarkMode } from '@/hooks';
import { CssBaseline } from '@mui/material';
type ThemeProviderProps={
    children:ReactNode
}
export const ThemeProvider:FC<ThemeProviderProps> = ({ children }) => {
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentElement) {
          jssStyles.parentElement.removeChild(jssStyles);
        }
      }, []);
    const [themeMode, themeToggler, mountedComponent] = useDarkMode();
    return(
        <MTThemeProvider theme={getTheme(themeMode, themeToggler)}>
          <CssBaseline />
            {children}
        </MTThemeProvider>
    )
   
    }