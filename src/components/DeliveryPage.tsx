import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const DeliveryPage = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold mb-8">Доставка и оплата</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Icon name="Truck" className="text-primary" size={28} />
              Доставка
            </h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex gap-2">
                <Icon name="Check" className="text-secondary mt-1" size={18} />
                <span>Курьерская доставка по Москве — 1-2 дня, 300 ₽</span>
              </li>
              <li className="flex gap-2">
                <Icon name="Check" className="text-secondary mt-1" size={18} />
                <span>Доставка по России — 3-5 дней, от 500 ₽</span>
              </li>
              <li className="flex gap-2">
                <Icon name="Check" className="text-secondary mt-1" size={18} />
                <span>Самовывоз из пункта выдачи — бесплатно</span>
              </li>
              <li className="flex gap-2">
                <Icon name="Check" className="text-secondary mt-1" size={18} />
                <span>Бесплатная доставка при заказе от 50 000 ₽</span>
              </li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Icon name="CreditCard" className="text-primary" size={28} />
              Оплата
            </h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex gap-2">
                <Icon name="Check" className="text-secondary mt-1" size={18} />
                <span>Банковской картой онлайн</span>
              </li>
              <li className="flex gap-2">
                <Icon name="Check" className="text-secondary mt-1" size={18} />
                <span>Наличными при получении</span>
              </li>
              <li className="flex gap-2">
                <Icon name="Check" className="text-secondary mt-1" size={18} />
                <span>Безналичный расчет для юр. лиц</span>
              </li>
              <li className="flex gap-2">
                <Icon name="Check" className="text-secondary mt-1" size={18} />
                <span>Рассрочка 0% на 6 месяцев</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DeliveryPage;
