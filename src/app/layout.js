'use client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import theme from '../theme/theme';
import {
    generateMainPageMeta,
    generateMainPageJsonLd,
    generateBreadcrumbJsonLd,
    generateWebSiteJsonLd
} from '@/utils/seo';
import "./globals.css";

export default function RootLayout({ children }) {
    const meta = generateMainPageMeta();
    const orgJsonLd = generateMainPageJsonLd();
    const breadcrumbJsonLd = generateBreadcrumbJsonLd();
    const websiteJsonLd = generateWebSiteJsonLd();

    return (
        <html lang="ru">
        <head>
            {/* Основные мета-теги */}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Главные SEO-теги */}
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />
            <meta name="author" content="MaxMetall" />
            <link rel="canonical" href={meta.canonical} />

            {/* Теги для поисковых роботов */}
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

            {/* Open Graph / Facebook / Telegram */}
            <meta property="og:type" content={meta.openGraph.type} />
            <meta property="og:url" content={meta.openGraph.url} />
            <meta property="og:title" content={meta.openGraph.title} />
            <meta property="og:description" content={meta.openGraph.description} />
            <meta property="og:image" content={meta.openGraph.images[0].url} />
            <meta property="og:image:width" content={String(meta.openGraph.images[0].width)} />
            <meta property="og:image:height" content={String(meta.openGraph.images[0].height)} />
            <meta property="og:image:alt" content={meta.openGraph.images[0].alt} />
            <meta property="og:site_name" content={meta.openGraph.siteName} />
            <meta property="og:locale" content={meta.openGraph.locale} />

            {/* Twitter Card */}
            <meta name="twitter:card" content={meta.twitter.card} />
            <meta name="twitter:title" content={meta.twitter.title} />
            <meta name="twitter:description" content={meta.twitter.description} />
            <meta name="twitter:image" content={meta.twitter.images[0]} />

            {/* Favicon и иконки для устройств */}
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="manifest" href="/site.webmanifest" />

            {/* Тема для браузера */}
            <meta name="theme-color" content="#d32f2f" />

            {/* Языковые версии (для одностраничника это правильный вариант) */}
            <link rel="alternate" href="https://maxmetall.kg/" hrefLang="ru" />
            <link rel="alternate" href="https://maxmetall.kg/" hrefLang="x-default" />

            {/* Preconnect для повышения производительности */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            {/* Structured Data (JSON-LD) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
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