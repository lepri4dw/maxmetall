'use client';
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    useTheme,
    useMediaQuery,
    Button,
} from '@mui/material';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import BuildIcon from '@mui/icons-material/Build';
import PoolIcon from '@mui/icons-material/Pool';
import SecurityIcon from '@mui/icons-material/Security';
import FlagIcon from '@mui/icons-material/Flag';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import ShowerIcon from '@mui/icons-material/Shower';
import PipeIcon from '@mui/icons-material/Plumbing';
import SettingsIcon from '@mui/icons-material/Settings';

// --- НОВАЯ ФУНКЦИЯ ДЛЯ ГЕНЕРАЦИИ ID (СКОПИРОВАНА ИЗ SEO.JS) ---
// Эта функция создает ID, который точно соответствует URL в микроразметке
const generateSlug = (text) => {
    return text.toLowerCase()
        .replace(/\//g, '-') // Заменяем слэш на дефис
        .replace(/ /g, '-') // Заменяем пробелы на дефис
        .replace(/а/g, 'a').replace(/б/g, 'b').replace(/в/g, 'v').replace(/г/g, 'g').replace(/д/g, 'd')
        .replace(/е/g, 'e').replace(/ё/g, 'yo').replace(/ж/g, 'zh').replace(/з/g, 'z').replace(/и/g, 'i')
        .replace(/й/g, 'y').replace(/к/g, 'k').replace(/л/g, 'l').replace(/м/g, 'm').replace(/н/g, 'n')
        .replace(/о/g, 'o').replace(/п/g, 'p').replace(/р/g, 'r').replace(/с/g, 's').replace(/т/g, 't')
        .replace(/у/g, 'u').replace(/ф/g, 'f').replace(/х/g, 'h').replace(/ц/g, 'c').replace(/ч/g, 'ch')
        .replace(/ш/g, 'sh').replace(/щ/g, 'shch').replace(/ъ/g, '').replace(/ы/g, 'y').replace(/ь/g, '')
        .replace(/э/g, 'e').replace(/ю/g, 'yu').replace(/я/g, 'ya')
        .replace(/[^a-z0-9-]/g, ''); // Удаляем все остальные символы
};


const ProductsSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isVerySmallMobile = useMediaQuery('(max-width:400px)');
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

    const products = [
        {
            title: 'Перила и ограждения',
            description: 'Изготавливаем перила и балконные ограждения из нержавеющей стали премиум-класса. Горизонтальное, вертикальное заполнение, стекло, надёжное крепление. Перила выглядят солидно и дорого, не требуют покраски и служат десятилетиями. Установка в Бишкеке для общественных зданий и частных домов.',
            icon: <SecurityIcon />,
            image: '/images/products/railings.jpg',
        },
        {
            title: 'Лестницы для бассейна',
            description: "Компания MaxMetal (Бишкек) изготавливает и устанавливает лестницы для бассейнов из нержавеющей стали - как для частных объектов, так и для коммерческих (отели, спортивные комплексы, пансионаты). Наши лестницы установлены во многих бассейнах города Бишкек! А также на Иссык-Куле.",
            icon: <PoolIcon />,
            image: '/images/products/pool-stairs.jpg',
        },
        {
            title: 'Карнизы для ванной',
            description: 'Карнизы из нержавеющей стали премиум-класса — не ржавеют, не провисают, служат годами. Изготавливаем карнизы по индивидуальным размерам любой сложности и конфигурации. Идеально для ванной и душевой.',
            icon: <ShowerIcon />,
            image: '/images/products/shower-rods.jpg',
        },
        {
            title: 'Поручни ЛОВЗ',
            description: 'Производим поручни для инвалидов и людей с ограниченными возможностями здоровья. Поручни ЛОВЗ соответствуют всем стандартам доступной среды. Надежные поручни из нержавейки для больниц, школ и общественных зданий.',
            icon: <AccessibilityIcon />,
            image: '/images/products/accessibility-rails.jpg',
        },
        {
            title: 'Флагштоки',
            description: 'Флагштоки из нержавеющей стали высотой от 3 до 12 метров. Наружный и внутренний механизмы подъёма, различные диаметры и переходы. Флагштоки подходят для госучреждений, офисов и частных домов. Устойчивы к ветру и погодным условиям.',
            icon: <FlagIcon />,
            image: '/images/products/flagpoles.jpg',
        },
        {
            title: 'Трубы из нержавейки',
            description: 'Трубы из нержавеющей стали — круглые и профильные (трубоквадрат). В наличии трубы различных диаметров с аккуратным, качественным сварным швом. Прочные, эстетичные и надёжные — для любых металлоконструкций.',
            icon: <PipeIcon />,
            image: '/images/products/pipes.jpg',
        },
        {
            title: 'Фурнитура',
            description: 'Ассортимент фурнитуры из нержавеющей стали: соединительные элементы, крепления, под сварку , механизмы для флагштоков и комплектующие. Качественные решения для надёжных конструкций.',
            icon: <SettingsIcon />,
            image: '/images/products/hardware.jpg',
        },
        {
            title: 'Капсулы времени',
            description: "Герметичная капсула времени из нержавеющей стали. Изготавливаем капсулы памяти для закладки в фундамент — для хранения документов, посланий, фотографий и памятных предметов. Надёжность, герметичность и долговечность — чтобы ваше послание дошло сквозь время.",
            icon: <BuildIcon />,
            image: '/images/products/capsules.jpg',
        },
    ];

    const handleContactClick = () => {
        window.open('https://wa.me/996555918355', '_blank');
    };

    return (
        <Box id="products" sx={{ py: { xs: 6, md: 10 }, bgcolor: '#fafafa' }}>
            <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
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
                        Нержавейка в Бишкеке - наша продукция
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
                        Изделия из нержавеющей стали премиум класса с 15-летним опытом производства в Бишкеке
                    </Typography>
                </Box>

                <Box sx={{ mx: { xs: 0, md: 4 }, position: 'relative' }}>
                    <Swiper
                        modules={[Navigation, Pagination, A11y, Autoplay]}
                        slidesPerView={useMediaQuery('(max-width:720px)') ? 1 : isTablet ? 2 : 3}
                        slidesPerGroup={1}
                        spaceBetween={24}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next-products',
                            prevEl: '.swiper-button-prev-products',
                        }}
                        pagination={{
                            el: '.swiper-pagination-products',
                            clickable: true,
                            dynamicBullets: false,
                        }}
                        loop={true}
                        style={{
                            paddingBottom: '50px',
                        }}
                    >
                        {products.map((product, index) => {
                            // --- ГЕНЕРИРУЕМ ID ДЛЯ КАЖДОГО СЛАЙДА ---
                            const slug = generateSlug(product.title);

                            return (
                                // --- ДОБАВЛЯЕМ ID ЗДЕСЬ ---
                                <SwiperSlide key={index} id={slug}>
                                    <Card
                                        sx={{
                                            height: 540,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            borderRadius: '16px',
                                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                            '&:hover': {
                                                transform: 'translateY(-8px)',
                                                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
                                                '&::before': {
                                                    opacity: 1,
                                                },
                                            },
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: '16px',
                                                background: 'linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.02) 100%)',
                                                opacity: 0,
                                                transition: 'opacity 0.4s ease',
                                                zIndex: 1,
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                height: 200,
                                                position: 'relative',
                                                overflow: 'hidden',
                                                '&::after': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    bottom: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '4px',
                                                    background: 'linear-gradient(90deg, rgba(211,47,47,0.7) 0%, rgba(245,81,95,0.9) 100%)',
                                                }
                                            }}
                                        >
                                            <Image
                                                src={product.image}
                                                alt={`Нержавейка Бишкек - ${product.title} из нержавеющей стали Бишкек MaxMetall`}
                                                fill
                                                style={{
                                                    objectFit: 'cover',
                                                    objectPosition: 'center',
                                                }}
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'flex';
                                                }}
                                            />
                                            <Box
                                                sx={{
                                                    display: 'none',
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    bgcolor: 'rgba(211, 47, 47, 0.05)',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flexDirection: 'column',
                                                    gap: 1,
                                                    color: theme.palette.primary.main,
                                                }}
                                            >
                                                <Box sx={{ fontSize: '3rem' }}>
                                                    {product.icon}
                                                </Box>
                                                <Typography
                                                    variant="caption"
                                                    sx={{
                                                        color: theme.palette.text.secondary,
                                                        textAlign: 'center',
                                                        px: 2,
                                                    }}
                                                >
                                                    Фото: {product.image}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <CardContent
                                            sx={{
                                                flexGrow: 1,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                p: { xs: 2, md: 3 },
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                component="h3"
                                                sx={{
                                                    fontWeight: 600,
                                                    color: theme.palette.text.primary,
                                                    mb: 1,
                                                }}
                                            >
                                                {product.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: theme.palette.text.secondary,
                                                    lineHeight: 1.6,
                                                    flexGrow: 1,
                                                }}
                                            >
                                                {product.description}
                                            </Typography>
                                            <Button
                                                variant="outlined"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    const contactsSection = document.getElementById('contacts');
                                                    if (contactsSection) {
                                                        contactsSection.scrollIntoView({ behavior: 'smooth' });
                                                    }
                                                }}
                                                sx={{
                                                    mt: 2,
                                                    fontWeight: 600,
                                                    borderRadius: '30px',
                                                    borderColor: theme.palette.primary.main,
                                                    color: theme.palette.primary.main,
                                                    textTransform: 'none',
                                                    py: 0.8,
                                                    px: 2,
                                                    transition: 'all 0.3s ease',
                                                    zIndex: 2,
                                                    position: 'relative',
                                                    '&:hover': {
                                                        background: 'linear-gradient(90deg, rgba(211,47,47,0.05) 0%, rgba(245,81,95,0.1) 100%)',
                                                        borderColor: theme.palette.primary.dark,
                                                        transform: 'translateY(-2px)',
                                                        boxShadow: '0 4px 10px rgba(211, 47, 47, 0.15)',
                                                    },
                                                }}
                                            >
                                                Узнать подробнее →
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {/* Кастомные навигационные кнопки */}
                    <Box
                        className="swiper-button-prev-products"
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
                        className="swiper-button-next-products"
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
                        className="swiper-pagination-products"
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

                </Box>
            </Container>
        </Box>
    );
};

export default ProductsSection;