'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const arrPizza = [
      {
        id: 1,
        path: '/pizza',
        product_category: 'Пицца',
        product_name: 'Пицца Диавола',
        composition:
          'Пепперони, масло острое, соус томатный, тесто для пиццы, сыр моцарелла',
        image:
          'https://static.yamiyami.ru/assets/images/resize/product/desktop/preview/66343735-6337-4636-b338-376164616464.webp',
        price: 320,
        weight: 310,
        onlyValuesOfDishues: 1,
        forBasket: 1,
      },
      {
        id: 2,
        path: '/pizza',
        product_category: 'Пицца',
        product_name: 'Пицца Маргарита',
        composition:
          'Соус песто, томаты черри, соус томатный, тесто для пиццы, сыр моцарелла',
        image:
          '    https://static.yamiyami.ru/assets/images/resize/product/desktop/preview/39396666-6336-4338-a434-636665653362.webp ',
        price: 340,
        weight: 300,
        onlyValuesOfDishues: 1,
        forBasket: 1,
      },
      {
        id: 3,
        path: '/pizza',
        product_category: 'Пицца',
        product_name: 'Пицца с цыплёнком ранч ',
        composition:
          'Моцарелла, филе куриное, бекон, соус ранч (соус маскарпоне, майонез, петрушка, лук зеленый, чеснок, соль), тесто для пиццы, соус сырный',
        image:
          'https://static.yamiyami.ru/assets/images/resize/product/desktop/preview/33623438-3938-4964-b062-616232393064.webp',
        price: 312,
        weight: 300,
        onlyValuesOfDishues: 1,
        forBasket: 1,
      },
      // на пробу не успеваю форму зафигачить
      {
        id: 4,
        path: '/shaverma',
        product_category: 'Шаверма',
        product_name: 'Шаверма Диавола',
        composition:
          'Пепперони, масло острое, соус томатный, тесто для пиццы, сыр моцарелла',
        image: 'https://cdn.bahroma1.ru/goods/shaverma_nov.jpg',
        price: 323,
        weight: 300,
        onlyValuesOfDishues: 1,
        forBasket: 1,
      },
      {
        id: 5,
        path: '/salati',
        product_category: 'Салат',
        product_name: 'Салат Маргарита',
        composition:
          'Соус песто, томаты черри, соус томатный, тесто для пиццы, сыр моцарелла',
        image:
          ' https://www.m24.ru/b/d/nBkSUhL2hFQum8m3Ib6BvMKnxdDs95C-yyqYy7jLs2KQeXqLBmmcmzZh59JUtRPBsdaJqSfJd54qEr7t1mNwKSGK7WY=61Vh38tDCEnquu1EobbzVw.jpg',
        price: 345,
        weight: 300,
        onlyValuesOfDishues: 1,
        forBasket: 1,
      },
      {
        id: 6,
        path: '/vareniki',
        product_category: 'Вареники',
        product_name: 'Вареники с цыплёнком  ',
        composition:
          'Моцарелла, филе куриное, бекон, соус ранч (соус маскарпоне, майонез, петрушка, лук зеленый, чеснок, соль), тесто для пиццы, соус сырный',
        image:
          'https://e1.edimdoma.ru/data/posts/0002/3324/23324-ed4_wide.jpg?1643709189',
        price: 300,
        weight: 300,
        onlyValuesOfDishues: 1,
        forBasket: 1,
      },
    ];
    const demoPizza = arrPizza.map((pizza) => ({
      ...pizza,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Product_Cards', demoPizza);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete('Product_Cards');
  },
};
