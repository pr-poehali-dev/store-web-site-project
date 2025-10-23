import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import ProductCard from '@/components/ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
}

interface HomePageProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onNavigate: (section: string) => void;
}

const HomePage = ({ products, onAddToCart, onNavigate }: HomePageProps) => {
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Новейшая электроника<br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                для вашего успеха
              </span>
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Смартфоны, ноутбуки, гаджеты от ведущих мировых брендов. Быстрая доставка и гарантия качества.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="text-lg px-8" onClick={() => onNavigate('Каталог')}>
                В каталог
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => onNavigate('Акции и скидки')}>
                Акции
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold">Хиты продаж</h3>
            <Button variant="ghost" onClick={() => onNavigate('Каталог')}>
              Все товары
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Быстрая доставка</h4>
              <p className="text-muted-foreground">Доставим ваш заказ в течение 1-2 дней по всей России</p>
            </Card>
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldCheck" size={32} className="text-secondary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Гарантия качества</h4>
              <p className="text-muted-foreground">Официальная гарантия на всю технику от производителя</p>
            </Card>
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Percent" size={32} className="text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Выгодные акции</h4>
              <p className="text-muted-foreground">Регулярные скидки и специальные предложения для вас</p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
