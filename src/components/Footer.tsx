import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-foreground/5 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold">TechStore</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Ваш надежный магазин электроники и гаджетов
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Покупателям</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Как сделать заказ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Способы оплаты</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Доставка</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Гарантия</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Партнерам</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@techstore.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Примерная, 123</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 TechStore. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
