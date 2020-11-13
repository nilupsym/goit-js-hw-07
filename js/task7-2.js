// В HTML есть пустой список ul#ingredients.

/* <ul id="ingredients"></ul> */
// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ul = document.querySelector('#ingredients');

const li1 = document.createElement('li');
li1.textContent = ingredients[0];

const li2 = document.createElement('li');
li2.textContent = ingredients[1];

const li3 = document.createElement('li');
li3.textContent = ingredients[2];

const li4 = document.createElement('li');
li4.textContent = ingredients[3];

const lis = [li1, li2, li3, li4];

ul.append(...lis);

console.log(ul);