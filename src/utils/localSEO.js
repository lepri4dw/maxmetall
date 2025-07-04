/**
 * Локальная SEO оптимизация для MaxMetall
 * Данные для локального бизнеса в Бишкеке, Кыргызстан
 */

// Основная информация о бизнесе
export const BUSINESS_INFO = {
  name: 'MaxMetall',
  alternateName: ['Максметалл', 'Макс Металл', 'МаксМеталл', 'Max Metal', 'максметалл', 'MAXMETALL', 'Max Metall'],
  description: 'Ведущий производитель изделий из нержавеющей стали в Бишкеке, Кыргызстане. Перила, ограждения, лестницы для бассейнов, карнизы, поручни ЛОВЗ, флагштоки, трубы, фурнитура. 15 лет опыта, собственное производство, аргонная сварка, гарантия качества.',
  url: 'https://maxmetall.kg',
  logo: 'https://maxmetall.kg/images/favicon.jpg',
  image: 'https://maxmetall.kg/images/og-image.jpg',
  
  // Контактная информация
  telephone: '+996555918355',
  email: 'info@maxmetall.kg',
  
  // Адрес
  address: {
    streetAddress: 'ул. Байтик Баатыра 36/3, завод Дастан',
    addressLocality: 'Бишкек',
    addressRegion: 'Чуйская область',
    postalCode: '720000',
    addressCountry: 'KG',
    addressCountryName: 'Кыргызстан'
  },
  
  // Координаты
  geo: {
    latitude: 42.8746,
    longitude: 74.5698
  },
  
  // Время работы
  openingHours: [
    'Mo-Fr 07:00-16:00',
    'Sa 08:00-10:00'
  ],
  
  // Социальные сети
  sameAs: [
    'https://instagram.com/maxmetall.kg',
    'https://wa.me/996555918355'
  ],
  
  // Дата основания
  foundingDate: '2009-01-01',
  
  // Количество сотрудников
  numberOfEmployees: '10-50'
};

// Услуги и продукция
export const SERVICES = [
  {
    '@type': 'Service',
    name: 'Изготовление перил и ограждений из нержавеющей стали',
    description: 'Проектирование и изготовление перил и ограждений из нержавеющей стали для лестниц, балконов, террас и фасадов. Используем сталь AISI 304, 316, 201. Аргонная сварка, полировка, установка.',
    areaServed: ['Бишкек', 'Чуйская область', 'Кыргызстан'],
    serviceType: 'Металлообработка',
    provider: {
      '@type': 'Organization',
      name: 'MaxMetall'
    }
  },
  {
    '@type': 'Service',
    name: 'Лестницы для бассейнов из нержавеющей стали',
    description: 'Изготовление специальных лестниц для бассейнов с антискользящим покрытием. Устойчивы к хлору и другим химическим веществам. Различные размеры и конфигурации.',
    areaServed: ['Бишкек', 'Чуйская область', 'Кыргызстан'],
    serviceType: 'Металлообработка',
    provider: {
      '@type': 'Organization',
      name: 'MaxMetall'
    }
  },
  {
    '@type': 'Service',
    name: 'Карнизы для ванных комнат из нержавеющей стали',
    description: 'Производство влагостойких карнизов для ванных комнат и душевых кабин. Устойчивы к коррозии, легко моются, долговечные. Различные формы и размеры.',
    areaServed: ['Бишкек', 'Чуйская область', 'Кыргызстан'],
    serviceType: 'Металлообработка',
    provider: {
      '@type': 'Organization',
      name: 'MaxMetall'
    }
  },
  {
    '@type': 'Service',
    name: 'Поручни ЛОВЗ для людей с ограниченными возможностями',
    description: 'Изготовление поручней для людей с ограниченными возможностями здоровья в соответствии с требованиями доступной среды. Соответствуют всем стандартам безопасности.',
    areaServed: ['Бишкек', 'Чуйская область', 'Кыргызстан'],
    serviceType: 'Металлообработка',
    provider: {
      '@type': 'Organization',
      name: 'MaxMetall'
    }
  },
  {
    '@type': 'Service',
    name: 'Флагштоки из нержавеющей стали',
    description: 'Производство флагштоков различной высоты для государственных и корпоративных нужд. Устойчивы к погодным условиям, с механизмом подъема флага.',
    areaServed: ['Бишкек', 'Чуйская область', 'Кыргызстан'],
    serviceType: 'Металлообработка',
    provider: {
      '@type': 'Organization',
      name: 'MaxMetall'
    }
  },
  {
    '@type': 'Service',
    name: 'Трубы из нержавеющей стали и фурнитура',
    description: 'Поставка труб из нержавеющей стали различного диаметра и комплектующих. Фитинги, соединители, крепежные элементы. Для пищевой, медицинской и химической промышленности.',
    areaServed: ['Бишкек', 'Чуйская область', 'Кыргызстан'],
    serviceType: 'Металлообработка',
    provider: {
      '@type': 'Organization',
      name: 'MaxMetall'
    }
  },
  {
    '@type': 'Service',
    name: 'Аргонная сварка нержавеющей стали',
    description: 'Профессиональная аргонная сварка (TIG) изделий из нержавеющей стали. Качественные швы, отсутствие деформации, сохранение антикоррозийных свойств материала.',
    areaServed: ['Бишкек', 'Чуйская область', 'Кыргызстан'],
    serviceType: 'Сварочные работы',
    provider: {
      '@type': 'Organization',
      name: 'MaxMetall'
    }
  },
  {
    '@type': 'Service',
    name: 'Капсулы времени из нержавеющей стали',
    description: 'Изготовление специальных капсул времени для закладки документов и памятных предметов. Герметичные, долговечные, устойчивые к коррозии.',
    areaServed: ['Бишкек', 'Чуйская область', 'Кыргызстан'],
    serviceType: 'Металлообработка',
    provider: {
      '@type': 'Organization',
      name: 'MaxMetall'
    }
  }
];

