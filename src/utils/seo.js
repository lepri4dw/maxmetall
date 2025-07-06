/**
 * Полная SEO оптимизация для MaxMetall
 * Максимально детализированные метаданные для выхода в топ поисковой выдачи
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
  workingHours: 'Пн-Пт: 07:00-16:00, Сб: 10:00-14:00, Вс: выходной, по предварительному звонку',
  established: '2009',
  experience: '15 лет',
  city: 'Бишкек',
  country: 'Кыргызстан',
  region: 'Чуйская область',
  languages: ['русский', 'кыргызский', 'киргизский'],
  currency: 'KGS',
  timezone: 'Asia/Bishkek'
};

// Супер детализированные ключевые слова
const KEYWORDS = {
  products: [
    'нержавейка', 'нержавеющая сталь', 'изделия из нержавейки', 'изделия из нержавеющей стали',
    'перила из нержавейки', 'ограждения из нержавейки', 'лестничные перила', 'балконные перила',
    'лестницы для бассейна', 'лестницы в бассейн', 'бассейновые лестницы',
    'карнизы для ванной', 'карнизы в ванную', 'карнизы для душа',
    'поручни ЛОВЗ', 'поручни для инвалидов', 'поручни для людей с ограниченными возможностями',
    'флагштоки', 'флагштоки из нержавейки', 'флагштоки из нержавеющей стали', 'пилоны',
    'трубы из нержавейки', 'трубы из нержавеющей стали', 'нержавеющие трубы',
    'фурнитура из нержавейки', 'крепеж из нержавейки', 'комплектующие из нержавейки',
    'капсулы времени', 'капсулы времени из нержавейки'
  ],
  geo: [
    'Бишкек', 'Кыргызстан', 'Киргизия', 'Чуйская область',
    'бишкек нержавейка', 'кыргызстан нержавейка',
    'перила бишкек', 'ограждения бишкек', 'лестницы бишкек',
    'карнизы бишкек', 'поручни бишкек', 'флагштоки бишкек'
  ],
  materials: [
    'AISI 304', 'AISI 316', 'AISI 201', '12Х18Н10Т', '08Х18Н10',
    'пищевая нержавейка', 'медицинская нержавейка', 'зеркальная нержавейка',
    'матовая нержавейка', 'полированная нержавейка'
  ],
  technologies: [
    'аргонная сварка', 'TIG сварка', 'плазменная резка', 'лазерная резка',
    'полировка нержавейки', 'гибка нержавейки', 'изготовление на заказ'
  ],
  commercial: [
    'купить нержавейку', 'заказать из нержавейки', 'цена нержавейки',
    'стоимость изделий из нержавейки', 'производство нержавейки'
  ],
  brandVariations: [
    'MaxMetall', 'МаксМеталл', 'Макс Металл', 'Max Metall'
  ],
};

// Генерация основных метатегов
export const generateMainPageMeta = () => {
  const title = `${COMPANY_SEO.name} - Изделия из нержавеющей стали в Бишкеке | Перила, Ограждения, Лестницы`;
  const description = `${COMPANY_SEO.name} - ведущий производитель изделий из нержавеющей стали в Бишкеке. Изготавливаем перила, ограждения, лестницы для бассейнов, карнизы, поручни ЛОВЗ, флагштоки. ${COMPANY_SEO.experience} опыта, собственное производство, гарантия. Телефон: ${COMPANY_SEO.phone}`;
  const keywords = [
    ...new Set([ // Используем Set, чтобы удалить дубликаты
      ...KEYWORDS.products,
      ...KEYWORDS.geo,
      ...KEYWORDS.materials,
      ...KEYWORDS.technologies,
      ...KEYWORDS.commercial,
      ...KEYWORDS.brandVariations
    ])
  ].join(', ');
  const canonical = 'https://maxmetall.kg/';
  return {
    title,
    description,
    keywords,
    canonical,
    openGraph: {
      title: `MaxMetall | Перила, лестницы из нержавейки в Бишкеке`,
      description: `Изделия из нержавеющей стали: перила, лестницы, карнизы, поручни. Высокое качество. Звоните: ${COMPANY_SEO.phone}`,
      url: canonical,
      siteName: COMPANY_SEO.name,
      locale: 'ru_KG',
      type: 'website',
      images: [{
        url: 'https://maxmetall.kg/images/favicon.jpg',
        width: 1000,
        height: 1000,
        alt: `${COMPANY_SEO.name} - Изделия из нержавеющей стали в Бишкеке`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: `MaxMetall | Перила, лестницы из нержавейки в Бишкеке`,
      description: `Изделия из нержавеющей стали: перила, лестницы, карнизы, поручни. Высокое качество. ☎ ${COMPANY_SEO.phone}`,
      images: ['https://maxmetall.kg/images/favicon.jpg']
    }
  };
};

// Генерация JSON-LD для организации
export const generateMainPageJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization', // Можно изменить на 'LocalBusiness' и добавить 'priceRange'
    '@id': 'https://maxmetall.kg/#organization',
    name: COMPANY_SEO.name,
    legalName: COMPANY_SEO.fullName,
    url: 'https://maxmetall.kg',
    logo: 'https://maxmetall.kg/images/favicon.jpg',
    image: 'https://maxmetall.kg/images/favicon.jpg',
    description: COMPANY_SEO.description,
    telephone: COMPANY_SEO.phone,
    email: COMPANY_SEO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Байтик-Баатыра 36/3 Дастан',
      addressLocality: COMPANY_SEO.city,
      addressRegion: COMPANY_SEO.region,
      postalCode: '720000',
      addressCountry: 'KG'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.8746,
      longitude: 74.5698
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '16:00'
    },
    sameAs: [
      'https://instagram.com/maxmetall.kg',
      'https://wa.me/996555918355'
    ],
    // --- ИСПРАВЛЕНИЕ ОШИБКИ ЗДЕСЬ ---
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Каталог изделий и услуг из нержавеющей стали',
      itemListElement: KEYWORDS.products.map(product => {
        // Транслитерация для создания простого slug для якорной ссылки
        const productSlug = product.toLowerCase()
            .replace(/а/g, 'a').replace(/б/g, 'b').replace(/в/g, 'v').replace(/г/g, 'g').replace(/д/g, 'd')
            .replace(/е/g, 'e').replace(/ё/g, 'yo').replace(/ж/g, 'zh').replace(/з/g, 'z').replace(/и/g, 'i')
            .replace(/й/g, 'y').replace(/к/g, 'k').replace(/л/g, 'l').replace(/м/g, 'm').replace(/н/g, 'n')
            .replace(/о/g, 'o').replace(/п/g, 'p').replace(/р/g, 'r').replace(/с/g, 's').replace(/т/g, 't')
            .replace(/у/g, 'u').replace(/ф/g, 'f').replace(/х/g, 'h').replace(/ц/g, 'c').replace(/ч/g, 'ch')
            .replace(/ш/g, 'sh').replace(/щ/g, 'shch').replace(/ъ/g, '').replace(/ы/g, 'y').replace(/ь/g, '')
            .replace(/э/g, 'e').replace(/ю/g, 'yu').replace(/я/g, 'ya')
            .replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');

        return {
          '@type': 'Offer',
          // Ссылка на якорь на этой же странице
          url: `https://maxmetall.kg/#${productSlug}`,
          priceCurrency: COMPANY_SEO.currency,
          price: '1', // Используем '1' для товаров "по запросу", чтобы схема была валидной
          availability: 'https://schema.org/InStock', // InStock означает "Доступен для заказа"
          priceValidUntil: '2025-12-31',
          itemOffered: {
            '@type': 'Product',
            name: product,
            description: `Изготовление на заказ: ${product} из качественной нержавеющей стали в Бишкеке.`,
            sku: `MM-${productSlug}`, // Уникальный артикул
            brand: {
              '@type': 'Brand',
              name: COMPANY_SEO.name
            },
            // Если у вас есть изображения для каждой категории, это будет большим плюсом.
            // Если нет, этот ключ можно удалить.
            // image: `https://maxmetall.kg/images/products/${productSlug}.jpg`
          }
        };
      })
    }
  };
};


// Генерация хлебных крошек (для одностраничника можно сделать проще)
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
  KEYWORDS,
  generateMainPageMeta,
  generateMainPageJsonLd,
  generateBreadcrumbJsonLd,
  generateWebSiteJsonLd
};