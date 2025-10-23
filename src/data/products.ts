export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
}

export const products: Product[] = [
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