// Регионы обслуживания
export const SERVICE_AREAS = [
  {
    '@type': 'City',
    name: 'Бишкек',
    containedInPlace: 'Чуйская область, Кыргызстан'
  },
];

// Материалы и технологии
export const MATERIALS = [
  {
    name: 'AISI 304',
    description: 'Универсальная нержавеющая сталь с отличными антикоррозийными свойствами',
    composition: '18% хром, 8% никель',
    applications: ['Перила', 'Ограждения', 'Карнизы', 'Общестроительные конструкции']
  },
  {
    name: 'AISI 316',
    description: 'Нержавеющая сталь повышенной коррозионной стойкости',
    composition: '18% хром, 10% никель, 2% молибден',
    applications: ['Лестницы для бассейнов', 'Морские конструкции', 'Химическая промышленность']
  },
  {
    name: 'AISI 201',
    description: 'Экономичная нержавеющая сталь с хорошими эксплуатационными свойствами',
    composition: '17% хром, 4% никель, 6% марганец',
    applications: ['Декоративные элементы', 'Внутренние конструкции']
  },
  {
    name: '12Х18Н10Т',
    description: 'Отечественный аналог AISI 304, стабилизированный титаном',
    composition: '18% хром, 10% никель, титан',
    applications: ['Сварные конструкции', 'Высокотемпературные применения']
  },
  {
    name: '08Х18Н10',
    description: 'Пищевая нержавеющая сталь для контакта с продуктами',
    composition: '18% хром, 10% никель, низкий углерод',
    applications: ['Пищевое оборудование', 'Медицинские изделия']
  }
];

