'use client';
/**
 * LogoSlider Component
 * 
 * Displays an infinite carousel of partner company logos:
 * - Seamless, continuous animation with Swiper
 * - Grayscale logos that colorize on hover
 * - Responsive layout with different items per view based on screen size
 * - No navigation arrows or pagination for clean look
 * 
 * Positioned before ContactsSection to build trust before the call to action.
 */
import { Box, Container, Typography, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';

const LogoSlider = () => {
  const theme = useTheme();

  // Список компаний-партнеров (используем имена файлов, которые легко будет заменить на реальные)
  const partners = [
    { name: 'Аю Групп', logo: '/images/partners/partner-1.png' },
    { name: 'Школа Газпром', logo: '/images/partners/partner-2.png' },
    { name: 'Нурзаман Строй', logo: '/images/partners/partner-3.png' },
    { name: 'Элит Хаус', logo: '/images/partners/partner-4.png' },
    { name: 'Государственная Резиденция', logo: '/images/partners/partner-5.png' },
    { name: 'Имарат Групп', logo: '/images/partners/partner-6.png' },
    { name: 'Борсан Констракшн', logo: '/images/partners/partner-7.png' },
    { name: 'Авента Инжиниринг', logo: '/images/partners/partner-8.png' },
    { name: 'Ихлас Строй', logo: '/images/partners/partner-9.png' },
  ];

  return (
    <Box sx={{ py: { xs: 5, md: 8 }, bgcolor: 'white' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
        {/* Заголовок секции */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 5 } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: theme.palette.text.primary,
              mb: 2,
            }}
          >
            Нам доверяют
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Мы гордимся сотрудничеством с ведущими компаниями Бишкека и Кыргызстана
          </Typography>
        </Box>

        {/* Слайдер логотипов */}
        <Box 
          sx={{ 
            mt: 3,
            overflow: 'hidden',
            '& .swiper-wrapper': {
              transitionTimingFunction: 'linear !important',
            },
          }}
        >
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={5}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 8,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 12,
              },
            }}
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    height: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.8,
                    transition: 'all 0.3s ease',
                    transform: 'scale(1)',
                    '&:hover': {
                      opacity: 1,
                      transform: 'scale(1.1)',
                      filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.15))',
                    },
                  }}
                >
                  {/* Здесь будет либо изображение логотипа, либо fallback с текстом */}
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Попытка загрузить изображение логотипа */}
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={60}
                      style={{
                        objectFit: 'contain',
                        maxWidth: '100%',
                        height: 'auto',
                      }}
                      onError={(e) => {
                        // При ошибке загрузки показываем текстовый fallback
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    {/* Fallback на случай отсутствия изображения */}
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                        textAlign: 'center',
                        display: 'none', // Скрыто по умолчанию
                      }}
                    >
                      {partner.name}
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default LogoSlider;
