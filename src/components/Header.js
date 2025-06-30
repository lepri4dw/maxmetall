'use client';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Image from 'next/image';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handlePhoneClick = () => {
    window.open('tel:+996555033377', '_self');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/996555033377', '_blank');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
        color: theme.palette.text.primary,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ py: 1, justifyContent: 'space-between' }}>
          {/* Логотип и название */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                width: { xs: 40, md: 50 },
                height: { xs: 40, md: 50 },
                background: 'linear-gradient(135deg, #d32f2f 0%, #424242 100%)',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                fontWeight: 'bold',
              }}
            >
              M
            </Box>
            <Box>
              <Typography
                variant={isMobile ? 'h6' : 'h5'}
                component="div"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #d32f2f 0%, #424242 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1,
                }}
              >
                MaxMetall
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: { xs: '0.7rem', md: '0.8rem' },
                  display: 'block',
                  lineHeight: 1,
                }}
              >
                15 лет на рынке
              </Typography>
            </Box>
          </Box>

          {/* Контакты */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {!isMobile && (
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  mr: 1,
                }}
              >
                +996 555 033 377
              </Typography>
            )}
            
            <IconButton
              onClick={handlePhoneClick}
              sx={{
                color: theme.palette.primary.main,
                bgcolor: 'rgba(211, 47, 47, 0.1)',
                '&:hover': {
                  bgcolor: 'rgba(211, 47, 47, 0.2)',
                },
              }}
            >
              <PhoneIcon />
            </IconButton>
            
            <Button
              onClick={handleWhatsAppClick}
              startIcon={<WhatsAppIcon />}
              variant="contained"
              sx={{
                background: '#25D366',
                color: 'white',
                '&:hover': {
                  background: '#22c55e',
                },
                px: { xs: 2, md: 3 },
                fontSize: { xs: '0.8rem', md: '0.9rem' },
              }}
            >
              {isMobile ? 'WhatsApp' : 'Написать в WhatsApp'}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
