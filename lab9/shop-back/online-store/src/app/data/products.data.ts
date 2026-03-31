import { Category, Product } from '../models/product.model';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Десерты' },
  { id: 2, name: 'Напитки' },
  { id: 3, name: 'Основные блюда' },
  { id: 4, name: 'Закуски' },
];

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Шоколадный торт', description: 'Нежный бисквит с шоколадным кремом и ягодами', price: 1490, rating: 5.0, image: '🎂', categoryId: 1, likes: 12 },
  { id: 2, name: 'Чизкейк Нью-Йорк', description: 'Классический чизкейк с ягодным соусом', price: 1290, rating: 4.5, image: '🍰', categoryId: 1, likes: 8 },
  { id: 3, name: 'Тирамису', description: 'Итальянский десерт с маскарпоне и кофе', price: 1190, rating: 5.0, image: '🍮', categoryId: 1, likes: 21 },
  { id: 4, name: 'Панна-котта', description: 'Нежный сливочный десерт с карамелью', price: 990, rating: 4.7, image: '🍯', categoryId: 1, likes: 5 },
  { id: 5, name: 'Эклер', description: 'Французское пирожное с заварным кремом', price: 590, rating: 4.3, image: '🥐', categoryId: 1, likes: 9 },

  { id: 6, name: 'Капучино', description: 'Эспрессо с нежной молочной пенкой', price: 890, rating: 4.8, image: '☕', categoryId: 2, likes: 34 },
  { id: 7, name: 'Латте', description: 'Мягкий кофе с большим количеством молока', price: 990, rating: 4.6, image: '🥛', categoryId: 2, likes: 28 },
  { id: 8, name: 'Лимонад', description: 'Освежающий домашний лимонад с мятой', price: 790, rating: 4.4, image: '🍋', categoryId: 2, likes: 15 },
  { id: 9, name: 'Смузи манго', description: 'Тропический смузи из свежего манго', price: 1090, rating: 4.9, image: '🥭', categoryId: 2, likes: 19 },
  { id: 10, name: 'Матча латте', description: 'Японский чай матча с молоком', price: 1190, rating: 4.7, image: '🍵', categoryId: 2, likes: 22 },

  { id: 11, name: 'Паста карбонара', description: 'Классическая итальянская паста со сливочным соусом', price: 2490, rating: 4.9, image: '🍝', categoryId: 3, likes: 41 },
  { id: 12, name: 'Стейк', description: 'Сочный говяжий стейк на гриле с соусом', price: 4990, rating: 5.0, image: '🥩', categoryId: 3, likes: 38 },
  { id: 13, name: 'Бургер', description: 'Сочный бургер с говядиной и свежими овощами', price: 1990, rating: 4.6, image: '🍔', categoryId: 3, likes: 27 },
  { id: 14, name: 'Пицца маргарита', description: 'Классическая пицца с томатами и моцареллой', price: 2990, rating: 4.8, image: '🍕', categoryId: 3, likes: 33 },
  { id: 15, name: 'Борщ', description: 'Наваристый домашний борщ со сметаной', price: 1490, rating: 4.7, image: '🍲', categoryId: 3, likes: 16 },

  { id: 16, name: 'Брускетта', description: 'Хрустящий хлеб с томатами и базиликом', price: 890, rating: 4.5, image: '🥖', categoryId: 4, likes: 11 },
  { id: 17, name: 'Крылья buffalo', description: 'Острые куриные крылышки в соусе buffalo', price: 1590, rating: 4.8, image: '🍗', categoryId: 4, likes: 24 },
  { id: 18, name: 'Нагетсы', description: 'Хрустящие куриные нагетсы с соусом', price: 1190, rating: 4.4, image: '🐔', categoryId: 4, likes: 7 },
  { id: 19, name: 'Сырные шарики', description: 'Жареные шарики с сыром моцарелла', price: 990, rating: 4.6, image: '🧀', categoryId: 4, likes: 18 },
  { id: 20, name: 'Тар-тар из лосося', description: 'Свежий лосось с авокадо и соусом', price: 2190, rating: 4.9, image: '🐟', categoryId: 4, likes: 29 },
];