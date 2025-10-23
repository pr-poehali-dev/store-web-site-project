import ProductCard from '@/components/ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
}

interface CatalogPageProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const CatalogPage = ({ products, onAddToCart }: CatalogPageProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Каталог товаров</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogPage;
