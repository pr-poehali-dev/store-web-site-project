import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Смартфон Pro X',
    price: 89990,
    image: 'https://cdn.poehali.dev/projects/99c9446f-d3a6-4969-8647-898b7e34b152/files/23cc3830-4703-430d-a8f8-c16b9ab5f53b.jpg',
    category: 'Смартфоны',
    badge: 'ХИТ'
  },
  {
    id: 2,
    name: 'Беспроводные наушники AirSound',
    price: 12990,
    image: 'https://cdn.poehali.dev/projects/99c9446f-d3a6-4969-8647-898b7e34b152/files/5269322b-073b-43ef-b6c8-76878a70126a.jpg',
    category: 'Аудио',
    badge: '-30%'
  },
  {
    id: 3,
    name: 'Умные часы FitWatch',
    price: 24990,
    image: 'https://cdn.poehali.dev/projects/99c9446f-d3a6-4969-8647-898b7e34b152/files/51467635-1aee-453a-b548-49f690086b16.jpg',
    category: 'Носимые устройства',
    badge: 'NEW'
  },
  {
    id: 4,
    name: 'Ноутбук UltraBook Pro',
    price: 119990,
    image: 'https://cdn.poehali.dev/projects/99c9446f-d3a6-4969-8647-898b7e34b152/files/23cc3830-4703-430d-a8f8-c16b9ab5f53b.jpg',
    category: 'Компьютеры'
  },
  {
    id: 5,
    name: 'Планшет TabPro 12',
    price: 54990,
    image: 'https://cdn.poehali.dev/projects/99c9446f-d3a6-4969-8647-898b7e34b152/files/23cc3830-4703-430d-a8f8-c16b9ab5f53b.jpg',
    category: 'Планшеты',
    badge: '-15%'
  },
  {
    id: 6,
    name: 'Игровая консоль GameBox',
    price: 39990,
    image: 'https://cdn.poehali.dev/projects/99c9446f-d3a6-4969-8647-898b7e34b152/files/23cc3830-4703-430d-a8f8-c16b9ab5f53b.jpg',
    category: 'Гейминг'
  }
];

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

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = ['Главная', 'Каталог', 'О нас', 'Доставка и оплата', 'Отзывы', 'Акции и скидки'];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                TechStore
              </h1>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map(item => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="Heart" size={20} />
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Icon name="ShoppingCart" size={20} />
                    {totalItems > 0 && (
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-primary text-xs">
                        {totalItems}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-md">
                  <SheetHeader>
                    <SheetTitle>Корзина</SheetTitle>
                  </SheetHeader>
                  <div className="mt-8 space-y-4">
                    {cart.length === 0 ? (
                      <p className="text-center text-muted-foreground py-8">Корзина пуста</p>
                    ) : (
                      <>
                        {cart.map(item => (
                          <div key={item.id} className="flex gap-4 items-center">
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                            <div className="flex-1">
                              <h4 className="font-medium text-sm">{item.name}</h4>
                              <p className="text-sm text-muted-foreground">{item.price.toLocaleString()} ₽</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button size="icon" variant="outline" className="h-8 w-8" onClick={() => updateQuantity(item.id, -1)}>
                                <Icon name="Minus" size={14} />
                              </Button>
                              <span className="w-8 text-center font-medium">{item.quantity}</span>
                              <Button size="icon" variant="outline" className="h-8 w-8" onClick={() => updateQuantity(item.id, 1)}>
                                <Icon name="Plus" size={14} />
                              </Button>
                            </div>
                            <Button size="icon" variant="ghost" onClick={() => removeFromCart(item.id)}>
                              <Icon name="Trash2" size={16} />
                            </Button>
                          </div>
                        ))}
                        <div className="border-t pt-4 space-y-4">
                          <div className="flex items-center justify-between text-lg font-bold">
                            <span>Итого:</span>
                            <span>{totalPrice.toLocaleString()} ₽</span>
                          </div>
                          <Button className="w-full" size="lg">
                            Оформить заказ
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {activeSection === 'Главная' && (
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
                  <Button size="lg" className="text-lg px-8" onClick={() => setActiveSection('Каталог')}>
                    В каталог
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => setActiveSection('Акции и скидки')}>
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
                <Button variant="ghost" onClick={() => setActiveSection('Каталог')}>
                  Все товары
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.slice(0, 3).map(product => (
                  <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
                          <Button onClick={() => addToCart(product)} className="gap-2">
                            <Icon name="ShoppingCart" size={18} />
                            В корзину
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
      )}

      {activeSection === 'Каталог' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8">Каталог товаров</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
                        <Button onClick={() => addToCart(product)} className="gap-2">
                          <Icon name="ShoppingCart" size={18} />
                          В корзину
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'О нас' && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold mb-8">О компании TechStore</h2>
            <div className="space-y-6 text-lg text-foreground/80">
              <p>
                TechStore — это современный интернет-магазин электроники и гаджетов, работающий на рынке с 2020 года.
                Мы специализируемся на продаже качественной техники от ведущих мировых производителей.
              </p>
              <p>
                Наша миссия — сделать новейшие технологии доступными для каждого. Мы тщательно отбираем товары,
                работаем только с официальными поставщиками и предоставляем полную гарантию на всю продукцию.
              </p>
              <p>
                В нашем ассортименте вы найдете смартфоны, ноутбуки, планшеты, носимые устройства и многое другое.
                Профессиональная команда консультантов всегда готова помочь с выбором.
              </p>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'Доставка и оплата' && (
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
      )}

      {activeSection === 'Отзывы' && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold mb-8">Отзывы покупателей</h2>
            <div className="space-y-6">
              {[
                { name: 'Алексей М.', rating: 5, text: 'Отличный магазин! Заказал смартфон, доставили на следующий день. Товар полностью соответствует описанию.' },
                { name: 'Мария К.', rating: 5, text: 'Очень довольна покупкой наушников. Качество звука превосходное, цена приятно удивила. Буду заказывать еще!' },
                { name: 'Дмитрий С.', rating: 4, text: 'Хороший ассортимент, адекватные цены. Немного задержалась доставка, но в целом все отлично.' }
              ].map((review, index) => (
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
      )}

      {activeSection === 'Акции и скидки' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8">Акции и скидки</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-white">
                <CardContent className="p-8">
                  <Badge className="mb-4 bg-accent text-accent-foreground">До конца месяца</Badge>
                  <h3 className="text-3xl font-bold mb-4">Скидка 30% на аудиотехнику</h3>
                  <p className="text-white/90 mb-6">Наушники, колонки и другие аудиоустройства со скидкой до 30%</p>
                  <Button variant="secondary" size="lg" onClick={() => setActiveSection('Каталог')}>
                    Смотреть товары
                  </Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden bg-gradient-to-br from-secondary to-secondary/80 text-white">
                <CardContent className="p-8">
                  <Badge className="mb-4 bg-accent text-accent-foreground">Новинка</Badge>
                  <h3 className="text-3xl font-bold mb-4">Новые смартфоны в продаже</h3>
                  <p className="text-white/90 mb-6">Успейте приобрести новейшие модели смартфонов по специальной цене</p>
                  <Button variant="secondary" size="lg" onClick={() => setActiveSection('Каталог')}>
                    Посмотреть
                  </Button>
                </CardContent>
              </Card>
            </div>
            <h3 className="text-2xl font-bold mb-6">Товары по акции</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.filter(p => p.badge).map(product => (
                <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground font-semibold">
                        {product.badge}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                      <h4 className="text-lg font-semibold mb-3">{product.name}</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{product.price.toLocaleString()} ₽</span>
                        <Button onClick={() => addToCart(product)} className="gap-2">
                          <Icon name="ShoppingCart" size={18} />
                          В корзину
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

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
    </div>
  );
};

export default Index;
