# pizza

1.Сделать страничку главную =
1.1. хедер спсок блюд
1.2. футер контакты и тд
1.3. бади категория пицц

2.

ПРИБЛУДЫ:
чтобы вписывать названия продуктов вместо id в параметры

String.prototype.translit = String.prototype.translit || function() {
let Chars = {
'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya', 'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'YO', 'Ж': 'ZH', 'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'CH', 'Ш': 'SH', 'Щ': 'SHCH', 'Ъ': '', 'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'YU', 'Я': 'YA'," ":"\_"
},
t = this;
console.log(t)
for (let i in Chars) { t = t.replace(new RegExp(i, 'g'), Chars[i]); }
return t;
};

console.log("транслитирировать строку".translit());

// const menuArr = [
// {
// name: 'Пицца',
// img: 'https://static.yamiyami.ru/assets/images/resize/product/desktop/preview/66343735-6337-4636-b338-376164616464.webp',
// path: '/pizza',
// },
// {
// name: 'Японская кухня',
// img: 'https://img.myslo.ru/NewsImage/76/e7/76e75796-19d1-4a6f-bb8d-ba68d9596981_3.jpg',
// path: '/',
// },
// {
// name: 'Шаверма',
// img: 'https://vkus-eda-dostavka.ru/static/images/05b72d3252cdb4653ece78555e7cb04d-600x450.jpeg',
// path: '/pizza',
// },
// {
// name: 'Салаты',
// img: 'https://zira.uz/wp-content/uploads/2018/07/italyanskiy-salat-2.jpg',
// path: '/pizza',
// },
// {
// name: 'Первое блюдо',
// img: 'https://shuba.life/static/content/thumbs/740x493/9/f4/drkpup---c740x493x50px50p-c740x493x50px50p-up--83eb4f9d484e425726fa959b5a7baf49.jpg',
// path: '/pizza',
// },
// {
// name: 'Горячие блюда',
// img: 'https://hip2go.ru/api2/images/IikoProducts26/c1c668e7c6-1_500x353.jpg',
// path: '/pizza',
// },
// {
// name: 'Паста и ризотто',
// img: 'https://fishbox-rest.ru/wp-content/uploads/2022/01/pasta-and-risotto-400x267.jpg',
// path: '/pizza',
// },
// {
// name: 'Вареники',
// img: 'https://img.delo-vcusa.ru/2012/10/DSC_0798_1.jpg',
// path: '/pizza',
// },
// ];
