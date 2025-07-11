'use client';
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Image from 'next/image';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handlePhoneClick = () => {
    window.open('tel:+996555918355', '_self');
  };

  const handlePhoneClickOlya = () => {
    window.open('tel:+996555033377', '_self');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/996555033377', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/maxmetall.kg', '_blank');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box 
      component="footer" 
      role="contentinfo"
      sx={{
        bgcolor: theme.palette.secondary.dark,
        color: 'white',
        pt: { xs: 4, md: 6 },
        pb: { xs: 2, md: 3 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {/* Информация о компании */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              {/* Логотип и название */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{
                  width: 50,
                  height: 50,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}>
                  <Image 
                    src="/images/favicon.jpg"
                    alt="MaxMetall Logo"
                    width={50}
                    height={50}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '4px',
                    }}
                  />
                </Box>
                <Box>
                  <Typography 
                    variant="h5" 
                    sx={{ fontWeight: 700, lineHeight: 1 }}
                  >
                    MaxMetall
                  </Typography>
                  <Typography 
                    variant="caption"
                    sx={{ color: 'rgba(255, 255, 255, 0.7)', display: 'block' }}
                  >
                    15 лет на рынке
                  </Typography>
                </Box>
              </Box>

              <Typography 
                variant="body2"
                sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}
              >
                Производство изделий из нержавеющей стали премиум класса. 
                Перила, ограждения, лестницы для бассейнов, карнизы и другие изделия.
              </Typography>

              {/* Социальные сети */}
              <Stack direction="row" spacing={1}>
                <IconButton 
                  onClick={handleWhatsAppClick}
                  sx={{
                    color: '#25D366',
                    bgcolor: 'rgba(37, 211, 102, 0.1)',
                    '&:hover': { bgcolor: 'rgba(37, 211, 102, 0.2)' },
                  }}
                >
                  <WhatsAppIcon />
                </IconButton>
                <IconButton 
                  onClick={handleInstagramClick}
                  sx={{
                    color: '#E4405F',
                    bgcolor: 'rgba(228, 64, 95, 0.1)',
                    '&:hover': { bgcolor: 'rgba(228, 64, 95, 0.2)' },
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton 
                  onClick={handlePhoneClick}
                  sx={{
                    color: theme.palette.primary.light,
                    bgcolor: 'rgba(255, 82, 82, 0.1)',
                    '&:hover': { bgcolor: 'rgba(255, 82, 82, 0.2)' },
                  }}
                >
                  <PhoneIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          {/* Контакты */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Typography 
                variant="h6"
                sx={{ fontWeight: 600, mb: 1 }}
              >
                Контакты
              </Typography>

              {/* Телефоны */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <PhoneIcon sx={{ color: theme.palette.primary.light, mt: 0.5 }} />
                <Box>
                  <Typography 
                    variant="body2"
                    sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 0.5 }}
                  >
                    Максим: <Typography 
                      component="span"
                      sx={{
                        cursor: 'pointer',
                      }}
                      onClick={handlePhoneClick}
                    >
                      +996 555 918 355
                    </Typography>
                  </Typography>
                  <Typography 
                    variant="body2"
                    sx={{ color: 'rgba(255, 255, 255, 0.9)' }}
                  >
                    Оля: <Typography
                      component="span"
                      sx={{
                        cursor: 'pointer',
                      }}
                      onClick={handlePhoneClickOlya}
                    >
                      +996 555 033 377
                    </Typography>
                  </Typography>
                </Box>
              </Box>

              {/* Адрес */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <LocationOnIcon sx={{ color: theme.palette.primary.light, mt: 0.5 }} />
                <Box>
                  <Typography 
                    variant="body2"
                    sx={{ color: 'rgba(255, 255, 255, 0.9)' }}
                  >
                    Байтик Баатыра, 36/3<br />
                    завод Дастан, Бишкек, Кыргызстан
                  </Typography>
                </Box>
              </Box>

              {/* График работы */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <ScheduleIcon sx={{ color: theme.palette.primary.light, mt: 0.5 }} />
                <Box>
                  <Typography 
                    variant="body2"
                    sx={{ color: 'rgba(255, 255, 255, 0.9)' }}
                  >
                    Приезжать по предварительному звонку!<br />
                    Понедельник - Пятница: 07:00 - 16:00<br />
                    Суббота: 08:00 - 10:00<br />
                    Воскресенье: закрыто
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>

          {/* Навигация */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Typography 
                variant="h6"
                sx={{ fontWeight: 600, mb: 1 }}
              >
                Навигация
              </Typography>

              <Stack spacing={1}>
                <Typography 
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    cursor: 'pointer',
                    '&:hover': { color: theme.palette.primary.light },
                  }}
                  onClick={() => scrollToSection('products')}
                >
                  Продукция
                </Typography>
                <Typography 
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    cursor: 'pointer',
                    '&:hover': { color: theme.palette.primary.light },
                  }}
                  onClick={() => scrollToSection('gallery')}
                >
                  Галерея
                </Typography>
                <Typography 
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    cursor: 'pointer',
                    '&:hover': { color: theme.palette.primary.light },
                  }}
                  onClick={() => scrollToSection('reviews')}
                >
                  Отзывы
                </Typography>
                <Typography 
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    cursor: 'pointer',
                    '&:hover': { color: theme.palette.primary.light },
                  }}
                  onClick={() => scrollToSection('contacts')}
                >
                  Контакты
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Нижняя часть футера */}
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CopyrightIcon sx={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)' }} />
            <Typography 
              variant="body2"
              sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              {new Date().getFullYear()} MaxMetall. Все права защищены.
            </Typography>
          </Box>

          <Typography 
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              textAlign: { xs: 'center', md: 'right' },
            }}
          >
            Изделия из нержавеющей стали в Бишкеке
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;