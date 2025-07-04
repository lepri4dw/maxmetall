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
  // Основные продукты
  products: [
    'нержавейка', 'нержавеющая сталь', 'изделия из нержавейки', 'изделия из нержавеющей стали',
    'перила из нержавейки', 'ограждения из нержавейки', 'лестничные перила', 'балконные перила',
    'лестницы для бассейна', 'лестницы в бассейн', 'бассейновые лестницы', 'лестницы для бассейнов',
    'карнизы для ванной', 'карнизы в ванную', 'карнизы для душа', 'карнизы для ванных комнат',
    'поручни ЛОВЗ', 'поручни для инвалидов', 'поручни для людей с ограниченными возможностями',
    'флагштоки', 'флагштоки из нержавейки', 'флагштоки из нержавеющей стали', 'пилоны',
    'трубы из нержавейки', 'трубы из нержавеющей стали', 'нержавеющие трубы',
    'фурнитура из нержавейки', 'крепеж из нержавейки', 'комплектующие из нержавейки',
    'капсулы времени', 'капсулы времени из нержавейки'
  ],
  
  // Географические ключевые слова
  geo: [
    'Бишкек', 'Кыргызстан', 'Киргизия', 'Чуйская область',
    'бишкек нержавейка', 'кыргызстан нержавейка', 'киргизия нержавейка'
  ],
  
  // Материалы и стандарты
  materials: [
    'AISI 304', 'AISI 316', 'AISI 201', '12Х18Н10Т', '08Х18Н10',
    'пищевая нержавейка', 'медицинская нержавейка', 'зеркальная нержавейка',
    'матовая нержавейка', 'сатиновая нержавейка', 'полированная нержавейка'
  ],
  
  // Технологии и услуги
  technologies: [
    'аргонная сварка', 'TIG сварка', 'плазменная резка', 'лазерная резка',
    'полировка нержавейки', 'гибка нержавейки', 'обработка нержавейки',
    'изготовление на заказ', 'производство по чертежам', 'индивидуальный подход'
  ],
  
  // Коммерческие запросы
  commercial: [
    'купить нержавейку', 'заказать из нержавейки', 'цена нержавейки',
    'стоимость изделий из нержавейки', 'производство нержавейки',
    'изготовление нержавейки', 'металлообработка', 'металлоизделия'
  ],
  
  // Качество и характеристики
  quality: [
    'качественная нержавейка', 'премиум нержавейка', 'европейское качество',
    'гарантия качества', 'сертифицированная нержавейка', 'долговечная нержавейка',
    'коррозионностойкая сталь', 'антикоррозийные свойства'
  ],
  
  // Отраслевые термины
  industry: [
    'строительство', 'ремонт', 'дизайн интерьера', 'архитектура',
    'общественные здания', 'частные дома', 'коммерческие объекты',
    'медицинские учреждения', 'пищевая промышленность'
  ],
  
  // Альтернативные названия компании
  brandVariations: [
    'MaxMetall', 'МаксМеталл', 'Макс Металл', 'Max Metall', 'Max Metal',
    'Максметалл', 'максметалл', 'MAXMETALL', 'maxmetall'
  ],
  
  // Длинные хвосты (long tail keywords)
  longTail: [
    'изделия из нержавеющей стали на заказ в Бишкеке',
    'перила из нержавейки с установкой в Бишкеке',
    'лестницы для бассейнов из нержавеющей стали Кыргызстан',
    'карнизы для ванной из нержавейки Бишкек',
    'поручни для инвалидов из нержавеющей стали',
    'флагштоки из нержавейки с установкой',
    'производство изделий из нержавейки в Кыргызстане',
    'металлообработка нержавеющей стали Бишкек',
    'аргонная сварка нержавейки в Бишкеке',
    'нержавеющая сталь AISI 304 316 Бишкек',
    'изготовление перил из нержавейки на заказ',
    'ограждения из нержавеющей стали для террас',
    'лестничные перила из нержавейки с установкой',
    'карнизы для душевых кабин из нержавейки',
    'поручни ЛОВЗ соответствующие стандартам',
    'флагштоки различной высоты из нержавейки',
    'трубы из нержавеющей стали различного диаметра',
    'комплектующие из нержавейки для строительства',
    'капсулы времени из нержавеющей стали на заказ'
  ]
};

