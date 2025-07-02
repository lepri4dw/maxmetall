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
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isVerySmallMobile = useMediaQuery('(max-width:400px)');

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
      <Container maxWidth="lg" sx={{ px: { xs: '0.5rem', sm: '1rem' } }}>
        <Toolbar 
          sx={{ 
            py: 1, 
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%'
          }}
        >
          {/* Логотип и название */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1.5
            }}
          >
            <Box
              sx={{
                width: { xs: 36, sm: 40, md: 50 },
                height: { xs: 36, sm: 40, md: 50 },
                background: 'linear-gradient(135deg, #d32f2f 0%, #424242 100%)',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
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
                    fontSize: { xs: '0.95rem', sm: '1.25rem', md: '1.5rem' },
                    whiteSpace: 'nowrap'
                  }}
                >
                  MaxMetall
                </Typography>
                {!isSmallMobile && (
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.8rem' },
                      display: 'block',
                      lineHeight: 1,
                    }}
                  >
                    15 лет на рынке
                  </Typography>
                )}
              </Box>
          </Box>

          {/* Контакты */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1
            }}
          >
            {!isMobile && (
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  mr: 1,
                  fontSize: { sm: '1rem', md: '1.2rem' }
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
                width: { xs: 36, md: 40 },
                height: { xs: 36, md: 40 },
              }}
            >
              <PhoneIcon fontSize={isSmallMobile ? "small" : "medium"} />
            </IconButton>
            
            <Button
              onClick={handleWhatsAppClick}
              startIcon={<WhatsAppIcon fontSize={isSmallMobile ? "small" : "medium"} />}
              variant="contained"
              size={isSmallMobile ? "small" : "medium"}
              sx={{
                background: '#25D366',
                color: 'white',
                '&:hover': {
                  background: '#22c55e',
                },
                px: { xs: 1.5, sm: 2, md: 3 },
                py: { xs: 0.7, md: 0.9 },
                fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
                whiteSpace: 'nowrap',
              }}
            >
              {isSmallMobile ? 'WhatsApp' : isMobile ? 'Написать' : 'Написать в WhatsApp'}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
