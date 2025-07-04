'use client';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter';
import theme from '../theme/theme';
import { 
  generateMainPageMeta, 
  generateMainPageJsonLd, 
  generateFAQJsonLd, 
  generateBreadcrumbJsonLd, 
  generateWebSiteJsonLd 
} from '../utils/seo';
import { generateLocalBusinessSchema } from '../utils/localSEO';
import "./globals.css";

export default function RootLayout({children}) {
    const meta = generateMainPageMeta();
    const orgJsonLd = generateMainPageJsonLd();
    const faqJsonLd = generateFAQJsonLd();
    const breadcrumbJsonLd = generateBreadcrumbJsonLd();
    const websiteJsonLd = generateWebSiteJsonLd();
    const localBusinessJsonLd = generateLocalBusinessSchema();

    return (
        <html lang="ru">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <link rel="canonical" href="https://maxmetall.kg/" />
            {/* Primary Meta Tags */}
            <title>{meta.title}</title>
            <meta name="title" content={meta.title} />
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />
            <meta name="author" content="MaxMetall" />
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            
            {/* Canonical URL */}
            <link rel="canonical" href={meta.canonical} />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content={meta.openGraph.type} />
            <meta property="og:url" content={meta.openGraph.url} />
            <meta property="og:title" content={meta.openGraph.title} />
            <meta property="og:description" content={meta.openGraph.description} />
            <meta property="og:image" content={meta.openGraph.images[0].url} />
            <meta property="og:image:width" content={meta.openGraph.images[0].width} />
            <meta name="telegram:title" content="MaxMetall | Перила, лестницы из нержавейки в Бишкеке" />
            <meta name="telegram:description" content="Изделия из нержавеющей стали премиум класса. Индивидуальный дизайн." />
            <meta property="og:image:height" content={meta.openGraph.images[0].height} />
            <meta property="og:image:alt" content={meta.openGraph.images[0].alt} />
            <meta property="og:site_name" content={meta.openGraph.siteName} />
            <meta property="og:locale" content={meta.openGraph.locale} />
            
            {/* Twitter */}
            <meta property="twitter:card" content={meta.twitter.card} />
            <meta property="twitter:url" content={meta.openGraph.url} />
            <meta property="twitter:title" content={meta.twitter.title} />
            <meta property="twitter:description" content={meta.twitter.description} />
            <meta property="twitter:image" content={meta.twitter.images[0]} />
            
            {/* Дополнительные мета-теги для SEO */}
            <meta name="geo.region" content="KG-C" />
            <meta name="geo.placename" content="Бишкек" />
            <meta name="geo.position" content="42.8746;74.5698" />
            <meta name="ICBM" content="42.8746, 74.5698" />
            <meta name="distribution" content="global" />
            <meta name="rating" content="general" />
            <meta name="revisit-after" content="1 days" />
            <meta name="expires" content="never" />
            <meta name="language" content="Russian" />
            <meta name="coverage" content="Worldwide" />
            <meta name="target" content="all" />
            <meta name="audience" content="all" />
            <meta name="resource-type" content="document" />
            <meta name="classification" content="business" />
            <meta name="category" content="Metalworking, Stainless Steel Products" />
            <meta name="subject" content="Изделия из нержавеющей стали в Бишкеке" />
            <meta name="summary" content="MaxMetall - производство изделий из нержавеющей стали в Бишкеке" />
            <meta name="topic" content="Нержавеющая сталь, металлообработка, Бишкек" />
            <meta name="abstract" content="Производство и изготовление изделий из нержавеющей стали в Бишкеке, Кыргызстане" />
            <meta name="owner" content="MaxMetall" />
            <meta name="url" content="https://maxmetall.kg" />
            <meta name="identifier-URL" content="https://maxmetall.kg" />
            <meta name="directory" content="submission" />
            <meta name="pagename" content="MaxMetall - Изделия из нержавеющей стали" />
            <meta name="reply-to" content="info@maxmetall.kg" />
            <meta name="designer" content="MaxMetall" />
            <meta name="copyright" content="MaxMetall" />
            <meta name="doc-type" content="Web Page" />
            <meta name="doc-classification" content="business" />
            <meta name="doc-rights" content="Copywritten Work" />
            <meta name="doc-class" content="Living Document" />
            <meta name="generator" content="Next.js" />
            <meta name="template" content="MaxMetall Corporate Website" />
            
            {/* Дополнительные Open Graph теги */}
            <meta property="og:street-address" content="ул. Чуйкова 168" />
            <meta property="og:locality" content="Бишкек" />
            <meta property="og:region" content="Чуйская область" />
            <meta property="og:postal-code" content="720000" />
            <meta property="og:country-name" content="Кыргызстан" />
            <meta property="og:email" content="info@maxmetall.kg" />
            <meta property="og:phone_number" content="+996555918355" />
            <meta property="og:fax_number" content="+996555918355" />
            <meta property="business:contact_data:street_address" content="ул. Чуйкова 168" />
            <meta property="business:contact_data:locality" content="Бишкек" />
            <meta property="business:contact_data:region" content="Чуйская область" />
            <meta property="business:contact_data:postal_code" content="720000" />
            <meta property="business:contact_data:country_name" content="Кыргызстан" />
            <meta property="place:location:latitude" content="42.8746" />
            <meta property="place:location:longitude" content="74.5698" />
            
            {/* Дополнительные Twitter теги */}
            <meta name="twitter:site" content="@maxmetall_kg" />
            <meta name="twitter:creator" content="@maxmetall_kg" />
            <meta name="twitter:domain" content="maxmetall.kg" />
            <meta name="twitter:app:name:iphone" content="MaxMetall" />
            <meta name="twitter:app:name:ipad" content="MaxMetall" />
            <meta name="twitter:app:name:googleplay" content="MaxMetall" />
            
            {/* Дополнительные Dublin Core теги */}
            <meta name="DC.title" content="MaxMetall - Изделия из нержавеющей стали в Бишкеке" />
            <meta name="DC.creator" content="MaxMetall" />
            <meta name="DC.subject" content="Изделия из нержавеющей стали, перила, ограждения, лестницы для бассейнов" />
            <meta name="DC.description" content="Производство изделий из нержавеющей стали в Бишкеке, Кыргызстане" />
            <meta name="DC.publisher" content="MaxMetall" />
            <meta name="DC.contributor" content="MaxMetall" />
            <meta name="DC.date" content="2024" />
            <meta name="DC.type" content="text" />
            <meta name="DC.format" content="text/html" />
            <meta name="DC.identifier" content="https://maxmetall.kg" />
            <meta name="DC.language" content="ru" />
            <meta name="DC.coverage" content="Бишкек, Кыргызстан" />
            <meta name="DC.rights" content="Copyright MaxMetall" />
            
            {/* Preconnect для улучшения производительности */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://www.google.com" />
            <link rel="preconnect" href="https://www.gstatic.com" />
            <link rel="preconnect" href="https://cdn.jsdelivr.net" />
            <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
            <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
            <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
            <link rel="dns-prefetch" href="https://www.google.com" />
            
            {/* Дополнительные мета-теги для мобильных устройств */}
            <meta name="HandheldFriendly" content="True" />
            <meta name="MobileOptimized" content="320" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
            <meta name="apple-mobile-web-app-title" content="MaxMetall" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="apple-touch-fullscreen" content="yes" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="mobile-web-app-status-bar-style" content="black-translucent" />
            
            {/* Дополнительные мета-теги для Windows */}
            <meta name="msapplication-TileColor" content="#d32f2f" />
            <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
            <meta name="msapplication-square70x70logo" content="/mstile-70x70.png" />
            <meta name="msapplication-square150x150logo" content="/mstile-150x150.png" />
            <meta name="msapplication-wide310x150logo" content="/mstile-310x150.png" />
            <meta name="msapplication-square310x310logo" content="/mstile-310x310.png" />
            <meta name="msapplication-notification" content="frequency=30;polling-uri=https://maxmetall.kg/notifications/;polling-uri2=https://maxmetall.kg/notifications2/" />
            
            {/* Дополнительные теги для социальных сетей */}
            <meta property="vk:image" content="https://maxmetall.kg/images/og-image.jpg" />
            <meta property="vk:title" content="MaxMetall - Изделия из нержавеющей стали в Бишкеке" />
            <meta property="vk:description" content="Производство изделий из нержавеющей стали в Бишкеке, Кыргызстане" />
            <meta property="ok:image" content="https://maxmetall.kg/images/og-image.jpg" />
            <meta property="ok:title" content="MaxMetall - Изделия из нержавеющей стали в Бишкеке" />
            <meta property="ok:description" content="Производство изделий из нержавеющей стали в Бишкеке, Кыргызстане" />
            
            {/* Canonical URL */}
            <link rel="canonical" href={meta.canonical} />
            
            {/* Alternate URLs для разных языков */}
            <link rel="alternate" href="https://maxmetall.kg/" hrefLang="ru" />
            <link rel="alternate" href="https://maxmetall.kg/" hrefLang="ky" />
            <link rel="alternate" href="https://maxmetall.kg/" hrefLang="x-default" />
            
            {/* Preload критически важных ресурсов */}
            <link rel="preload" href="/images/hero-bg.jpg" as="image" type="image/jpeg" />
            <link rel="preload" href="/images/favicon.jpg" as="image" type="image/jpeg" />
            
            {/* Prefetch для улучшения навигации */}
            <link rel="prefetch" href="/images/gallery/square-1.jpg" />
            <link rel="prefetch" href="/images/gallery/square-2.jpg" />
            <link rel="prefetch" href="/images/products/railings.jpg" />
            <link rel="prefetch" href="/images/products/pool-stairs.jpg" />
            
            {/* Дополнительные link теги */}
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="bookmark" href="https://maxmetall.kg/" title="MaxMetall" />
            <link rel="help" href="https://maxmetall.kg#contacts" />
            <link rel="author" href="https://maxmetall.kg" />
            <link rel="publisher" href="https://maxmetall.kg" />
            <link rel="me" href="https://maxmetall.kg" />
            
            {/* Дополнительные favicon форматы */}
            <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
            <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
            
            {/* Дополнительные мета-теги для поисковых систем */}
            <meta name="yandex-verification" content="your-yandex-verification-code" />
            <meta name="google-site-verification" content="your-google-verification-code" />
            <meta name="bing-site-verification" content="your-bing-verification-code" />
            <meta name="baidu-site-verification" content="your-baidu-verification-code" />
            
            {/* Дополнительные теги для богатых сниппетов */}
            <meta name="product" content="Изделия из нержавеющей стали" />
            <meta name="price" content="По запросу" />
            <meta name="priceCurrency" content="KGS" />
            <meta name="availability" content="InStock" />
            <meta name="brand" content="MaxMetall" />
            <meta name="manufacturer" content="MaxMetall" />
            <meta name="model" content="Изделия из нержавеющей стали" />
            <meta name="condition" content="new" />
            <meta name="priceValidUntil" content="2025-12-31" />
            
            {/* Дополнительные теги для бизнеса */}
            <meta name="business-name" content="MaxMetall" />
            <meta name="business-type" content="Manufacturer" />
            <meta name="business-hours" content="Mo-Sa 09:00-18:00" />
            <meta name="business-phone" content="+996555918355" />
            <meta name="business-address" content="ул. Чуйкова 168, Бишкек, Кыргызстан" />
            <meta name="business-latitude" content="42.8746" />
            <meta name="business-longitude" content="74.5698" />
            <meta name="business-region" content="Чуйская область" />
            <meta name="business-country" content="Кыргызстан" />
            <meta name="business-postal-code" content="720000" />
            <meta name="business-established" content="2009" />
            <meta name="business-employees" content="10-50" />
            
            {/* Дополнительные теги для локального SEO */}
            <meta name="locality" content="Бишкек" />
            <meta name="region" content="Чуйская область" />
            <meta name="country" content="Кыргызстан" />
            <meta name="timezone" content="Asia/Bishkek" />
            <meta name="coordinates" content="42.8746,74.5698" />
            <meta name="zip-code" content="720000" />
            <meta name="area-code" content="+996" />
            <meta name="local-phone" content="555918355" />
            <meta name="international-phone" content="+996555918355" />
            
            {/* Дополнительные теги для отрасли */}
            <meta name="industry" content="Металлообработка" />
            <meta name="sector" content="Производство" />
            <meta name="specialization" content="Нержавеющая сталь" />
            <meta name="services" content="Изготовление, установка, сварка" />
            <meta name="materials" content="AISI 304, AISI 316, AISI 201" />
            <meta name="technologies" content="Аргонная сварка, плазменная резка, полировка" />
            <meta name="experience" content="15 лет" />
            <meta name="guarantee" content="Да" />
            <meta name="certification" content="ISO" />
            <meta name="quality" content="Премиум" />
            
            {/* Дополнительные теги для контента */}
            <meta name="content-language" content="ru" />
            <meta name="content-type" content="text/html; charset=utf-8" />
            <meta name="content-style-type" content="text/css" />
            <meta name="content-script-type" content="text/javascript" />
            <meta name="page-type" content="product catalog" />
            <meta name="page-topic" content="stainless steel products" />
            <meta name="page-subject" content="manufacturing and installation" />
            <meta name="page-description" content="MaxMetall - изделия из нержавеющей стали в Бишкеке" />
            
            {/* Теги для улучшения индексации */}
            <meta name="crawl-delay" content="0" />
            <meta name="cache-control" content="public, max-age=31536000" />
            <meta name="pragma" content="public" />
            <meta name="expires" content="Thu, 01 Jan 2026 00:00:00 GMT" />
            <meta name="last-modified" content={new Date().toISOString()} />
            
            {/* Дополнительные теги для аналитики */}
            <meta name="segment" content="B2B, B2C" />
            <meta name="target-audience" content="Строители, архитекторы, частные клиенты" />
            <meta name="customer-type" content="Юридические и физические лица" />
            <meta name="order-type" content="Индивидуальные заказы" />
            <meta name="delivery" content="По всему Кыргызстану" />
            <meta name="payment" content="Наличный, безналичный расчет" />
            <meta name="warranty" content="Гарантия качества" />
            <meta name="support" content="Техническая поддержка" />
            
            {/* Preconnect to external domains */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link rel="preconnect" href="https://www.youtube.com" />
            <link rel="preconnect" href="https://img.youtube.com" />
            
            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            
            {/* Hreflang для многоязычности */}
            <link rel="alternate" hrefLang="ru" href="https://maxmetall.kg/" />
            <link rel="alternate" hrefLang="ky" href="https://maxmetall.kg/" />
            <link rel="alternate" hrefLang="x-default" href="https://maxmetall.kg/" />
            
            {/* Structured Data */}
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
            />
        </head>
        <body>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
