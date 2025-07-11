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
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function Home() {
  return (
    <>
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
      
      {/* Плавающая кнопка WhatsApp Business */}
      <WhatsAppFloat />
    </>
  );
}
