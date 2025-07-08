'use client';
/**
 * VideosSection Component (бывший ReviewsSection)
 *
 * Отображает короткие видеоролики в формате Instagram:
 * - Квадратные видео-превью с кнопкой воспроизведения
 * - Модальное окно в формате Instagram при клике
 * - Простой текст без рейтингов и дополнительных элементов
 * - Адаптивный карусель с навигацией
 * - Полноэкранное воспроизведение видео
 *
 * В секции могут быть как отзывы, так и просто демонстрационные видео проектов.
 */
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Avatar,
    useTheme,
    useMediaQuery,
    Stack,
    IconButton,
    Dialog,
    DialogContent,
    Button,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, A11y, Autoplay} from 'swiper/modules';
import {useState, useEffect} from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const ReviewsSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isVerySmallMobile = useMediaQuery('(max-width:400px)');
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
    const [openVideo, setOpenVideo] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    // Функция для получения ID видео из ссылки YouTube (включая shorts)
    const getYouTubeVideoId = (url) => {
        // Регулярное выражение для всех форматов YouTube ссылок
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
        const match = url.match(regExp);
        const videoId = (match && match[2].length === 11) ? match[2] : null;

        // Отладочная информация для проверки
        console.log('URL:', url, 'VideoID:', videoId);

        return videoId;
    };

    // Функция для получения thumbnail из YouTube с fallback на разные качества
    const getYouTubeThumbnail = (url) => {
        const videoId = getYouTubeVideoId(url);
        if (!videoId) return null;

        // Попробуем разные варианты качества (maxresdefault может не существовать для всех видео)
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // hqdefault работает для большинства видео
    };

    // Функция для получения высококачественного превью с fallback
    const getYouTubeThumbnailWithFallback = (videoId) => {
        // Возвращаем несколько вариантов для проверки
        const thumbnails = [
            `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
            `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
            `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
            `https://img.youtube.com/vi/${videoId}/default.jpg`
        ];
        return thumbnails[1]; // Используем hqdefault как наиболее надежный
    };

    // Функция для открытия модального окна с видео
    const handleOpenVideo = (video) => {
        setSelectedVideo(video);
        setOpenVideo(true);
    };

    // Функция для закрытия модального окна
    const handleCloseVideo = () => {
        setOpenVideo(false);
        setSelectedVideo(null);
    };

    // Массив видео контента
    const videos = [
        {
            id: 1,
            author: 'MaxMetall',
            text: 'Объект АУЦА Перила из нержавейки',
            videoUrl: 'https://youtube.com/shorts/ZQiJcDowpYI',
        },
        {
            id: 2,
            author: 'MaxMetall',
            text: 'Отзыв "Карниз для ванной" спустя 3 года',
            videoUrl: 'https://youtube.com/shorts/aCN1kxjy2X4',
        },
        {
            id: 3,
            author: 'MaxMetall',
            text: 'Обьект "Usta" Ограждения из нержавейки',
            videoUrl: 'https://youtube.com/shorts/2L4-yKxm7Bg',
        },
        {
            id: 4,
            author: 'MaxMetall',
            text: 'Честный отзыв "Лестница для бассейна"',
            videoUrl: 'https://youtube.com/shorts/KMMvr7T_nY0',
        },
        {
            id: 5,
            author: 'MaxMetall',
            text: 'Объект Академия МВД Перила Флагштоки',
            videoUrl: 'https://youtube.com/shorts/mk_280MIjgQ',
        },
        {
            id: 6,
            author: 'MaxMetall',
            text: 'Отзыв "Карниз для ванной" от клиента',
            videoUrl: 'https://youtube.com/shorts/0d-rrdjc_Pw',
        },
    ];

    return (
        <Box id="reviews" sx={{py: {xs: 6, md: 10}, bgcolor: '#fafafa'}}>
            <Container maxWidth="lg" sx={{px: {xs: 1, sm: 2, md: 3}}}>
                {/* Заголовок секции */}
                <Box sx={{textAlign: 'center', mb: {xs: 5, md: 7}}}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                            mb: 2,
                        }}
                    >
                        Видео наших работ
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: theme.palette.text.secondary,
                            maxWidth: 700,
                            mx: 'auto',
                            lineHeight: 1.6,
                        }}
                    >
                        Короткие ролики наших проектов и отзывы клиентов
                    </Typography>
                </Box>

                {/* Swiper слайдер видеоотзывов */}
                <Box sx={{mx: {xs: 0, md: 4}, position: 'relative'}}>
                    <Swiper
                        modules={[Navigation, Pagination, A11y, Autoplay]}
                        slidesPerView={isSmallMobile ? 2 : isMobile ? 3 : isTablet ? 3 : 4}
                        slidesPerGroup={1}
                        spaceBetween={isMobile ? 16 : 24}
                        navigation={{
                            nextEl: '.swiper-button-next-reviews',
                            prevEl: '.swiper-button-prev-reviews',
                        }}
                        pagination={{
                            el: '.swiper-pagination-reviews',
                            clickable: true,
                            dynamicBullets: false,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        style={{
                            paddingBottom: '50px',
                        }}
                    >
                        {videos.map((video) => (
                            <SwiperSlide key={video.id}>
                                <Card
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        position: 'relative',
                                        height: '100%',
                                        minHeight: { xs: '520px', sm: '540px', md: '560px' }, // Минимальная высота для одинаковых карточек
                                        bgcolor: 'white',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
                                            '& .video-overlay': {
                                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                            },
                                            '& .play-button': {
                                                backgroundColor: 'rgba(211, 47, 47, 0.9)',
                                            },
                                        },
                                    }}
                                    onClick={() => handleOpenVideo(video)}
                                >
                                    {/* Instagram-подобная шапка карточки */}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            p: 1.5,
                                            borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                                        }}
                                    >
                                        <Avatar
                                            src="/images/logo-circle.svg"
                                            alt="MaxMetall Logo"
                                            sx={{
                                                width: 28,
                                                height: 28,
                                                bgcolor: theme.palette.primary.main,
                                            }}
                                        />
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                fontWeight: 600,
                                                fontSize: '0.85rem',
                                            }}
                                        >
                                            {video.author}
                                        </Typography>
                                    </Box>

                                    {/* Видео превью - вертикальная, как в Instagram Reels */}
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            paddingBottom: '177.78%', // соотношение 9:16 для вертикального формата
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {/* Thumbnail изображение с fallback */}
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                backgroundImage: `url(${getYouTubeThumbnail(video.videoUrl) || '/images/video-placeholder.jpg'})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundColor: '#f0f0f0', // Фоновый цвет на случай если изображение не загрузится
                                                zIndex: 1,
                                                '&::before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    backgroundImage: `url(/images/video-placeholder.jpg)`, // Fallback изображение
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    zIndex: -1,
                                                }
                                            }}
                                        />

                                        {/* Overlay для видео */}
                                        <Box
                                            className="video-overlay"
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                                zIndex: 2,
                                                transition: 'all 0.3s ease',
                                            }}
                                        />

                                        {/* Кнопка воспроизведения */}
                                        <Box
                                            className="play-button"
                                            sx={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                width: 64,
                                                height: 64,
                                                borderRadius: '50%',
                                                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                                backdropFilter: 'blur(4px)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                zIndex: 3,
                                                transition: 'all 0.3s ease',
                                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                                            }}
                                        >
                                            <PlayArrowIcon sx={{color: 'white', fontSize: '2.5rem'}}/>
                                        </Box>
                                    </Box>

                                    {/* Нижняя часть карточки - описание видео */}
                                    <CardContent
                                        sx={{
                                            p: 2,
                                            pt: 1.5,
                                            flex: 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontWeight: 600,
                                                color: theme.palette.text.primary,
                                                fontSize: '0.95rem',
                                                lineHeight: 1.5,
                                            }}
                                        >
                                            {video.text}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Кастомные навигационные кнопки */}
                    <Box
                        className="swiper-button-prev-reviews"
                        sx={{
                            position: 'absolute',
                            top: '45%',
                            left: {xs: 10, md: -40},
                            transform: 'translateY(-50%)',
                            zIndex: 2,
                            width: {xs: 40, md: 50},
                            height: {xs: 40, md: 50},
                            bgcolor: 'white',
                            borderRadius: '50%',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                            display: {xs: isSmallMobile ? 'none' : 'flex', md: 'flex'},
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                bgcolor: theme.palette.primary.main,
                                color: 'white',
                                boxShadow: '0 6px 18px rgba(211, 47, 47, 0.25)',
                            },
                            '&:after': {
                                content: '"❮"',
                                fontSize: '18px',
                                fontWeight: 'bold',
                            },
                        }}
                    />

                    <Box
                        className="swiper-button-next-reviews"
                        sx={{
                            position: 'absolute',
                            top: '45%',
                            right: {xs: 10, md: -40},
                            transform: 'translateY(-50%)',
                            zIndex: 2,
                            width: {xs: 40, md: 50},
                            height: {xs: 40, md: 50},
                            bgcolor: 'white',
                            borderRadius: '50%',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                            display: {xs: isSmallMobile ? 'none' : 'flex', md: 'flex'},
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                bgcolor: theme.palette.primary.main,
                                color: 'white',
                                boxShadow: '0 6px 18px rgba(211, 47, 47, 0.25)',
                            },
                            '&:after': {
                                content: '"❯"',
                                fontSize: '18px',
                                fontWeight: 'bold',
                            },
                        }}
                    />

                    {/* Кастомная пагинация */}
                    <Box
                        className="swiper-pagination-reviews"
                        sx={{
                            position: 'absolute',
                            bottom: '10px !important',
                            left: '50% !important',
                            transform: 'translateX(-50%) !important',
                            display: 'flex !important',
                            justifyContent: 'center !important',
                            alignItems: 'center !important',
                            gap: '8px !important',
                            width: 'auto !important',
                            height: 'auto !important',
                            zIndex: 10,
                            '& .swiper-pagination-bullet': {
                                backgroundColor: 'rgba(0, 0, 0, 0.3) !important',
                                opacity: '1 !important',
                                width: '10px !important',
                                height: '10px !important',
                                borderRadius: '50% !important',
                                transition: 'all 0.3s ease !important',
                                margin: '0 4px !important',
                                cursor: 'pointer !important',
                                border: 'none !important',
                                outline: 'none !important',
                            },
                            '& .swiper-pagination-bullet-active': {
                                backgroundColor: `${theme.palette.primary.main} !important`,
                                transform: 'scale(1.3) !important',
                            },
                        }}
                    />

                    {/* Модальное окно для видео в формате Instagram */}
                    <Dialog
                        fullWidth
                        maxWidth="sm"
                        open={openVideo}
                        onClose={handleCloseVideo}
                        sx={{
                            '& .MuiDialog-paper': {
                                borderRadius: 4,
                                overflow: 'hidden',
                                maxHeight: '95vh',
                                maxWidth: '290px !important', // Control max width for Instagram style
                                margin: {xs: 1, sm: 2},
                                bgcolor: 'black', // Instagram-подобный черный фон
                            }
                        }}
                    >
                        <Box sx={{position: 'relative', bgcolor: 'black'}}>
                            {/* Заголовок в стиле Instagram Stories */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.5,
                                    p: 2,
                                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                                    color: 'white',
                                }}
                            >
                                <Avatar
                                    src="/images/logo-circle.svg"
                                    alt="MaxMetall Logo"
                                    sx={{
                                        width: 32,
                                        height: 32,
                                        bgcolor: theme.palette.primary.main,
                                    }}
                                />
                                <Typography variant="subtitle1" sx={{fontWeight: 600, color: 'white'}}>
                                    {selectedVideo?.author}
                                </Typography>
                                <Box sx={{flexGrow: 1}}/>
                                <IconButton
                                    aria-label="close"
                                    onClick={handleCloseVideo}
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        p: 1,
                                    }}
                                >
                                    <CloseIcon/>
                                </IconButton>
                            </Box>

                            {/* Видео в вертикальном формате 9:16 (как Instagram Reels) */}
                            <Box sx={{
                                position: 'relative',
                                width: '100%',
                                maxWidth: '360px',
                                mx: 'auto',
                                paddingTop: '177.78%' // Always use vertical format 9:16
                            }}>
                                {selectedVideo && (
                                    <Box
                                        component="iframe"
                                        src={`https://www.youtube.com/embed/${getYouTubeVideoId(selectedVideo.videoUrl)}?autoplay=1&rel=0&showinfo=0&modestbranding=1`}
                                        title={selectedVideo.text}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            border: 0,
                                        }}
                                    />
                                )}
                            </Box>

                            {/* Текстовая часть видео - как в Instagram Stories */}
                            <Box sx={{p: 2, bgcolor: 'black'}}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: 500,
                                        color: 'white',
                                        fontSize: '0.95rem',
                                    }}
                                >
                                    {selectedVideo?.text}
                                </Typography>
                            </Box>
                        </Box>
                    </Dialog>
                </Box>

                {/* Стильный Instagram блок в одну строку */}
                <Box
                    sx={{
                        mt: {xs: 4, md: 5},
                        mx: 'auto',
                        width: '100%',
                    }}
                >
                    <Box
                        sx={{
                            background: 'white',
                            borderRadius: '12px',
                            py: {xs: 1.5, md: 2},
                            px: {xs: 2, md: 3},
                            display: 'flex',
                            flexDirection: {xs: 'column', sm: 'row'},
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: {xs: 1.5, sm: 2},
                            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.06)',
                            border: '1px solid rgba(0, 0, 0, 0.05)',
                            position: 'relative',
                            overflow: 'hidden',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                height: '2px',
                                background: 'linear-gradient(90deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)',
                            }
                        }}
                    >
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            flexGrow: 1
                        }}>
                            <Box
                                sx={{
                                    width: {xs: 36, md: 40},
                                    height: {xs: 36, md: 40},
                                    minWidth: {xs: 36, md: 40}, // Prevent shrinking
                                    minHeight: {xs: 36, md: 40}, // Prevent shrinking
                                    borderRadius: '50%',
                                    background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0, // Prevent container from shrinking
                                }}
                            >
                                <InstagramIcon sx={{
                                    fontSize: {xs: '1.2rem', sm: '1.3rem', md: '1.5rem'},
                                    color: 'white',
                                    flexShrink: 0, // Prevent icon from shrinking
                                }}/>
                            </Box>

                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: {xs: '0.9rem', sm: '1rem', md: '1.1rem'},
                                    color: theme.palette.text.primary,
                                }}
                            >
                                Больше наших проектов и отзывов в Instagram
                            </Typography>
                        </Box>

                        <Button
                            variant="outlined"
                            onClick={() => window.open('https://instagram.com/maxmetall.kg', '_blank')}
                            sx={{
                                borderColor: '#d32f2f',
                                color: '#d32f2f',
                                fontWeight: 600,
                                px: {xs: 2, md: 3},
                                py: 1,
                                fontSize: {xs: '0.8rem', md: '0.9rem'},
                                borderRadius: '50px',
                                whiteSpace: 'nowrap',
                                minWidth: {xs: '100%', sm: 'auto'},
                                '&:hover': {
                                    borderColor: '#d32f2f',
                                    bgcolor: 'rgba(211, 47, 47, 0.04)',
                                },
                                transition: 'all 0.2s ease',
                                textTransform: 'none',
                            }}
                        >
                            <InstagramIcon sx={{mr: 0.8, fontSize: '1.1rem', minWidth: '1.1rem'}}/>
                            Подписаться
                        </Button>
                    </Box>
                </Box>


            </Container>
        </Box>
    );
};

export default ReviewsSection;
