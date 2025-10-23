import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
}

interface PromosPageProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onNavigate: (section: string) => void;
}

const PromosPage = ({ products, onAddToCart, onNavigate }: PromosPageProps) => {
  const promoProducts = products.filter(p => p.badge);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Акции и скидки</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-white">
            <CardContent className="p-8">
              <Badge className="mb-4 bg-accent text-accent-foreground">До конца месяца</Badge>
              <h3 className="text-3xl font-bold mb-4">Скидка 30% на аудиотехнику</h3>
              <p className="text-white/90 mb-6">Наушники, колонки и другие аудиоустройства со скидкой до 30%</p>
              <Button variant="secondary" size="lg" onClick={() => onNavigate('Каталог')}>
                Смотреть товары
              </Button>
            </CardContent>
          </Card>
          <Card className="overflow-hidden bg-gradient-to-br from-secondary to-secondary/80 text-white">
            <CardContent className="p-8">
              <Badge className="mb-4 bg-accent text-accent-foreground">Новинка</Badge>
              <h3 className="text-3xl font-bold mb-4">Новые смартфоны в продаже</h3>
              <p className="text-white/90 mb-6">Успейте приобрести новейшие модели смартфонов по специальной цене</p>
              <Button variant="secondary" size="lg" onClick={() => onNavigate('Каталог')}>
                Посмотреть
              </Button>
            </CardContent>
          </Card>
        </div>
        <h3 className="text-2xl font-bold mb-6">Товары по акции</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promoProducts.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromosPage;