// Генерация основных метатегов
export const generateMainPageMeta = () => {
  // Формируем максимально SEO-оптимизированный title
  const title = `${COMPANY_SEO.name} - Изделия из нержавеющей стали в Бишкеке | Перила, Ограждения, Лестницы для бассейнов | 15 лет опыта`;
  
  // Детализированное описание
  const description = `${COMPANY_SEO.name} - ведущий производитель изделий из нержавеющей стали в Бишкеке, Кыргызстане. Изготавливаем перила, ограждения, лестницы для бассейнов, карнизы для ванной, поручни ЛОВЗ, флагштоки, трубы, фурнитуру. Собственное производство, аргонная сварка, ${COMPANY_SEO.experience} опыта, гарантия качества. Работаем с AISI 304, 316, 201. Телефон: ${COMPANY_SEO.phone}`;
  
  // Мега-детализированные ключевые слова
  const keywords = [
    // Объединяем все категории ключевых слов
    ...KEYWORDS.products,
    ...KEYWORDS.geo,
    ...KEYWORDS.materials, 
    ...KEYWORDS.technologies,
    ...KEYWORDS.commercial,
    ...KEYWORDS.quality,
    ...KEYWORDS.industry,
    ...KEYWORDS.brandVariations,
    ...KEYWORDS.longTail,
    
    // Дополнительные комбинации
    'нержавейка Бишкек', 'изделия из нержавейки Бишкек', 'перила Бишкек',
    'ограждения Бишкек', 'лестницы бассейн Бишкек', 'карнизы ванная Бишкек',
    'поручни ЛОВЗ Бишкек', 'флагштоки Бишкек', 'трубы нержавейка Бишкек',
    'фурнитура нержавейка Бишкек', 'аргонная сварка Бишкек',
    
    // Комбинации с материалами
    'AISI 304 Бишкек', 'AISI 316 Бишкек', 'AISI 201 Бишкек',
    'пищевая нержавейка Бишкек', 'медицинская нержавейка Бишкек',
    
    // Коммерческие запросы с гео
    'купить нержавейку Бишкек', 'заказать нержавейку Бишкек',
    'цена нержавейки Бишкек', 'производство нержавейки Бишкек',
    'изготовление нержавейки Бишкек', 'металлообработка Бишкек',
    
    // Отраслевые с гео
    'строительство нержавейка Бишкек', 'ремонт нержавейка Бишкек',
    'дизайн нержавейка Бишкек', 'архитектура нержавейка Бишкек',
    
    // Другие города
    'нержавейка Ош', 'нержавейка Джалал-Абад', 'нержавейка Каракол',
    'изделия нержавейка Кыргызстан', 'производство нержавейка Кыргызстан'
  ].join(', ');

  const canonical = 'https://maxmetall.kg/';
  
  return {
    title,
    description,
    keywords,
    canonical,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    author: COMPANY_SEO.name,
    
    // Open Graph
    openGraph: {
      title: `MaxMetall | Перила, лестницы из нержавейки в Бишкеке`,
      description: `Изделия из нержавеющей стали: перила, лестницы, карнизы, поручни. Высокое качество и индивидуальный дизайн. Звоните: ${COMPANY_SEO.phone}`,
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
    
    // Twitter
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
    '@type': 'Organization',
    '@id': 'https://maxmetall.kg/#organization',
    name: COMPANY_SEO.name,
    alternateName: KEYWORDS.brandVariations,
    legalName: COMPANY_SEO.fullName,
    url: 'https://maxmetall.kg',
    logo: 'https://maxmetall.kg/images/favicon.jpg',
    image: 'https://maxmetall.kg/images/favicon.jpg',
    description: COMPANY_SEO.description,
    
    // Контакты
    telephone: COMPANY_SEO.phone,
    email: COMPANY_SEO.email,
    
    // Адрес
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Байтик-Баатыра 36/3 Дастан',
      addressLocality: COMPANY_SEO.city,
      addressRegion: COMPANY_SEO.region,
      postalCode: '720000',
      addressCountry: {
        '@type': 'Country',
        name: COMPANY_SEO.country,
        identifier: 'KG'
      }
    },
    
    // Координаты
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.8746,
      longitude: 74.5698
    },
    
    // Время работы
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '16:00'
    },
    
    // Основная информация
    foundingDate: COMPANY_SEO.established,
    slogan: COMPANY_SEO.slogan,
    knowsAbout: KEYWORDS.products.concat(KEYWORDS.materials, KEYWORDS.technologies),
    
    // Социальные сети
    sameAs: [
      'https://instagram.com/maxmetall.kg',
      'https://wa.me/996555918355'
    ],
    
    // Отрасль и категория
    industry: 'Металлообработка',
    naics: '332313',
    
    // Обслуживаемые регионы
    areaServed: [
      { '@type': 'City', name: 'Бишкек' },
      { '@type': 'City', name: 'Чуйская область' },
      { '@type': 'Country', name: 'Кыргызстан' }
    ],
    
    // Рейтинг
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '127',
      reviewCount: '89'
    },
    
    // Услуги
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Каталог изделий из нержавеющей стали',
      itemListElement: KEYWORDS.products.map(product => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: product,
          category: 'Изделия из нержавеющей стали',
          material: 'Нержавеющая сталь',
          brand: {
            '@type': 'Brand',
            name: COMPANY_SEO.name
          }
        }
      }))
    }
  };
};

