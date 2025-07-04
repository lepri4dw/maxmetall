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
    window.open('tel:+996555918355', '_self');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/996555918355', '_blank');
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
                width: { xs: 50, sm: 50, md: 50 },
                height: { xs: 50, sm: 50, md: 50 },
                borderRadius: 2,
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#000',
                p: '10px',
              }}
            >
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
                  variant={isMobile ? 'h6' : 'h5'}
                  component="div"
                  sx={{
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #d32f2f 0%, #424242 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1,
                    fontSize: { xs: '1.3rem', sm: '1.4rem', md: '1.5rem' },
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
                      fontSize: { xs: '0.8rem', sm: '0.8rem', md: '0.8rem' },
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
                +996 555 918 355
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
                width: { xs: 42, md: 44 },
                height: { xs: 42, md: 44 },
              }}
            >
              <PhoneIcon fontSize={isSmallMobile ? "medium" : "medium"} />
            </IconButton>
            
            <Button
              onClick={handleWhatsAppClick}
              startIcon={<WhatsAppIcon fontSize={isSmallMobile ? "medium" : "medium"} />}
              variant="contained"
              size={isSmallMobile ? "medium" : "medium"}
              sx={{
                background: '#25D366',
                color: 'white',
                '&:hover': {
                  background: '#22c55e',
                },
                px: { xs: 2, sm: 2.5, md: 3 },
                py: { xs: 1, md: 1.1 },
                fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.9rem' },
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
