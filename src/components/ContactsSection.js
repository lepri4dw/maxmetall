'use client';
/**
 * ContactsSection Component
 *
 * Displays company contact information with:
 * - Company details (phone, address, hours)
 * - Social media links (WhatsApp, Instagram)
 * - 2GIS Maps integration showing company location
 *
 * All sections are fully responsive for mobile and desktop.
 */
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  Stack,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import ScheduleIcon from '@mui/icons-material/Schedule';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DoubleGisMapComponent from './DoubleGisMapComponent';

const ContactsSection = () => {
  const theme = useTheme();

  const handlePhoneClick = () => {
    window.open('tel:+996555918355', '_self');
  };
  const handlePhoneClickOlya = () => {
        window.open('tel:+996555033377', '_self');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/996555918355', '_blank');
  };

  const handleInstagramClick = () => {
    // Замените на реальную ссылку на Instagram
    window.open('https://instagram.com/maxmetall.kg', '_blank');
  };

  const handleMapClick = () => {
    // Открыть 2ГИС с красивой ссылкой
    window.open('https://2gis.kg/bishkek/geo/70000001036008789', '_blank');
  };

  return (
    <Box
      id="contacts"
      sx={{
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(to bottom, #fafafa 0%, #ffffff 100%)'
      }}
    >
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
            Контакты MaxMetall
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
            Свяжитесь с нами для консультации или размещения заказа на изделия из нержавеющей стали
          </Typography>
        </Box>

        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          justifyContent="center"
          alignItems="stretch"
        >
          {/* Контактная информация */}
          <Grid item xs={12} lg={4}>
            <Stack spacing={4} sx={{ height: '100%' }}>
              {/* Основная информация */}
              <Card
                sx={{
                  p: { xs: 2, md: 3 },
                  background: 'linear-gradient(135deg, rgba(211, 47, 47, 0.02) 0%, rgba(66, 66, 66, 0.02) 100%)',
                  border: '1px solid rgba(211, 47, 47, 0.1)',
                  height: '100%',
                  minHeight: 400,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent
                  sx={{
                    p: 0,
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
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

                  <Stack spacing={3}>
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
                          variant="body1"
                          sx={{
                            color: theme.palette.text.primary,
                            fontWeight: 500,
                            mb: 0.5,
                          }}
                        >
                          Максим: <Typography 
                            component="span"
                            sx={{
                              color: theme.palette.primary.main,
                              fontWeight: 600,
                              cursor: 'pointer',
                            }}
                            onClick={handlePhoneClick}
                          >
                            +996 555 918 355
                          </Typography>
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: theme.palette.text.primary,
                            fontWeight: 500,
                          }}
                        >
                          Оля: <Typography 
                            component="span"
                            sx={{
                                color: theme.palette.primary.main,
                                fontWeight: 600,
                                cursor: 'pointer',
                            }}
                            onClick={handlePhoneClickOlya}
                          >
                            +996 555 033 377
                          </Typography>
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
                          Открыть в 2ГИС
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
                            fontWeight: 'bold',
                            mb: 0.5,
                            background: 'linear-gradient(135deg, #d32f2f 0%, #424242 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                            ПРИЕЗЖАТЬ ПО ПРЕДВАРИТЕЛЬНОМУ ЗВОНКУ!
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary
                          }}
                        >
                          Понедельник - Пятница: 07:00 - 16:00
                          <br />
                          Суббота: 08:00 - 10:00
                          <br/>
                          Воскресенье: закрыто
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>

              {/* Социальные сети */}
              <Card
                sx={{
                  p: { xs: 2, md: 3 },
                  minHeight: 120
                }}
              >
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

          {/* 2GIS Maps Integration */}
          <Grid item xs={12} lg={8}>
            <Card
              sx={{
                height: '100%',
                minHeight: '600px',
                overflow: 'hidden',
                borderRadius: 2,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                width: '100%',
                position: 'relative',
              }}
            >
              <DoubleGisMapComponent
                center={{ lat: 42.848495, lng: 74.607330 }} // Координаты MaxMetall для 2ГИС
                zoom={16}
                height="100%"
                width="100%"
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactsSection;