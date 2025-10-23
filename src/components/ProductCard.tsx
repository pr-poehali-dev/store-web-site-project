import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {product.badge && (
            <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground font-semibold">
              {product.badge}
            </Badge>
          )}
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Icon name="Heart" size={18} />
          </Button>
        </div>
        <div className="p-6">
          <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
          <h4 className="text-lg font-semibold mb-3">{product.name}</h4>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">{product.price.toLocaleString()} ₽</span>
            <Button onClick={() => onAddToCart(product)} className="gap-2">
              <Icon name="ShoppingCart" size={18} />
              В корзину
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
