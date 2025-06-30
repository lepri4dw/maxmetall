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
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { useState } from 'react';

const GallerySection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Массив изображений для галереи с quilted layout
  const galleryImages = [
    { src: '/images/gallery/work-1.jpg', alt: 'Перила из нержавеющей стали', title: 'Перила из нержавеющей стали', rows: 2, cols: 2 },
    { src: '/images/gallery/work-2.jpg', alt: 'Ограждения для балкона', title: 'Ограждения для балкона', rows: 1, cols: 1 },
    { src: '/images/gallery/work-3.jpg', alt: 'Лестница в бассейн', title: 'Лестница в бассейн', rows: 1, cols: 1 },
    { src: '/images/gallery/work-4.jpg', alt: 'Флагшток', title: 'Флагшток', rows: 1, cols: 2 },
    { src: '/images/gallery/work-5.jpg', alt: 'Поручни ЛОВЗ', title: 'Поручни ЛОВЗ', rows: 1, cols: 1 },
    { src: '/images/gallery/work-6.jpg', alt: 'Карниз для ванной', title: 'Карниз для ванной', rows: 1, cols: 1 },
    { src: '/images/gallery/work-7.jpg', alt: 'Ограждения для лестницы', title: 'Ограждения для лестницы', rows: 2, cols: 1 },
    { src: '/images/gallery/work-8.jpg', alt: 'Фурнитура из нержавейки', title: 'Фурнитура из нержавейки', rows: 1, cols: 2 },
    { src: '/images/gallery/work-9.jpg', alt: 'Перила для террасы', title: 'Перила для террасы', rows: 1, cols: 1 },
    { src: '/images/gallery/work-10.jpg', alt: 'Лестница со стеклом', title: 'Лестница со стеклом', rows: 1, cols: 1 },
    { src: '/images/gallery/work-11.jpg', alt: 'Ограждения для дома', title: 'Ограждения для дома', rows: 1, cols: 1 },
    { src: '/images/gallery/work-12.jpg', alt: 'Поручни для магазина', title: 'Поручни для магазина', rows: 2, cols: 1 },
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
            Галерея работ
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
            Качественные фотографии наших работ. Только наша продукция, только наши проекты.
          </Typography>
        </Box>

        {/* Quilted ImageList галерея */}
        <ImageList
          sx={{ 
            width: '100%', 
            height: { xs: 400, md: 500 },
            transform: 'translateZ(0)', // Улучшение производительности
          }}
          variant="quilted"
          cols={isMobile ? 2 : 4}
          rowHeight={121}
        >
          {galleryImages.map((image, index) => (
            <ImageListItem 
              key={index}
              cols={image.cols || 1} 
              rows={image.rows || 1}
              sx={{
                cursor: 'pointer',
                borderRadius: 2,
                overflow: 'hidden',
                position: 'relative',
                '&:hover': {
                  '& .image-placeholder': {
                    transform: 'scale(1.05)',
                  },
                  '& .overlay': {
                    opacity: 1,
                  },
                },
              }}
              onClick={() => handleImageClick(image)}
            >
              {/* Заглушка для изображения */}
              <Box
                className="image-placeholder"
                sx={{
                  width: '100%',
                  height: '100%',
                  bgcolor: 'rgba(211, 47, 47, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease-in-out',
                  border: '2px dashed rgba(211, 47, 47, 0.3)',
                  borderRadius: 2,
                  position: 'relative',
                  backgroundImage: `linear-gradient(45deg, rgba(211, 47, 47, 0.02) 25%, transparent 25%), 
                                   linear-gradient(-45deg, rgba(211, 47, 47, 0.02) 25%, transparent 25%), 
                                   linear-gradient(45deg, transparent 75%, rgba(211, 47, 47, 0.02) 75%), 
                                   linear-gradient(-45deg, transparent 75%, rgba(211, 47, 47, 0.02) 75%)`,
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    color: theme.palette.text.secondary,
                    px: 2,
                    py: 1,
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: 1,
                    backdropFilter: 'blur(5px)',
                  }}
                >
                  <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 600 }}>
                    {image.title}
                  </Typography>
                  <Typography variant="caption" sx={{ fontSize: '0.65rem', opacity: 0.7 }}>
                    {image.src}
                  </Typography>
                </Box>
              </Box>

              {/* Оверлей при наведении */}
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgcolor: 'rgba(0, 0, 0, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                  borderRadius: 2,
                }}
              >
                <Box sx={{ textAlign: 'center', color: 'white' }}>
                  <ZoomInIcon
                    sx={{
                      fontSize: '2.5rem',
                      mb: 1,
                    }}
                  />
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    Посмотреть
                  </Typography>
                </Box>
              </Box>

              {/* Подпись к изображению */}
              <ImageListItemBar
                title={image.title}
                sx={{
                  background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)',
                  '& .MuiImageListItemBar-title': {
                    fontSize: '0.85rem',
                    fontWeight: 500,
                  },
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>

        {/* Дополнительная информация */}
        <Box
          sx={{
            textAlign: 'center',
            mt: { xs: 4, md: 6 },
            p: { xs: 3, md: 4 },
            bgcolor: 'rgba(211, 47, 47, 0.02)',
            borderRadius: 3,
            border: '1px solid rgba(211, 47, 47, 0.1)',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: theme.palette.text.primary,
              mb: 2,
            }}
          >
            Каждая работа выполнена с любовью к деталям
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 700,
              mx: 'auto',
            }}
          >
            Мы используем только качественную нержавеющую сталь и современные технологии производства. 
            15 лет опыта позволяют нам создавать изделия, которые служат десятилетиями.
          </Typography>
        </Box>
      </Container>

      {/* Диалог для увеличенного изображения */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="lg"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            bgcolor: 'transparent',
            boxShadow: 'none',
            overflow: 'visible',
          },
        }}
      >
        <DialogContent
          sx={{
            position: 'relative',
            p: 0,
            bgcolor: 'transparent',
          }}
        >
          <IconButton
            onClick={handleCloseDialog}
            sx={{
              position: 'absolute',
              top: -50,
              right: -10,
              color: 'white',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.7)',
              },
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <Box
              sx={{
                width: '100%',
                height: { xs: 300, md: 500 },
                bgcolor: 'rgba(211, 47, 47, 0.1)',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px dashed rgba(211, 47, 47, 0.3)',
              }}
            >
              <Box
                sx={{
                  textAlign: 'center',
                  color: theme.palette.text.secondary,
                  px: 2,
                }}
              >
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>
                  {selectedImage.title}
                </Typography>
                <Typography variant="body2">
                  Увеличенное изображение: {selectedImage.src}
                </Typography>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default GallerySection;
