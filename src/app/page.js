'use client';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AchievementsSection from '../components/AchievementsSection';
import ProductsSection from '../components/ProductsSection';
import GallerySection from '../components/GallerySection';
import ReviewsSection from '../components/ReviewsSection';
import LogoSlider from '../components/LogoSlider';
import ContactsSection from '../components/ContactsSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      {/* Скрытые SEO заголовки для поисковых систем */}
      <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <h1>MaxMetall - Изделия из нержавеющей стали в Бишкеке, Кыргызстане</h1>
        <h2>Перила и ограждения из нержавеющей стали в Бишкеке</h2>
        <h2>Лестницы для бассейнов из нержавейки в Бишкеке</h2>
        <h2>Карнизы для ванной комнаты из нержавеющей стали в Бишкеке</h2>
        <h2>Поручни ЛОВЗ для инвалидов в Бишкеке</h2>
        <h2>Флагштоки из нержавеющей стали в Бишкеке</h2>
        <h2>Трубы из нержавейки в Бишкеке</h2>
        <h2>Фурнитура из нержавеющей стали в Бишкеке</h2>
        <h2>Капсулы времени из нержавейки в Бишкеке</h2>
        <h2>Аргонная сварка нержавеющей стали в Бишкеке</h2>
        <h3>AISI 304, AISI 316, AISI 201 нержавеющая сталь в Бишкеке</h3>
        <h3>Производство изделий из нержавейки в Кыргызстане</h3>
        <h3>Металлообработка нержавеющей стали в Бишкеке</h3>
        <h3>Изготовление на заказ из нержавейки в Бишкеке</h3>
        <h3>15 лет опыта работы с нержавеющей сталью</h3>
      </div>

      <Header />
      <main>
        <HeroSection />
        <AchievementsSection />
        <ProductsSection />
        <GallerySection />
        <ReviewsSection />
        <LogoSlider />
        <ContactsSection />
      </main>
      <Footer />
    </>
  );
}
