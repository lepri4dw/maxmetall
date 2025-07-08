/**
 * Полная SEO оптимизация для MaxMetall
 * Финальная исправленная версия c `image` и правильной транслитерацией.
 */

// Основные SEO данные компании
const COMPANY_SEO = {
  name: 'MaxMetall',
  fullName: 'MaxMetall - Изделия из нержавеющей стали в Бишкеке',
  domain: 'https://maxmetall.kg',
  description: 'Производство изделий из нержавеющей стали в Бишкеке, Кыргызстане. Перила, ограждения, лестницы для бассейнов, карнизы, поручни ЛОВЗ, флагштоки, трубы, фурнитура. 15 лет опыта, собственное производство, гарантия качества.',
  phone: '+996555918355',
  email: 'info@maxmetall.kg',
  address: 'ул. Байтик-Баатыра 36/3 Дастан, Бишкек, Кыргызстан',
  city: 'Бишкек',
  country: 'Кыргызстан',
  region: 'Чуйская область',
  currency: 'KGS',
  postalCode: '720000',
  latitude: 42.8746,
  longitude: 74.5698,
};

// Продукты, для которых будут созданы сущности
const PRODUCTS_LIST = [
  // Основные категории
  'нержавейка', 'нержавеющая сталь', 'изделия из нержавейки', 'изделия из нержавеющей стали',

  // ПЕРИЛА - все возможные варианты
  'перила', 'перила для лестницы', 'лестничные перила', 'перила из нержавейки',
  'перила из нержавеющей стали', 'перила Бишкек', 'балконные перила', 'перила для балкона',
  'ограждения', 'ограждения из нержавейки', 'ограждения Бишкек', 'металлические ограждения',
  'ограждения для лестниц', 'ограждения балконов', 'ограждения террас',

  // ЛЕСТНИЦЫ ДЛЯ БАССЕЙНА - все варианты
  'лестница в бассейн', 'лестницы для бассейна', 'бассейновые лестницы', 'лестницы в бассейн',
  'лестница для бассейна из нержавейки', 'лестницы для бассейнов из нержавеющей стали',
  'лестница в бассейн Бишкек', 'лестницы для бассейнов Бишкек',

  // КАРНИЗЫ - все варианты  
  'карниз', 'карнизы', 'карнизы для ванной', 'карнизы в ванную', 'карнизы для душа',
  'карнизы из нержавейки', 'карнизы из нержавеющей стали', 'карнизы Бишкек',
  'карнизы для ванной комнаты', 'душевые карнизы',

  // ПОРУЧНИ - все варианты
  'поручни', 'поручни ЛОВЗ', 'поручни для инвалидов', 'поручни для людей с ограниченными возможностями',
  'поручни из нержавейки', 'поручни из нержавеющей стали', 'поручни Бишкек',
  'поручни ЛОВЗ Бишкек', 'поручни для инвалидов Бишкек', 'поручни нержавейка Бишкек',

  // ФЛАГШТОКИ - все варианты
  'флагштоки', 'флагштоки из нержавейки', 'флагштоки из нержавеющей стали',
  'флагштоки Бишкек', 'флагштоки нержавейка Бишкек', 'пилоны', 'мачты для флагов',

  // ТРУБЫ - все варианты
  'трубы', 'трубы из нержавейки', 'трубы из нержавеющей стали', 'нержавеющие трубы',
  'трубы Бишкек', 'трубы нержавейка Бишкек', 'трубы из нержавеющей стали Бишкек',

  // ФУРНИТУРА - все варианты
  'фурнитура', 'фурнитура из нержавейки', 'фурнитура из нержавеющей стали',
  'фурнитура Бишкек', 'фурнитура нержавейка Бишкек', 'крепеж из нержавейки',
  'комплектующие из нержавейки', 'метизы из нержавейки',

  // КАПСУЛЫ ВРЕМЕНИ - все варианты
  'капсула времени', 'капсулы времени', 'капсулы времени из нержавейки',
  'капсула времени Бишкек', 'капсулы времени из нержавеющей стали',

  // ОБЩИЕ ВАРИАНТЫ БЕЗ "НЕРЖАВЕЙКА"
  'перила купить', 'перила заказать', 'изготовление перил', 'производство перил',
  'лестница для бассейна купить', 'лестницы для бассейна заказать',
  'карнизы купить', 'карнизы заказать', 'поручни купить', 'поручни заказать',
  'флагштоки купить', 'флагштоки заказать', 'трубы купить', 'трубы заказать',

  // МЕСТОПОЛОЖЕНИЕ + ОБЩИЕ СЛОВА
  'металлоизделия Бишкек', 'сварочные работы Бишкек', 'аргонная сварка Бишкек',
  'изделия из металла Бишкек', 'металлообработка Бишкек', 'производство металлоизделий Бишкек',

  // МАТЕРИАЛЫ
  'AISI 304', 'AISI 316', 'AISI 201', 'сталь 304', 'сталь 316', 'сталь 201',

  // ДОПОЛНИТЕЛЬНЫЕ СИНОНИМЫ
  'MaxMetall', 'Макс Металл', 'макс металл', 'максметалл'
];

// --- ЛОГИКА ПОДБОРА ИЗОБРАЖЕНИЙ ---
// 1. Карта конкретных изображений для ключевых слов
const imageMap = {
  'перила': '/images/products/railings.jpg',
  'ограждения': '/images/products/railings.jpg',
  'лестницы': '/images/products/pool-stairs.jpg',
  'карнизы': '/images/products/shower-rods.jpg',
  'поручни': '/images/products/accessibility-rails.jpg',
  'флагштоки': '/images/products/flagpoles.jpg',
  'трубы': '/images/products/pipes.jpg',
  'фурнитура': '/images/products/hardware.jpg',
  'крепеж': '/images/products/hardware.jpg',
  'комплектующие': '/images/products/hardware.jpg',
  'капсулы': '/images/products/capsules.jpg',
};
// 2. Список всех доступных изображений для циклического использования
const availableImages = Object.values(imageMap);

