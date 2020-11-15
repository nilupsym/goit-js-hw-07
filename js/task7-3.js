// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('#gallery');

// const li1 = document.createElement('li');
// const img1 = document.createElement('img');
// img1.src = images[0].url;
// img1.alt = images[0].alt;
// li1.appendChild(img1);

// const li2 = document.createElement('li');
// const img2 = document.createElement('img');
// img2.src = images[1].url;
// img2.alt = images[1].alt;
// li2.appendChild(img2);

// const li3 = document.createElement('li');
// const img3 = document.createElement('img');
// img3.src = images[2].url;
// img3.alt = images[2].alt;
// li3.appendChild(img3);

// const galleryListItems = [li1, li2, li3];

// galleryList.append(...galleryListItems);
// galleryList.style.listStyle = 'none';

// console.log(galleryList);

const galleryImage = image => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = image.url;
    img.alt = image.alt;
    li.appendChild(img);
    return li;
}

const galleryImages = images.map(image => galleryImage(image));

galleryList.append(...galleryImages);

galleryList.style.listStyle = 'none';