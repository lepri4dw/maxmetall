'use client';
/**
 * AchievementsSection Component
 * 
 * Displays company achievements and statistics in visually appealing cards:
 * - Customer count
 * - Years in business
 * - Steel quality
 * - Customer support availability
 * 
 * Features gradient backgrounds, hover animations, and is fully responsive.
 * Positioned after HeroSection to establish company credibility early.
 */
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';

const AchievementsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isVerySmallMobile = useMediaQuery('(max-width:400px)');
  const isTinyMobile = useMediaQuery('(max-width:360px)');

  // Анимация для чисел при прокрутке (если бы у нас был framer-motion)
  // Это пример использования, но нужно будет установить framer-motion
  const countUpAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    }
  };

  const statsItems = [
    { number: '50,000+', label: 'Довольных клиентов', icon: '👥', color: '#d32f2f' },
    { number: '15', label: 'Лет на рынке', icon: '🏆', color: '#f5515f' },
    { number: '100%', label: 'Качественная сталь', icon: '⭐', color: '#424242' },
    { number: '24/7', label: 'Поддержка клиентов', icon: '📞', color: '#d32f2f' },
  ];

  return (
    <Box 
      id="achievements" 
      sx={{ 
        py: { xs: 6, md: 10 },
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Декоративные элементы на фоне */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(211, 47, 47, 0.03) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(66, 66, 66, 0.02) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />
      
      <Container maxWidth="lg" sx={{ 
        px: { xs: isTinyMobile ? 1 : 2, sm: 3 },
        position: 'relative',
        zIndex: 1 
      }}>
        {/* Заголовок */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #d32f2f 0%, #424242 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: { xs: 1.5, md: 2 },
              fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' },
            }}
          >
            Наши достижения
          </Typography>
          {!isSmallMobile && (
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                fontWeight: 400,
              }}
            >
              За 15 лет работы мы достигли высоких результатов в производстве изделий из нержавейки
            </Typography>
          )}
        </Box>
        
        {/* Статистика */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: isTinyMobile ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: { xs: 2, md: 3 },
            maxWidth: 1000,
            mx: 'auto',
          }}
        >
          {statsItems.map((stat, index) => (
            <Box
              key={index}
              sx={{
                p: { xs: 2, sm: 2.5, md: 3 },
                bgcolor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                textAlign: 'center',
                position: 'relative',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                overflow: 'hidden',
                minHeight: { xs: '140px', sm: '150px', md: '180px' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  transform: { xs: 'none', md: 'translateY(-12px) scale(1.02)' },
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
                  '&::before': {
                    transform: 'translateX(0)',
                  },
                  '& .stat-icon': {
                    transform: 'scale(1.1) rotate(5deg)',
                  }
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  background: `linear-gradient(90deg, ${stat.color}, ${stat.color}cc)`,
                  transform: 'translateX(-100%)',
                  transition: 'transform 0.4s ease',
                }
              }}
            >
              <Typography
                className="stat-icon"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.2rem', md: '2.5rem' },
                  mb: { xs: 1, md: 1.5 },
                  transition: 'all 0.3s ease',
                  filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))',
                }}
              >
                {stat.icon}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  color: stat.color,
                  mb: { xs: 0.5, md: 1 },
                  fontSize: { xs: '1.6rem', sm: '1.8rem', md: '2.2rem' },
                  lineHeight: 1,
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                {stat.number}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                  fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.95rem' },
                  opacity: 0.8,
                  lineHeight: 1.3,
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default AchievementsSection;
