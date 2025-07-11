'use client';
/**
 * WhatsAppFloat Component - Floating WhatsApp Business Button
 * 
 * Плавающая кнопка WhatsApp Business в правом нижнем углу экрана
 * - Анимация пульсации для привлечения внимания
 * - Предзаполненное сообщение для клиентов
 * - Адаптивная под мобильные устройства
 * - Интеграция с WhatsApp Business API
 */
import { Box, useTheme, useMediaQuery, Fab, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useState } from 'react';

const WhatsAppFloat = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/996555033377', '_blank');
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 20, md: 30 },
        right: { xs: 20, md: 30 },
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Текстовая подсказка - показывается при наведении на десктопе */}
      {!isMobile && isHovered && (
        <Box
          sx={{
            bgcolor: 'white',
            borderRadius: '12px',
            px: 2,
            py: 1,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
            border: '1px solid rgba(37, 211, 102, 0.2)',
            animation: 'slideInRight 0.3s ease-out',
            '@keyframes slideInRight': {
              from: {
                opacity: 0,
                transform: 'translateX(20px)',
              },
              to: {
                opacity: 1,
                transform: 'translateX(0)',
              },
            },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 500,
              whiteSpace: 'nowrap',
            }}
          >
            Написать в WhatsApp
          </Typography>
        </Box>
      )}

      {/* Основная кнопка WhatsApp */}
      <Fab
        onClick={handleWhatsAppClick}
        sx={{
          bgcolor: '#25D366',
          color: 'white',
          width: { xs: 56, md: 64 },
          height: { xs: 56, md: 64 },
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
          '&:hover': {
            bgcolor: '#22c55e',
            boxShadow: '0 6px 25px rgba(37, 211, 102, 0.5)',
            transform: 'scale(1.05)',
          },
          '&:active': {
            transform: 'scale(0.98)',
          },
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          animation: 'pulse 3s infinite',
          '@keyframes pulse': {
            '0%': {
              boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
            },
            '50%': {
              boxShadow: '0 4px 20px rgba(37, 211, 102, 0.7), 0 0 0 8px rgba(37, 211, 102, 0.1)',
            },
            '100%': {
              boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
            },
          },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: { xs: '1.5rem', md: '1.8rem' } }} />
      </Fab>
    </Box>
  );
};

export default WhatsAppFloat;