// Технологии обработки
export const TECHNOLOGIES = [
  {
    name: 'Аргонная сварка (TIG)',
    description: 'Высококачественная сварка в защитной среде аргона',
    advantages: ['Чистые швы', 'Отсутствие деформации', 'Сохранение антикоррозийных свойств']
  },
  {
    name: 'Плазменная резка',
    description: 'Точная резка нержавеющей стали плазменной дугой',
    advantages: ['Высокая точность', 'Чистый рез', 'Минимальная зона термического влияния']
  },
  {
    name: 'Лазерная резка',
    description: 'Прецизионная резка лазерным лучом',
    advantages: ['Максимальная точность', 'Сложные контуры', 'Отличное качество поверхности']
  },
  {
    name: 'Гидроабразивная резка',
    description: 'Резка струей воды с абразивом под высоким давлением',
    advantages: ['Без термического воздействия', 'Толстые материалы', 'Любые формы']
  },
  {
    name: 'Токарная обработка',
    description: 'Механическая обработка на токарных станках',
    advantages: ['Высокая точность размеров', 'Отличная поверхность', 'Сложные формы']
  },
  {
    name: 'Фрезерная обработка',
    description: 'Обработка на фрезерных станках с ЧПУ',
    advantages: ['Сложные поверхности', 'Высокая производительность', 'Точность']
  },
  {
    name: 'Полировка до зеркального блеска',
    description: 'Механическая полировка до зеркального состояния',
    advantages: ['Эстетичный вид', 'Легкость очистки', 'Максимальная коррозионная стойкость']
  },
  {
    name: 'Матирование поверхности',
    description: 'Создание матовой фактуры поверхности',
    advantages: ['Скрытие царапин', 'Антибликовый эффект', 'Современный вид']
  },
  {
    name: 'Пескоструйная обработка',
    description: 'Обработка поверхности абразивом под давлением',
    advantages: ['Удаление окалины', 'Подготовка под покраску', 'Декоративная фактура']
  }
];

// Генерация Local Business Schema
export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://maxmetall.kg/#business',
    name: BUSINESS_INFO.name,
    alternateName: BUSINESS_INFO.alternateName,
    description: BUSINESS_INFO.description,
    url: BUSINESS_INFO.url,
    logo: BUSINESS_INFO.logo,
    image: BUSINESS_INFO.image,
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00'
    },
    sameAs: BUSINESS_INFO.sameAs,
    foundingDate: BUSINESS_INFO.foundingDate,
    numberOfEmployees: BUSINESS_INFO.numberOfEmployees,
    areaServed: SERVICE_AREAS,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Каталог изделий из нержавеющей стали',
      itemListElement: SERVICES.map(service => ({
        '@type': 'Offer',
        itemOffered: service
      }))
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '127',
      reviewCount: '89'
    },
    // Дополнительные характеристики
    keywords: [
      'нержавейка Бишкек', 'изделия из нержавейки', 'перила из нержавейки',
      'ограждения из нержавейки', 'лестницы бассейн', 'карнизы ванная',
      'поручни ЛОВЗ', 'флагштоки', 'аргонная сварка', 'AISI 304', 'AISI 316'
    ],
    // Преимущества
    knowsAbout: [
      'Производство изделий из нержавеющей стали',
      'Аргонная сварка нержавейки',
      'Проектирование металлоконструкций',
      'Полировка нержавеющей стали',
      'Установка перил и ограждений',
      'Изготовление по индивидуальным размерам'
    ],
    // Сертификаты и лицензии
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Сертификат качества ISO',
        credentialCategory: 'Система менеджмента качества'
      }
    ],
    // Время существования
    slogan: 'Нержавеющая сталь премиум класса в Бишкеке',
    // Отзывы клиентов
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: 5,
          bestRating: 5
        },
        author: {
          '@type': 'Person',
          name: 'Айгуль М.'
        },
        reviewBody: 'Отличное качество перил из нержавейки. Быстро изготовили, качественно установили. Рекомендую MaxMetall!'
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: 5,
          bestRating: 5
        },
        author: {
          '@type': 'Person',
          name: 'Марат К.'
        },
        reviewBody: 'Заказывали лестницу для бассейна. Все сделали профессионально, материал качественный, цена адекватная.'
      }
    ]
  };
};

// Генерация схемы для продуктов
export const generateProductSchema = (product) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'MaxMetall'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'MaxMetall',
      url: 'https://maxmetall.kg'
    },
    category: 'Изделия из нержавеющей стали',
    material: 'Нержавеющая сталь',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'KGS',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'MaxMetall'
      },
      areaServed: 'Кыргызстан'
    }
  };
};

export default {
  BUSINESS_INFO,
  SERVICES,
  SERVICE_AREAS,
  MATERIALS,
  TECHNOLOGIES,
  generateLocalBusinessSchema,
  generateProductSchema
};
