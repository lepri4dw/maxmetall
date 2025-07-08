'use client';
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { useState } from 'react';

const GallerySection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Массив изображений для галереи - только из папки gallery
  const galleryImages = [
    // Вертикальные фото (высокие) - соотношение примерно 3:4 или 2:3
    {
      src: '/images/gallery/vertical-1.jpg',
      alt: 'Карниз для ванной из нержавеющей стали MaxMetall Бишкек',
      title: 'Карниз для ванной',
      type: 'vertical'
    },
    { 
      src: '/images/gallery/vertical-2.jpg', 
      alt: 'Перила для лестницы из нержавейки MaxMetall Бишкек', 
      title: 'Перила для лестницы', 
      type: 'vertical' 
    },
    { 
      src: '/images/gallery/vertical-3.jpg', 
      alt: 'Флагштоки из нержавеющей стали MaxMetall Бишкек', 
      title: 'Флагштоки', 
      type: 'vertical' 
    },
    
    // Квадратные фото (1:1)
    { 
      src: '/images/gallery/square-1.jpg', 
      alt: 'Перила для лестницы AUCA из нержавейки MaxMetall Бишкек', 
      title: 'Перила AUCA', 
      type: 'square' 
    },
    { 
      src: '/images/gallery/square-2.jpg', 
      alt: 'Лестница в бассейн из нержавеющей стали MaxMetall Бишкек', 
      title: 'Лестница в бассейн', 
      type: 'square' 
    },
    { 
      src: '/images/gallery/square-3.jpg', 
      alt: 'Карниз для ванной комнаты из нержавейки MaxMetall Бишкек', 
      title: 'Карниз для ванной', 
      type: 'square' 
    },
    { 
      src: '/images/gallery/square-4.jpg', 
      alt: 'Капсула времени из нержавеющей стали MaxMetall Бишкек', 
      title: 'Капсула времени', 
      type: 'square' 
    },
    
    // Горизонтальные фото (широкие) - соотношение примерно 4:3 или 3:2
    { 
      src: '/images/gallery/horizontal-1.jpg', 
      alt: 'Перила для лестницы из нержавейки MaxMetall работы Бишкек', 
      title: 'Перила для лестницы', 
      type: 'horizontal' 
    },
    { 
      src: '/images/gallery/horizontal-2.jpg', 
      alt: 'Лестница в бассейн из нержавеющей стали MaxMetall проект Бишкек', 
      title: 'Лестница в бассейн', 
      type: 'horizontal' 
    },
    { 
      src: '/images/gallery/horizontal-3.jpg', 
      alt: 'Лестница в бассейн бассейновая из нержавейки MaxMetall Бишкек', 
      title: 'Лестница в бассейн', 
      type: 'horizontal' 
    },
    { 
      src: '/images/gallery/horizontal-4.jpg', 
      alt: 'Поручни ЛОВЗ для инвалидов из нержавеющей стали MaxMetall Бишкек', 
      title: 'Поручни ЛОВЗ', 
      type: 'horizontal' 
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedImage(null);
  };

  return (
    <Box id="gallery" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'white' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
        {/* Заголовок секции */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              color: theme.palette.text.primary,
              mb: 2,
            }}
          >
            Галерея работ из нержавеющей стали
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
            Качественные фотографии наших работ. Только наша продукция, только наши проекты в Бишкеке.
          </Typography>
        </Box>

        {/* Masonry галерея с правильными пропорциями */}
        <Box
          sx={{ 
            width: '100%', 
            maxHeight: { xs: '70vh', md: '80vh' },
            overflow: 'auto',
            // Красивый скроллбар
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#d32f2f',
              borderRadius: '3px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
            },
          }}
        >
          <Box
            sx={{
              columns: { xs: 2, sm: 3, md: 4 },
              columnGap: { xs: 1, md: 2 },
              columnFill: 'balance', // Балансируем колонки для равномерного заполнения
              pb: 2,
              '& > *': {
                breakInside: 'avoid',
                marginBottom: { xs: 1, md: 2 },
                display: 'block',
              },
            }}
          >
          {galleryImages.map((image, index) => {
            // Размеры в зависимости от типа изображения и экрана
            const getImageHeight = (type, isMobile) => {
              if (isMobile) {
                switch (type) {
                  case 'vertical': return [200, 220, 240, 180, 210]; // Высокие
                  case 'horizontal': return [120, 140, 110, 130, 115]; // Низкие и широкие
                  case 'square': return [160, 170, 150, 165, 155]; // Средние квадратные
                  default: return [160];
                }
              } else {
                switch (type) {
                  case 'vertical': return [380, 420, 400, 360, 440]; // Очень высокие
                  case 'horizontal': return [200, 220, 180, 240, 190]; // Низкие и широкие
                  case 'square': return [280, 300, 260, 290, 270]; // Средние квадратные
                  default: return [280];
                }
              }
            };

            const heightOptions = getImageHeight(image.type, isMobile);
            const imageHeight = heightOptions[index % heightOptions.length];

            return (
              <Box
                key={index}
                sx={{
                  cursor: 'pointer',
                  borderRadius: 2,
                  overflow: 'hidden',
                  position: 'relative',
                  height: imageHeight,
                  width: '100%',
                  '&:hover': {
                    '& img': {
                      transform: 'scale(1.05)',
                    },
                    '& .overlay': {
                      opacity: 1,
                    },
                  },
                }}
                onClick={() => handleImageClick(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, 25vw"
                  style={{
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                  }}
                />
                
                {/* Overlay с иконкой при наведении */}
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <ZoomInIcon 
                    sx={{ 
                      color: 'white', 
                      fontSize: { xs: 28, md: 40 },
                    }} 
                  />
                </Box>

                {/* Подпись */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    color: 'white',
                    p: { xs: 0.5, md: 1 },
                  }}
                >
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontSize: { xs: '0.75rem', md: '0.85rem' },
                      fontWeight: 500 
                    }}
                  >
                    {image.title}
                  </Typography>
                </Box>
              </Box>
            );
          })}
          </Box>
        </Box>
          
      </Container>

      {/* Современное модальное окно */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth={false}
        fullWidth
        sx={{
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Еще более светлое затемнение
            backdropFilter: 'blur(8px)',
          },
          '& .MuiDialog-paper': {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            borderRadius: 0,
            margin: 0, // Убираем все отступы
            maxWidth: '100vw', // Полный экран везде
            maxHeight: '100vh', // Полная высота везде
            width: '100vw',
            height: '100vh',
          },
        }}
      >
        <DialogContent 
          sx={{ 
            position: 'relative', 
            p: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '50vh',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {/* Кнопка закрытия */}
          <IconButton
            onClick={handleCloseDialog}
            sx={{
              position: 'fixed',
              top: { xs: 16, md: 24 },
              right: { xs: 16, md: 24 },
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              zIndex: 1300,
              width: { xs: 40, md: 48 },
              height: { xs: 40, md: 48 },
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                transform: 'scale(1.05)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <CloseIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
          </IconButton>
          
          {selectedImage && (
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
              <Box
                sx={{
                  position: 'relative',
                  width: '100vw', // Полный экран по ширине
                  height: 'calc(100vh - 50px)', // Вычитаем высоту текстовой панели
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 0,
                }}
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  style={{
                    objectFit: 'contain', // Сохраняем пропорции, заполняем максимально возможную область
                  }}
                  priority
                />
              </Box>
              
              {/* Информация об изображении внизу экрана */}
              <Box
                sx={{
                  position: 'fixed',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 80%, transparent 100%)',
                  color: 'white',
                  p: { xs: 2, md: 2.5 },
                  backdropFilter: 'blur(12px)',
                  zIndex: 1301,
                  minHeight: { xs: '40px', md: '50px' }, // Фиксированная минимальная высота
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Container maxWidth="lg">
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
                      mb: 0.5,
                      textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                      textAlign: 'center',
                    }}
                  >
                    {selectedImage.title}
                  </Typography>
                </Container>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default GallerySection;
