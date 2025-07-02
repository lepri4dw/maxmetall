'use client';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  Stack,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = theme.breakpoints.down('sm');

  const handleCallClick = () => {
    window.open('tel:+996555033377', '_self');
  };

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Фоновое изображение - разные для мобильных и десктопных */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: {
            xs: 'url(/images/hero-bg-mobile.jpg)', // Изображение для мобильных устройств
            sm: 'url(/images/hero-bg.jpg)', // Изображение для планшетов и десктопов
          },
          backgroundSize: 'cover',
          backgroundPosition: { xs: 'center', md: 'center' },
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)',
            zIndex: 2,
          }
        }}
      />
      
      <Container maxWidth="lg" sx={{ 
        position: 'relative', 
        zIndex: 3, 
        textAlign: 'center',
        px: { xs: 1, sm: 2, md: 3 }  
      }}>
        {/* Заголовок с градиентом */}
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            color: '#ffffff', // Светлый текст
            lineHeight: 1.1,
            mb: 4,
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
            maxWidth: '900px',
            mx: 'auto',
            letterSpacing: '-0.02em',
          }}
        >
          Изделия из{' '}
          <Box
            component="span"
            sx={{
              background: 'linear-gradient(135deg, #f5515f 0%, #ffd3d1 50%, #d3d3d3 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: 'none',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-3px',
                left: 0,
                width: '100%',
                height: '2px',
                background: 'linear-gradient(90deg, rgba(245,81,95,0) 0%, rgba(245,81,95,1) 50%, rgba(245,81,95,0) 100%)',
              }
            }}
          >
            нержавеющей стали
          </Box>{' '}
          премиум класса
        </Typography>

        {/* Кнопки */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          sx={{ mt: 5 }}
          justifyContent="center"
        >
          <Button
            variant="contained"
            size="large"
            onClick={scrollToProducts}
            sx={{
              py: 1.8,
              px: { xs: 4, md: 5 },
              fontSize: { xs: '1rem', md: '1.1rem' },
              fontWeight: 600,
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #d32f2f 0%, #f5515f 100%)',
              boxShadow: '0 10px 20px rgba(211, 47, 47, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 15px 25px rgba(211, 47, 47, 0.4)',
                transform: 'translateY(-2px)'
              }
            }}
          >
            Наши услуги
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={
              <WhatsAppIcon 
                sx={{ 
                  fontSize: { xs: '1.2rem', md: '1.8rem' } + ' !important',
                  width: { xs: '1.2rem', md: '1.8rem' },
                  height: { xs: '1.2rem', md: '1.8rem' }
                }} 
              />
            }
            onClick={() => window.open('https://wa.me/996555033377', '_blank')}
            sx={{
              py: 1.8,
              px: { xs: 4, md: 5 },
              fontSize: { xs: '1rem', md: '1.1rem' },
              fontWeight: 600,
              borderRadius: '50px',
              borderColor: '#ffffff',
              borderWidth: '2px',
              color: '#ffffff',
              backdropFilter: 'blur(5px)',
              background: 'rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: '#25D366',
                background: 'rgba(37, 211, 102, 0.15)',
                transform: 'translateY(-2px)'
              }
            }}
          >
            Связаться с нами
          </Button>
        </Stack>
      </Container>

      {/* Стрелка вниз */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          zIndex: 3,
          animation: 'bounce 2s infinite ease-in-out',
          '@keyframes bounce': {
            '0%, 20%, 50%, 80%, 100%': {
              transform: 'translateX(-50%) translateY(0)',
            },
            '40%': {
              transform: 'translateX(-50%) translateY(-15px)',
            },
            '60%': {
              transform: 'translateX(-50%) translateY(-10px)',
            },
          },
        }}
        onClick={scrollToProducts}
      >
        <KeyboardArrowDownIcon
          sx={{
            fontSize: '3rem',
            color: '#ffffff',
            filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.3))'
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
