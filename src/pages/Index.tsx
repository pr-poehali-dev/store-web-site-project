import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/components/HomePage';
import CatalogPage from '@/components/CatalogPage';
import AboutPage from '@/components/AboutPage';
import DeliveryPage from '@/components/DeliveryPage';
import ReviewsPage from '@/components/ReviewsPage';
import PromosPage from '@/components/PromosPage';
import { products, Product } from '@/data/products';

interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('Главная');
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />

      {activeSection === 'Главная' && (
        <HomePage products={products} onAddToCart={addToCart} onNavigate={setActiveSection} />
      )}

      {activeSection === 'Каталог' && (
        <CatalogPage products={products} onAddToCart={addToCart} />
      )}

      {activeSection === 'О нас' && <AboutPage />}

      {activeSection === 'Доставка и оплата' && <DeliveryPage />}

      {activeSection === 'Отзывы' && <ReviewsPage />}

      {activeSection === 'Акции и скидки' && (
        <PromosPage products={products} onAddToCart={addToCart} onNavigate={setActiveSection} />
      )}

      <Footer />
    </div>
  );
};

export default Index;