// Генерация основных метатегов
export const generateMainPageMeta = () => {
  const title = `Перила, лестницы для бассейна, карнизы из нержавейки Бишкек | MaxMetall`;
  const description = `Производство перил, лестниц для бассейна, карнизов, поручней ЛОВЗ, флагштоков, труб из нержавейки в Бишкеке. MaxMetall - 15 лет опыта, собственное производство. ☎ +996555918355`;
  const keywords = [...new Set(PRODUCTS_LIST)].join(', ');
  const canonical = `${COMPANY_SEO.domain}/`;

  return {
    title,
    description,
    keywords,
    canonical,
    openGraph: {
      title: `Перила, лестницы для бассейна, карнизы из нержавейки Бишкек | MaxMetall`,
      description: `Производство перил, лестниц для бассейна, карнизов, поручней ЛОВЗ, флагштоков, труб из нержавейки в Бишкеке. MaxMetall - 15 лет опыта, собственное производство. ☎ +996555918355`,
      url: canonical,
      siteName: COMPANY_SEO.name,
      locale: 'ru_KG',
      type: 'website',
      images: [{
        url: `${COMPANY_SEO.domain}/images/favicon.jpg`,
        width: 1000,
        height: 1000,
        alt: `${COMPANY_SEO.name} - Изделия из нержавеющей стали в Бишкеке`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: `Перила, лестницы для бассейна, карнизы из нержавейки Бишкек | MaxMetall`,
      description: `Производство перил, лестниц для бассейна, карнизов, поручней ЛОВЗ, флагштоков, труб из нержавейки в Бишкеке. MaxMetall - 15 лет опыта, собственное производство. ☎ +996555918355`,
      images: [`${COMPANY_SEO.domain}/images/favicon.jpg`]
    }
  };
};

// --- ЕДИНАЯ И ПОЛНАЯ МИКРОРАЗМЕТКА ДЛЯ КОМПАНИИ (ИСПРАВЛЕННАЯ СТРУКТУРА) ---
export const generateMainPageJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${COMPANY_SEO.domain}/#organization`,
    name: COMPANY_SEO.name,
    url: COMPANY_SEO.domain,
    logo: `${COMPANY_SEO.domain}/images/favicon.jpg`,
    image: `${COMPANY_SEO.domain}/images/favicon.jpg`,
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '14',
      reviewCount: '14'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Каталог изделий из нержавеющей стали',
      itemListElement: PRODUCTS_LIST.map((productName, index) => {
        // --- ВОЗВРАЩЕНА ПОЛНАЯ И НАДЕЖНАЯ ТРАНСЛИТЕРАЦИЯ ---
        const slug = productName.toLowerCase()
          .replace(/а/g, 'a').replace(/б/g, 'b').replace(/в/g, 'v').replace(/г/g, 'g').replace(/д/g, 'd')
          .replace(/е/g, 'e').replace(/ё/g, 'yo').replace(/ж/g, 'zh').replace(/з/g, 'z').replace(/и/g, 'i')
          .replace(/й/g, 'y').replace(/к/g, 'k').replace(/л/g, 'l').replace(/м/g, 'm').replace(/н/g, 'n')
          .replace(/о/g, 'o').replace(/п/g, 'p').replace(/р/g, 'r').replace(/с/g, 's').replace(/т/g, 't')
          .replace(/у/g, 'u').replace(/ф/g, 'f').replace(/х/g, 'h').replace(/ц/g, 'c').replace(/ч/g, 'ch')
          .replace(/ш/g, 'sh').replace(/щ/g, 'shch').replace(/ъ/g, '').replace(/ы/g, 'y').replace(/ь/g, '')
          .replace(/э/g, 'e').replace(/ю/g, 'yu').replace(/я/g, 'ya')
          .replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');

        // --- ЛОГИКА ВЫБОРА ИЗОБРАЖЕНИЯ ---
        let imageUrl = '';
        // 1. Ищем конкретное изображение
        for (const key in imageMap) {
          if (productName.includes(key)) {
            imageUrl = imageMap[key];
            break;
          }
        }
        // 2. Если не нашли, используем циклическое
        if (!imageUrl) {
          imageUrl = availableImages[index % availableImages.length];
        }

        // Элемент списка - это ТОВАР (Product)
        return {
          '@type': 'Product',
          name: productName,
          // --- ДОБАВЛЕНО ПОЛЕ IMAGE ---
          image: `${COMPANY_SEO.domain}${imageUrl}`,
          description: `Изготовление на заказ: ${productName} из качественной нержавеющей стали в Бишкеке.`,
          sku: `MM-${slug}`,
          brand: {
            '@type': 'Brand',
            name: COMPANY_SEO.name
          },
          // А у ТОВАРА есть ПРЕДЛОЖЕНИЕ (offers)
          offers: {
            '@type': 'Offer',
            url: `${COMPANY_SEO.domain}/#${slug}`,
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

// ... остальной код (generateBreadcrumbJsonLd, generateWebSiteJsonLd и экспорт) без изменений ...

// Генерация хлебных крошек
export const generateBreadcrumbJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{
      '@type': 'ListItem',
      position: 1,
      name: 'Главная',
      item: `${COMPANY_SEO.domain}/`
    }]
  };
};

// Генерация WebSite schema
export const generateWebSiteJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: COMPANY_SEO.domain,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${COMPANY_SEO.domain}/#search?q={search_term_string}`
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