'use client';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  useTheme,
  useMediaQuery,
  Stack,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ReviewsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  // Массив отзывов
  const reviews = [
    {
      id: 1,
      customerName: 'Айгуль К.',
      rating: 5,
      text: 'Отличная работа! Перила получились очень красивые и качественные. Рекомендую всем!',
      date: '2024-12-15',
    },
    {
      id: 2,
      customerName: 'Бакыт М.',
      rating: 5,
      text: 'Быстро сделали лестницу в бассейн. Качество на высоте, цена адекватная.',
      date: '2024-12-10',
    },
    {
      id: 3,
      customerName: 'Жамила С.',
      rating: 5,
      text: 'Заказывали ограждения для балкона. Все сделали точно в срок, работой довольны.',
      date: '2024-12-05',
    },
    {
      id: 4,
      customerName: 'Эркин Т.',
      rating: 5,
      text: 'Профессиональный подход к работе. Флагшток установили быстро и качественно.',
      date: '2024-11-28',
    },
    {
      id: 5,
      customerName: 'Нургуль А.',
      rating: 5,
      text: 'Карниз в ванную комнату - просто супер! Качество отличное, выглядит стильно.',
      date: '2024-11-20',
    },
    {
      id: 6,
      customerName: 'Талант Б.',
      rating: 5,
      text: 'Поручни для мамы сделали идеально. Теперь ей удобно и безопасно.',
      date: '2024-11-15',
    },
  ];

  return (
    <Box id="reviews" sx={{ py: { xs: 6, md: 10 }, bgcolor: '#fafafa' }}>
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
            Отзывы клиентов
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
            Более 50,000 довольных клиентов за 15 лет работы
          </Typography>
        </Box>

        {/* Swiper слайдер отзывов */}
        <Box sx={{ mx: { xs: 0, md: 4 }, position: 'relative' }}>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
            slidesPerGroup={1}
            spaceBetween={isMobile ? 16 : 24}
            navigation={{
              nextEl: '.swiper-button-next-reviews',
              prevEl: '.swiper-button-prev-reviews',
            }}
            pagination={{
              el: '.swiper-pagination-reviews',
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            style={{
              paddingBottom: '50px',
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <Card
                  sx={{
                    height: 320, // Фиксированная высота для всех карточек отзывов
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    bgcolor: 'white',
                    borderRadius: 3,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <CardContent sx={{ pt: 5, pb: 3, px: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Рейтинг */}
                    <Box sx={{ display: 'flex', mb: 2 }}>
                      {[...Array(review.rating)].map((_, i) => (
                        <StarIcon
                          key={i}
                          sx={{
                            color: '#ffd700',
                            fontSize: '1.2rem',
                          }}
                        />
                      ))}
                    </Box>

                    {/* Текст отзыва */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.primary,
                        lineHeight: 1.6,
                        mb: 3,
                        fontSize: '0.95rem',
                        flexGrow: 1,
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      "{review.text}"
                    </Typography>

                    {/* Информация о клиенте */}
                    <Box
                      sx={{
                        mt: 'auto',
                        pt: 2,
                        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar
                          sx={{
                            bgcolor: theme.palette.primary.main,
                            width: 40,
                            height: 40,
                            fontSize: '0.9rem',
                            fontWeight: 600,
                          }}
                        >
                          {review.customerName.charAt(0)}
                        </Avatar>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontWeight: 600,
                              color: theme.palette.text.primary,
                            }}
                          >
                            {review.customerName}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: theme.palette.text.secondary,
                              display: 'block',
                            }}
                          >
                            {review.date}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Кастомные навигационные кнопки */}
          <Box
            className="swiper-button-prev-reviews"
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
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
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
            className="swiper-button-next-reviews"
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
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
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
            className="swiper-pagination-reviews"
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

        {/* Статистика */}
        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            p: { xs: 4, md: 6 },
            background: 'linear-gradient(135deg, rgba(211, 47, 47, 0.02) 0%, rgba(66, 66, 66, 0.02) 100%)',
            borderRadius: 4,
            border: '1px solid rgba(211, 47, 47, 0.1)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Декоративный элемент */}
          <Box
            sx={{
              position: 'absolute',
              top: -50,
              right: -50,
              width: 200,
              height: 200,
              background: 'linear-gradient(135deg, rgba(211, 47, 47, 0.05) 0%, rgba(66, 66, 66, 0.05) 100%)',
              borderRadius: '50%',
              zIndex: 0,
            }}
          />
          
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: theme.palette.text.primary,
                textAlign: 'center',
                mb: { xs: 3, md: 4 },
              }}
            >
              Наши достижения
            </Typography>
            
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(2, 1fr)',
                  md: 'repeat(4, 1fr)',
                },
                gap: { xs: 3, md: 4 },
                textAlign: 'center',
              }}
            >
              {[
                { number: '50,000+', label: 'Довольных клиентов', icon: '👥' },
                { number: '15', label: 'Лет на рынке', icon: '🏆' },
                { number: '100%', label: 'Качественная сталь', icon: '⭐' },
                { number: '24/7', label: 'Поддержка клиентов', icon: '📞' },
              ].map((stat, index) => (
                <Box 
                  key={index}
                  sx={{
                    p: { xs: 2, md: 3 },
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: 3,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      bgcolor: 'rgba(255, 255, 255, 0.95)',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '2rem',
                      mb: 1,
                    }}
                  >
                    {stat.icon}
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: theme.palette.primary.main,
                      mb: 1,
                      fontSize: { xs: '1.8rem', md: '2.5rem' },
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontWeight: 600,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ReviewsSection;
