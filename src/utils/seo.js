/**
 * Полная SEO оптимизация для MaxMetall
 * Финальная исправленная версия для устранения ошибки JSON-LD
 */

// Основные SEO данные компании
const COMPANY_SEO = {
  name: 'MaxMetall',
  fullName: 'MaxMetall - Изделия из нержавеющей стали в Бишкеке',
  shortName: 'МаксМеталл',
  slogan: 'Нержавеющая сталь премиум класса в Бишкеке',
  description: 'Производство изделий из нержавеющей стали в Бишкеке, Кыргызстане. Перила, ограждения, лестницы для бассейнов, карнизы, поручни ЛОВЗ, флагштоки, трубы, фурнитура. 15 лет опыта, собственное производство, гарантия качества.',
  phone: '+996555918355',
  email: 'info@maxmetall.kg',
  address: 'ул. Байтик-Баатыра 36/3 Дастан, Бишкек, Кыргызстан',
  established: '2009',
  experience: '15 лет',
  city: 'Бишкек',
  country: 'Кыргызстан',
  region: 'Чуйская область',
  currency: 'KGS',
  timezone: 'Asia/Bishkek',
  postalCode: '720000',
  latitude: 42.8746,
  longitude: 74.5698,
};

// Продукты, для которых будут созданы сущности
const PRODUCTS_LIST = [
  'нержавейка', 'нержавеющая сталь', 'изделия из нержавейки', 'изделия из нержавеющей стали',
  'перила из нержавейки', 'ограждения из нержавейки', 'лестничные перила', 'балконные перила',
  'лестницы для бассейна', 'лестницы в бассейн', 'бассейновые лестницы',
  'карнизы для ванной', 'карнизы в ванную', 'карнизы для душа',
  'поручни ЛОВЗ', 'поручни для инвалидов', 'поручни для людей с ограниченными возможностями',
  'флагштоки', 'флагштоки из нержавейки', 'флагштоки из нержавеющей стали', 'пилоны',
  'трубы из нержавейки', 'трубы из нержавеющей стали', 'нержавеющие трубы',
  'фурнитура из нержавейки', 'крепеж из нержавейки', 'комплектующие из нержавейки',
  'капсулы времени', 'капсулы времени из нержавейки'
];

// Генерация основных метатегов
export const generateMainPageMeta = () => {
  const title = `${COMPANY_SEO.name} - Изделия из нержавеющей стали в Бишкеке | Рейтинг 5.0 ★★★★★`;
  const description = `${COMPANY_SEO.name} - производитель изделий из нержавеющей стали в Бишкеке. Рейтинг 5.0 на основе 14 отзывов. Перила, ограждения, лестницы. ☎ ${COMPANY_SEO.phone}`;
  const keywords = [...new Set(PRODUCTS_LIST)].join(', ');
  const canonical = 'https://maxmetall.kg/';

  return {
    title,
    description,
    keywords,
    canonical,
    openGraph: {
      title: `MaxMetall | Перила, лестницы из нержавейки в Бишкеке (Рейтинг 5.0)`,
      description: `Изделия из нержавеющей стали: перила, лестницы, карнизы, поручни. Высокое качество. Звоните: ${COMPANY_SEO.phone}`,
      url: canonical,
      siteName: COMPANY_SEO.name,
      locale: 'ru_KG',
      type: 'website',
      images: [{
        url: 'https://maxmetall.kg/images/favicon.jpg',
        width: 1000, height: 1000, alt: `${COMPANY_SEO.name} - Изделия из нержавеющей стали в Бишкеке`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: `MaxMetall | Перила, лестницы из нержавейки в Бишкеке (Рейтинг 5.0)`,
      description: `Изделия из нержавеющей стали: перила, лестницы, карнизы, поручни. Высокое качество. ☎ ${COMPANY_SEO.phone}`,
      images: ['https://maxmetall.kg/images/favicon.jpg']
    }
  };
};


// --- ЕДИНАЯ И ПОЛНАЯ МИКРОРАЗМЕТКА ДЛЯ КОМПАНИИ (ИСПРАВЛЕННАЯ СТРУКТУРА) ---
export const generateMainPageJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://maxmetall.kg/#organization',
    name: COMPANY_SEO.name,
    url: 'https://maxmetall.kg',
    logo: 'https://maxmetall.kg/images/favicon.jpg',
    image: 'https://maxmetall.kg/images/favicon.jpg',
    description: COMPANY_SEO.description,
    telephone: COMPANY_SEO.phone,
    email: COMPANY_SEO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_SEO.address,
      addressLocality: COMPANY_SEO.city,
      addressRegion: COMPANY_SEO.region,
      postalCode: COMPANY_SEO.postalCode,
      addressCountry: 'KG'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_SEO.latitude,
      longitude: COMPANY_SEO.longitude
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '16:00'
    },
    sameAs: [
      'https://instagram.com/maxmetall.kg',
      'https://wa.me/996555918355'
    ],

    // Этот блок безопасен, так как основан на публичных данных Google
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '14',
      reviewCount: '14'
    },

    // --- ИСПРАВЛЕННАЯ СТРУКТУРА ЗДЕСЬ ---
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Каталог изделий из нержавеющей стали',
      itemListElement: PRODUCTS_LIST.map(productName => {
        const slug = productName.toLowerCase()
            .replace(/[^a-z0-9а-яё -]/g, '').replace(/\s+/g, '-');

        // Элемент списка - это ТОВАР (Product)
        return {
          '@type': 'Product',
          name: productName,
          description: `Изготовление на заказ: ${productName} из качественной нержавеющей стали в Бишкеке.`,
          sku: `MM-${slug}`,
          brand: {
            '@type': 'Brand',
            name: COMPANY_SEO.name
          },
          // А у ТОВАРА есть ПРЕДЛОЖЕНИЕ (offers)
          offers: {
            '@type': 'Offer',
            url: `https://maxmetall.kg/#${slug}`,
            priceCurrency: COMPANY_SEO.currency,
            price: '1',
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'Organization',
              name: COMPANY_SEO.name
            }
          }
        };
      })
    }
  };
};


// Генерация хлебных крошек
export const generateBreadcrumbJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{
      '@type': 'ListItem',
      position: 1,
      name: 'Главная',
      item: 'https://maxmetall.kg'
    }]
  };
};

// Генерация WebSite schema
export const generateWebSiteJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://maxmetall.kg',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://maxmetall.kg#search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };
};

// Экспорт всех функций
export default {
  COMPANY_SEO,
  PRODUCTS_LIST,
  generateMainPageMeta,
  generateMainPageJsonLd,
  generateBreadcrumbJsonLd,
  generateWebSiteJsonLd
};