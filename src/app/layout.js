'use client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import theme from '../theme/theme';
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>MaxMetall - Изделия из нержавеющей стали в Бишкеке</title>
        <meta name="description" content="MaxMetall - 15 лет на рынке. Изделия из нержавеющей стали премиум класса: перила, ограждения, лестницы в бассейн, флагштоки и многое другое." />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
