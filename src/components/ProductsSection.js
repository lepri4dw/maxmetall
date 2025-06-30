'use client';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Button,
} from '@mui/material';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BuildIcon from '@mui/icons-material/Build';
import PoolIcon from '@mui/icons-material/Pool';
import SecurityIcon from '@mui/icons-material/Security';
import FlagIcon from '@mui/icons-material/Flag';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import ShowerIcon from '@mui/icons-material/Shower';
import PipeIcon from '@mui/icons-material/Plumbing';
import SettingsIcon from '@mui/icons-material/Settings';

const ProductsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const products = [
    {
      title: 'Перила',
      description: 'Стильные и надежные перила для лестниц, балконов и террас из нержавеющей стали.',
      icon: <SecurityIcon />,
      image: '/images/products/railings.jpg', // Путь для изображения перил
    },
    {
      title: 'Ограждения',
      description: 'Качественные ограждения для безопасности и эстетики вашего пространства.',
      icon: <BuildIcon />,
      image: '/images/products/fencing.jpg', // Путь для изображения ограждений
    },
    {
      title: 'Лестницы в бассейн',
      description: 'Специальные лестницы для бассейнов с антискользящим покрытием.',
      icon: <PoolIcon />,
      image: '/images/products/pool-stairs.jpg', // Путь для изображения лестниц в бассейн
    },
    {
      title: 'Флагштоки',
      description: 'Прочные флагштоки различной высоты для установки государственных и корпоративных флагов.',
      icon: <FlagIcon />,
      image: '/images/products/flagpoles.jpg', // Путь для изображения флагштоков
    },
    {
      title: 'Капсулы для закладки',
      description: 'Специальные капсулы для закладки документов и памятных предметов.',
      icon: <BuildIcon />,
      image: '/images/products/capsules.jpg', // Путь для изображения капсул
    },
    {
      title: 'ЛОВЗ поручни',
      description: 'Поручни для людей с ограниченными возможностями здоровья, соответствующие всем стандартам.',
      icon: <AccessibilityIcon />,
      image: '/images/products/accessibility-rails.jpg', // Путь для изображения поручней ЛОВЗ
    },
    {
      title: 'Карнизы в ванную/душевую',
      description: 'Влагостойкие карнизы для ванных комнат и душевых кабин.',
      icon: <ShowerIcon />,
      image: '/images/products/shower-rods.jpg', // Путь для изображения карнизов
    },
    {
      title: 'Труба',
      description: 'Трубы из нержавеющей стали различного диаметра для любых целей.',
      icon: <PipeIcon />,
      image: '/images/products/pipes.jpg', // Путь для изображения труб
    },
    {
      title: 'Фурнитура',
      description: 'Широкий ассортимент фурнитуры и комплектующих из нержавеющей стали.',
      icon: <SettingsIcon />,
      image: '/images/products/hardware.jpg', // Путь для изображения фурнитуры
    },
  ];

  const handleContactClick = () => {
    window.open('https://wa.me/996555033377', '_blank');
  };

  return (
    <Box id="products" sx={{ py: { xs: 6, md: 10 }, bgcolor: '#fafafa' }}>
      <Container maxWidth="lg">
        {/* Заголовок секции */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: theme.palette.text.primary,
              mb: 2,
            }}
          >
            Наша продукция
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Изделия из нержавеющей стали премиум класса с 15-летним опытом производства
          </Typography>
        </Box>

        {/* Swiper слайдер продуктов */}
        <Box sx={{ mx: { xs: 0, md: 4 }, position: 'relative' }}>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
            slidesPerGroup={1}
            spaceBetween={isMobile ? 16 : 24}
            navigation={{
              nextEl: '.swiper-button-next-products',
              prevEl: '.swiper-button-prev-products',
            }}
            pagination={{
              el: '.swiper-pagination-products',
              clickable: true,
              dynamicBullets: true,
            }}
            loop={false}
            style={{
              paddingBottom: '50px',
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    height: 420, // Фиксированная высота для всех карточек
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
                    },
                  }}
                  onClick={handleContactClick}
                >
                  {/* Изображение продукта */}
                  <Box
                    sx={{
                      height: 200,
                      position: 'relative',
                      overflow: 'hidden',
                      borderBottom: '3px solid',
                      borderColor: theme.palette.primary.main,
                    }}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback для случая если изображение не загрузится */}
                    <Box
                      sx={{
                        display: 'none',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        bgcolor: 'rgba(211, 47, 47, 0.05)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        gap: 1,
                        color: theme.palette.primary.main,
                      }}
                    >
                      <Box sx={{ fontSize: '3rem' }}>
                        {product.icon}
                      </Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: theme.palette.text.secondary,
                          textAlign: 'center',
                          px: 2,
                        }}
                      >
                        Фото: {product.image}
                      </Typography>
                    </Box>
                  </Box>

                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      p: { xs: 2, md: 3 },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                        mb: 1,
                      }}
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                        flexGrow: 1,
                      }}
                    >
                      {product.description}
                    </Typography>
                    <Button
                      variant="text"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        textTransform: 'none',
                        p: 0,
                        mt: 2,
                        justifyContent: 'flex-start',
                        '&:hover': {
                          bgcolor: 'rgba(211, 47, 47, 0.05)',
                        },
                      }}
                    >
                      Узнать подробнее →
                    </Button>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Кастомные навигационные кнопки */}
          <Box
            className="swiper-button-prev-products"
            sx={{
              position: 'absolute',
              top: '45%',
              left: { xs: 10, md: -40 },
              transform: 'translateY(-50%)',
              zIndex: 2,
              width: 44,
              height: 44,
              bgcolor: 'white',
              borderRadius: '50%',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: theme.palette.primary.main,
                color: 'white',
              },
              '&:after': {
                content: '"❮"',
                fontSize: '16px',
                fontWeight: 'bold',
              },
            }}
          />

          <Box
            className="swiper-button-next-products"
            sx={{
              position: 'absolute',
              top: '45%',
              right: { xs: 10, md: -40 },
              transform: 'translateY(-50%)',
              zIndex: 2,
              width: 44,
              height: 44,
              bgcolor: 'white',
              borderRadius: '50%',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: theme.palette.primary.main,
                color: 'white',
              },
              '&:after': {
                content: '"❯"',
                fontSize: '16px',
                fontWeight: 'bold',
              },
            }}
          />

          {/* Кастомная пагинация */}
          <Box
            className="swiper-pagination-products"
            sx={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              justifyContent: 'center',
              gap: 1,
              '& .swiper-pagination-bullet': {
                bgcolor: 'rgba(0, 0, 0, 0.2)',
                opacity: 1,
                width: 10,
                height: 10,
                borderRadius: '50%',
                transition: 'all 0.3s ease',
              },
              '& .swiper-pagination-bullet-active': {
                bgcolor: theme.palette.primary.main,
                transform: 'scale(1.2)',
              },
            }}
          />
        </Box>

        {/* Призыв к действию */}
        <Box
          sx={{
            textAlign: 'center',
            mt: { xs: 4, md: 6 },
            p: { xs: 3, md: 4 },
            bgcolor: 'white',
            borderRadius: 3,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: theme.palette.text.primary,
              mb: 2,
            }}
          >
            Нужна консультация или индивидуальный проект?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              mb: 3,
              maxWidth: 500,
              mx: 'auto',
            }}
          >
            Свяжитесь с нами для обсуждения вашего проекта. Работаем по предварительному звонку.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleContactClick}
            sx={{
              py: 1.5,
              px: 4,
              fontSize: '1.1rem',
              fontWeight: 600,
            }}
          >
            Связаться с нами
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductsSection;
