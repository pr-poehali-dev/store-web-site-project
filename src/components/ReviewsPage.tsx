import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ReviewsPage = () => {
  const reviews = [
    { name: 'Алексей М.', rating: 5, text: 'Отличный магазин! Заказал смартфон, доставили на следующий день. Товар полностью соответствует описанию.' },
    { name: 'Мария К.', rating: 5, text: 'Очень довольна покупкой наушников. Качество звука превосходное, цена приятно удивила. Буду заказывать еще!' },
    { name: 'Дмитрий С.', rating: 4, text: 'Хороший ассортимент, адекватные цены. Немного задержалась доставка, но в целом все отлично.' }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold mb-8">Отзывы покупателей</h2>
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-foreground/80">{review.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsPage;
