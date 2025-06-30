'use client';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  useTheme,
  useMediaQuery,
  Stack,
  Divider,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import ScheduleIcon from '@mui/icons-material/Schedule';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { useState } from 'react';

const ContactsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Формируем сообщение для WhatsApp
    const whatsappMessage = `Здравствуйте! Меня зовут ${formData.name}.%0A%0AТелефон: ${formData.phone}%0A%0AСообщение: ${formData.message}%0A%0AОтправлено с сайта MaxMetall`;
    window.open(`https://wa.me/996555033377?text=${whatsappMessage}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+996555033377', '_self');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/996555033377', '_blank');
  };

  const handleInstagramClick = () => {
    // Замените на реальную ссылку на Instagram
    window.open('https://instagram.com/maxmetall.kg', '_blank');
  };

  const handleMapClick = () => {
    // Координаты для завода Дастан в Бишкеке
    const address = 'Байтик Баатыра, 36/3, Бишкек, Кыргызстан';
    window.open(`https://www.google.com/maps/place/MaxMetall+-+%D0%B8%D0%B7%D0%B4%D0%B5%D0%BB%D0%B8%D1%8F+%D0%B8%D0%B7+%D0%BD%D0%B5%D1%80%D0%B6%D0%B0%D0%B2%D0%B5%D1%8E%D1%89%D0%B5%D0%B9+%D1%81%D1%82%D0%B0%D0%BB%D0%B8/@42.8487732,74.6069731,18.75z/data=!4m6!3m5!1s0x389eb7c7eca2048b:0x4b557f968a6c7ec8!8m2!3d42.8484948!4d74.6073303!16s%2Fg%2F11rscdf0l_?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D}`, '_blank');
  };

  return (
    <Box id="contacts" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'white' }}>
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
            Контакты
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
            Свяжитесь с нами для консультации или размещения заказа
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center" alignItems="center">
          {/* Контактная информация */}
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              {/* Основная информация */}
              <Card
                sx={{
                  p: { xs: 2, md: 3 },
                  background: 'linear-gradient(135deg, rgba(211, 47, 47, 0.02) 0%, rgba(66, 66, 66, 0.02) 100%)',
                  border: '1px solid rgba(211, 47, 47, 0.1)',
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                      mb: 3,
                    }}
                  >
                    MaxMetall
                  </Typography>

                  <Stack spacing={2.5}>
                    {/* Телефон */}
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box
                        sx={{
                          bgcolor: theme.palette.primary.main,
                          color: 'white',
                          borderRadius: '50%',
                          width: 40,
                          height: 40,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <PhoneIcon sx={{ fontSize: '1.2rem' }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            color: theme.palette.primary.main,
                            fontWeight: 600,
                            cursor: 'pointer',
                          }}
                          onClick={handlePhoneClick}
                        >
                          +996 555 033 377
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: theme.palette.text.secondary }}
                        >
                          Основной номер для заказов
                        </Typography>
                      </Box>
                    </Box>

                    {/* Адрес */}
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box
                        sx={{
                          bgcolor: theme.palette.primary.main,
                          color: 'white',
                          borderRadius: '50%',
                          width: 40,
                          height: 40,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <LocationOnIcon sx={{ fontSize: '1.2rem' }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{
                            color: theme.palette.text.primary,
                            fontWeight: 500,
                            mb: 0.5,
                          }}
                        >
                          Байтик Баатыра, 36/3
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            mb: 1,
                          }}
                        >
                          завод Дастан, Бишкек, Кыргызстан
                        </Typography>
                        <Button
                          startIcon={<DirectionsCarIcon />}
                          onClick={handleMapClick}
                          sx={{
                            color: theme.palette.primary.main,
                            textTransform: 'none',
                            p: 0,
                            minWidth: 'auto',
                            fontWeight: 600,
                          }}
                        >
                          Показать на карте
                        </Button>
                      </Box>
                    </Box>

                    {/* График работы */}
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box
                        sx={{
                          bgcolor: theme.palette.primary.main,
                          color: 'white',
                          borderRadius: '50%',
                          width: 40,
                          height: 40,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <ScheduleIcon sx={{ fontSize: '1.2rem' }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{
                            color: theme.palette.text.primary,
                            fontWeight: 500,
                            mb: 0.5,
                          }}
                        >
                          Работаем по предварительному звонку
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: theme.palette.text.secondary }}
                        >
                          Понедельник - Суббота: 9:00 - 18:00<br />
                          Воскресенье: по договоренности
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>

              {/* Социальные сети */}
              <Card sx={{ p: { xs: 2, md: 3 } }}>
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                      mb: 2,
                    }}
                  >
                    Мы в социальных сетях
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <Button
                      startIcon={<WhatsAppIcon />}
                      onClick={handleWhatsAppClick}
                      variant="contained"
                      sx={{
                        bgcolor: '#25D366',
                        color: 'white',
                        '&:hover': {
                          bgcolor: '#22c55e',
                        },
                        textTransform: 'none',
                        fontWeight: 600,
                      }}
                    >
                      WhatsApp
                    </Button>
                    <Button
                      startIcon={<InstagramIcon />}
                      onClick={handleInstagramClick}
                      variant="contained"
                      sx={{
                        bgcolor: '#E4405F',
                        color: 'white',
                        '&:hover': {
                          bgcolor: '#dc2743',
                        },
                        textTransform: 'none',
                        fontWeight: 600,
                      }}
                    >
                      Instagram
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>

          {/* Форма обратной связи */}
          <Grid item xs={12} md={5}>
            <Card sx={{ p: { xs: 2, md: 3 }, height: 'fit-content' }}>
              <CardContent sx={{ p: 0 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    mb: 1,
                  }}
                >
                  Отправить сообщение
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    mb: 3,
                  }}
                >
                  Заполните форму, и мы свяжемся с вами в WhatsApp
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      name="name"
                      label="Ваше имя"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      fullWidth
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: theme.palette.primary.main,
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: theme.palette.primary.main,
                          },
                        },
                      }}
                    />

                    <TextField
                      name="phone"
                      label="Номер телефона"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      fullWidth
                      variant="outlined"
                      placeholder="+996 XXX XXX XXX"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: theme.palette.primary.main,
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: theme.palette.primary.main,
                          },
                        },
                      }}
                    />

                    <TextField
                      name="message"
                      label="Сообщение"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      fullWidth
                      multiline
                      rows={4}
                      variant="outlined"
                      placeholder="Опишите ваш проект или задайте вопрос..."
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: theme.palette.primary.main,
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: theme.palette.primary.main,
                          },
                        },
                      }}
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<SendIcon />}
                      sx={{
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        textTransform: 'none',
                      }}
                    >
                      Отправить в WhatsApp
                    </Button>
                  </Stack>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box
                  sx={{
                    bgcolor: 'rgba(211, 47, 47, 0.05)',
                    p: 2,
                    borderRadius: 2,
                    border: '1px solid rgba(211, 47, 47, 0.1)',
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      textAlign: 'center',
                      fontStyle: 'italic',
                    }}
                  >
                    💡 Для быстрой связи звоните напрямую или пишите в WhatsApp.<br />
                    Мы ответим в течение 15 минут в рабочее время.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Карта (заглушка) */}
        <Box sx={{ mt: { xs: 4, md: 6 } }}>
          <Card>
            <Box
              sx={{
                height: { xs: 250, md: 350 },
                bgcolor: 'rgba(211, 47, 47, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px dashed rgba(211, 47, 47, 0.3)',
                cursor: 'pointer',
              }}
              onClick={handleMapClick}
            >
              <Stack alignItems="center" spacing={2}>
                <LocationOnIcon
                  sx={{
                    fontSize: '3rem',
                    color: theme.palette.primary.main,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.text.secondary,
                    textAlign: 'center',
                    px: 2,
                  }}
                >
                  Google Maps интеграция<br />
                  Байтик Баатыра, 36/3, Бишкек
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<DirectionsCarIcon />}
                  sx={{
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                  }}
                >
                  Открыть карту
                </Button>
              </Stack>
            </Box>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactsSection;
