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
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
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
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isVerySmallMobile = useMediaQuery('(max-width:400px)');
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const products = [
    {
      title: 'Перила/Ограждения',
      description: 'Стильные и надежные перила и ограждения для лестниц, балконов и террас из нержавеющей стали.',
      icon: <SecurityIcon />,
      image: '/images/products/railings.jpg', // Путь для изображения перил/ограждений
    },
    {
      title: 'Лестницы в бассейн',
      description: 'Специальные лестницы для бассейнов с антискользящим покрытием.',
      icon: <PoolIcon />,
      image: '/images/products/pool-stairs.jpg', // Путь для изображения лестниц в бассейн
    },
    {
      title: 'Карнизы в ванну',
      description: 'Влагостойкие карнизы для ванных комнат и душевых кабин.',
      icon: <ShowerIcon />,
      image: '/images/products/shower-rods.jpg', // Путь для изображения карнизов
    },
    {
      title: 'Поручни/ЛОВЗ',
      description: 'Поручни для людей с ограниченными возможностями здоровья, соответствующие всем стандартам.',
      icon: <AccessibilityIcon />,
      image: '/images/products/accessibility-rails.jpg', // Путь для изображения поручней ЛОВЗ
    },
    {
      title: 'Флагштоки',
      description: 'Прочные флагштоки различной высоты для установки государственных и корпоративных флагов.',
      icon: <FlagIcon />,
      image: '/images/products/flagpoles.jpg', // Путь для изображения флагштоков
    },
    {
      title: 'Трубы',
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
    {
      title: 'Капсулы времени',
      description: 'Специальные капсулы для закладки документов и памятных предметов на долгие годы.',
      icon: <BuildIcon />,
      image: '/images/products/capsules.jpg', // Путь для изображения капсул времени
    },
  ];

  const handleContactClick = () => {
    window.open('https://wa.me/996555033377', '_blank');
  };

  return (
    <Box id="products" sx={{ py: { xs: 6, md: 10 }, bgcolor: '#fafafa' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
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
            modules={[Navigation, Pagination, A11y, Autoplay]}
            slidesPerView={useMediaQuery('(max-width:720px)') ? 1 : isTablet ? 2 : 3}
            slidesPerGroup={1}
            spaceBetween={24}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next-products',
              prevEl: '.swiper-button-prev-products',
            }}
            pagination={{
              el: '.swiper-pagination-products',
              clickable: true,
              dynamicBullets: false,
            }}
            loop={true}
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
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '16px',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
                      '&::before': {
                        opacity: 1,
                      },
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      borderRadius: '16px',
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.02) 100%)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      zIndex: 1,
                    },
                  }}
                >
                  {/* Изображение продукта */}
                  <Box
                    sx={{
                      height: 200,
                      position: 'relative',
                      overflow: 'hidden',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '4px',
                        background: 'linear-gradient(90deg, rgba(211,47,47,0.7) 0%, rgba(245,81,95,0.9) 100%)',
                      }
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
                      variant="outlined"
                      onClick={(e) => {
                        e.stopPropagation();
                        const contactsSection = document.getElementById('contacts');
                        if (contactsSection) {
                          contactsSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      sx={{
                        mt: 2,
                        fontWeight: 600,
                        borderRadius: '30px',
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        textTransform: 'none',
                        py: 0.8,
                        px: 2,
                        transition: 'all 0.3s ease',
                        zIndex: 2,
                        position: 'relative',
                        '&:hover': {
                          background: 'linear-gradient(90deg, rgba(211,47,47,0.05) 0%, rgba(245,81,95,0.1) 100%)',
                          borderColor: theme.palette.primary.dark,
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 10px rgba(211, 47, 47, 0.15)',
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
              display: { xs: isSmallMobile ? 'none' : 'flex', md: 'flex' },
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
              display: { xs: isSmallMobile ? 'none' : 'flex', md: 'flex' },
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
              bottom: '10px !important',
              left: '50% !important',
              transform: 'translateX(-50%) !important',
              display: 'flex !important',
              justifyContent: 'center !important',
              alignItems: 'center !important',
              gap: '8px !important',
              width: 'auto !important',
              height: 'auto !important',
              zIndex: 10,
              '& .swiper-pagination-bullet': {
                backgroundColor: 'rgba(0, 0, 0, 0.3) !important',
                opacity: '1 !important',
                width: '10px !important',
                height: '10px !important',
                borderRadius: '50% !important',
                transition: 'all 0.3s ease !important',
                margin: '0 4px !important',
                cursor: 'pointer !important',
                border: 'none !important',
                outline: 'none !important',
              },
              '& .swiper-pagination-bullet-active': {
                backgroundColor: `${theme.palette.primary.main} !important`,
                transform: 'scale(1.3) !important',
              },
            }}
          />
        </Box>

        {/* Современный призыв к действию */}
        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            position: 'relative',
            mx: { xs: 1, sm: 2, md: 'auto' },
            maxWidth: '800px',
          }}
        >
          <Box
            sx={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
              border: '1px solid #e9ecef',
              borderRadius: { xs: '20px', md: '24px' },
              position: 'relative',
              overflow: 'hidden',
              p: { xs: 3, sm: 4, md: 5 },
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #d32f2f 0%, #f5515f 100%)',
              },
            }}
          >
            <Box 
              sx={{ 
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  mb: { xs: 1.5, md: 2 },
                  fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
                  lineHeight: 1.3,
                }}
              >
                Нужна консультация?
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                  lineHeight: 1.6,
                  mb: { xs: 3, md: 4 },
                  maxWidth: '500px',
                  mx: 'auto',
                }}
              >
                Свяжитесь с нами для обсуждения вашего проекта
              </Typography>
              
              <Button
                variant="contained"
                onClick={(e) => {
                  e.preventDefault();
                  const contactsSection = document.getElementById('contacts');
                  if (contactsSection) {
                    contactsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                sx={{
                  py: { xs: 1.5, md: 1.8 },
                  px: { xs: 3, md: 4 },
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  fontWeight: 600,
                  borderRadius: '50px',
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                  textTransform: 'none',
                  boxShadow: '0 4px 20px rgba(211, 47, 47, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                    boxShadow: '0 8px 25px rgba(211, 47, 47, 0.4)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Связаться с нами
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductsSection;
