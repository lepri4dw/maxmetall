'use client';
/**
 * DoubleGisMapComponent - Карта для отображения местоположения компании
 * 
 * Использует OpenStreetMap с маркером + кнопки для 2ГИС и Google Maps
 */
import { Box, Button, Stack, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MapIcon from '@mui/icons-material/Map';

const DoubleGisMapComponent = ({ 
  center = { lat: 42.848495, lng: 74.607330 }, 
  zoom = 16,
  height = '100%',
  width = '100%'
}) => {
  // OpenStreetMap iframe (работает без CORS проблем)
  const osmSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${center.lng-0.01},${center.lat-0.01},${center.lng+0.01},${center.lat+0.01}&layer=mapnik&marker=${center.lat},${center.lng}`;
  
  const handle2GisClick = () => {
    // Открыть 2ГИС с красивой ссылкой
    window.open('https://2gis.kg/bishkek/geo/70000001036008789', '_blank');
  };

  const handleGoogleMapsClick = () => {
    // Открыть Google Maps с красивой ссылкой
    window.open('https://maps.app.goo.gl/h8NGvegBXXMYEJgYA', '_blank');
  };

  return (
    <Box
      sx={{
        width: width,
        height: height,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* OpenStreetMap */}
      <Box sx={{ flex: 1, position: 'relative' }}>
        <iframe
          src={osmSrc}
          width="100%"
          height="100%"
          style={{
            border: 0,
            borderRadius: '8px 8px 0 0'
          }}
          allowFullScreen
          loading="lazy"
          title="Карта местоположения MaxMetall"
        />
      </Box>

      {/* Панель с информацией и кнопками */}
      <Box 
        sx={{
          bgcolor: 'white',
          p: { xs: 2, md: 3 },
          borderRadius: '0 0 8px 8px',
          borderTop: '1px solid #e0e0e0',
        }}
      >
        <Stack spacing={2}>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ 
              fontSize: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5
            }}
          >
            <LocationOnIcon sx={{ fontSize: '1.1rem', color: '#d32f2f' }} />
            Байтик Баатыра, 36/3, завод Дастан, Бишкек
          </Typography>
          
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={1.5} 
            justifyContent="center"
          >
            {/* Кнопка 2ГИС */}
            <Button
              variant="contained"
              startIcon={<DirectionsCarIcon />}
              onClick={handle2GisClick}
              sx={{
                bgcolor: '#00B956',
                color: 'white',
                '&:hover': { 
                  bgcolor: '#009644',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 12px rgba(0, 185, 86, 0.3)'
                },
                transition: 'all 0.2s ease-in-out',
                textTransform: 'none',
                fontWeight: 600,
                px: 3,
                py: 1,
                minWidth: 120,
                boxShadow: '0 2px 8px rgba(0, 185, 86, 0.2)',
              }}
            >
              2ГИС
            </Button>
            
            {/* Кнопка Google Maps */}
            <Button
              variant="contained"
              startIcon={<MapIcon />}
              onClick={handleGoogleMapsClick}
              sx={{
                bgcolor: '#4285F4',
                color: 'white',
                '&:hover': { 
                  bgcolor: '#3367D6',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 12px rgba(66, 133, 244, 0.3)'
                },
                transition: 'all 0.2s ease-in-out',
                textTransform: 'none',
                fontWeight: 600,
                px: 3,
                py: 1,
                minWidth: 120,
                boxShadow: '0 2px 8px rgba(66, 133, 244, 0.2)',
              }}
            >
              Google Maps
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default DoubleGisMapComponent;
