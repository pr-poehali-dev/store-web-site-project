import { Button } from '@/components/ui/button';
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

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  cart: CartItem[];
  updateQuantity: (id: number, delta: number) => void;
  removeFromCart: (id: number) => void;
}

const Header = ({ activeSection, setActiveSection, cart, updateQuantity, removeFromCart }: HeaderProps) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const navItems = ['Главная', 'Каталог', 'О нас', 'Доставка и оплата', 'Отзывы', 'Акции и скидки'];

  return (
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
  );
};

export default Header;