// FAQ Schema для популярных вопросов
export const generateFAQJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://maxmetall.kg/#faq',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Какие изделия из нержавеющей стали производит MaxMetall в Бишкеке?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MaxMetall производит широкий спектр изделий из нержавеющей стали: перила и ограждения для лестниц и балконов, лестницы для бассейнов, карнизы для ванных комнат, поручни ЛОВЗ для людей с ограниченными возможностями, флагштоки, трубы различного диаметра, фурнитуру и комплектующие, а также капсулы времени. Все изделия изготавливаются из качественной нержавеющей стали AISI 304, 316, 201.'
        }
      },
      {
        '@type': 'Question',
        name: 'Сколько лет опыта у компании MaxMetall?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Компания MaxMetall работает на рынке Кыргызстана уже 15 лет с 2009 года. За это время мы выполнили более 50,000 заказов и стали ведущим производителем изделий из нержавеющей стали в Бишкеке.'
        }
      },
      {
        '@type': 'Question',
        name: 'Какие марки нержавеющей стали использует MaxMetall?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MaxMetall работает с высококачественными марками нержавеющей стали: AISI 304 (универсальная), AISI 316 (повышенная коррозионная стойкость), AISI 201 (экономичная), а также отечественные аналоги 12Х18Н10Т и 08Х18Н10 (пищевая нержавейка).'
        }
      },
      {
        '@type': 'Question',
        name: 'Предоставляет ли MaxMetall услуги по установке изделий?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Да, MaxMetall предоставляет полный цикл услуг: проектирование, изготовление, доставку и профессиональную установку всех изделий из нержавеющей стали. Наши специалисты имеют большой опыт монтажа и гарантируют качественную установку.'
        }
      },
      {
        '@type': 'Question',
        name: 'В каких городах Кыргызстана работает MaxMetall?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MaxMetall работает по всему Кыргызстану. Основное производство находится в Бишкеке, но мы выполняем заказы в городах: Ош, Джалал-Абад, Каракол, Нарын, Талас, Баткен и других населенных пунктах страны.'
        }
      },
      {
        '@type': 'Question',
        name: 'Какие технологии обработки нержавейки использует MaxMetall?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MaxMetall использует современные технологии обработки нержавеющей стали: аргонная сварка (TIG), плазменная и лазерная резка, токарная и фрезерная обработка, полировка до зеркального блеска, матирование, пескоструйная обработка.'
        }
      },
      {
        '@type': 'Question',
        name: 'Как связаться с MaxMetall для заказа?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Связаться с MaxMetall можно по телефону +996555918355, через WhatsApp, Instagram @maxmetall.kg или посетить наш офис по адресу: ул. Чуйкова 168, Бишкек. Работаем пн-сб с 9:00 до 18:00 по предварительному звонку.'
        }
      }
    ]
  };
};

// Генерация хлебных крошек
export const generateBreadcrumbJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': 'https://maxmetall.kg/#breadcrumb',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Главная',
        item: 'https://maxmetall.kg'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Изделия из нержавеющей стали',
        item: 'https://maxmetall.kg#products'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Галерея работ',
        item: 'https://maxmetall.kg#gallery'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Контакты',
        item: 'https://maxmetall.kg#contacts'
      }
    ]
  };
};

// Генерация WebSite schema
export const generateWebSiteJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://maxmetall.kg/#website',
    name: COMPANY_SEO.fullName,
    alternateName: KEYWORDS.brandVariations,
    url: 'https://maxmetall.kg',
    description: COMPANY_SEO.description,
    inLanguage: 'ru-KG',
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      '@type': 'Organization',
      name: COMPANY_SEO.name
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://maxmetall.kg/?search={search_term_string}',
      'query-input': 'required name=search_term_string'
    },
    mainEntity: {
      '@id': 'https://maxmetall.kg/#organization'
    }
  };
};

// Экспорт всех функций и данных
export default {
  COMPANY_SEO,
  KEYWORDS,
  generateMainPageMeta,
  generateMainPageJsonLd,
  generateFAQJsonLd,
  generateBreadcrumbJsonLd,
  generateWebSiteJsonLd
};
