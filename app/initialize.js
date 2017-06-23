// инициализация jquery
// подключение jquery
// jquery - библиотека для работы с DOM (документом)
import $ from "jquery"

// инициализация данных о товарах
// поключаем наши массивы объектов (данные) в этот файл для работы с ними
// извлекаем массив rings из файла который лежит в ./content/rings.js
import rings from './content/rings.js'
// далее по аналогии
import bracelets from './content/bracelets.js'
import earrings from './content/earrings.js'
import chokers from './content/chokers.js'
import pendant from './content/pendant.js'
import necklace from './content/necklace.js'

// функция которая возвращает нам строку
function getGridClass () {
  const number = Math.floor(Math.random() * 10)
  // получаем случайное число от 0 до 10
  // Math.random() вернет 0 -> 1 с числами после запятой
  // Math.random() * 10 вернет тоже самое, что выше, только умноженное на 10 (от 1 до 10)
  // Math.floor() обрежет нам числа после запятой

  // возвращаем строку с классом в зависимости от результата условия
  if (number > 5) {
    // если число больше 5 вернет эту строку
    return 'content-item'
  } else {
    // если число меньше 5 вернет эту строку
    return 'content-item content-item--big'
  }
}

function getItems (data, name) {
  // data, name — это аргументы функции которые могут быть чем угодно, но нам нужно
  // чтобы это был data — массив объектов, а name — строка

  const earrings = [
    {
      id: 1,
      name: 'Серьги и брасл из агата',
      image_path: 'earrings-1'
    },
    {
      id: 2,
      name: 'Серьги и браслет из агата 2',
      image_path: 'earrings-2',
    }
  ]

  // пробегаемся по массиву
  return data.map((item, index) => {
    // здесь item это каждый элемент массива, например
    // {
    //  id: 2,
    //  name: 'Серьги и браслет из агата 2',
    //  image_path: 'earrings-2'
    // },

    const result = `
      <div class='${getGridClass()}' style='background-image: url(../images/${item.image_path}.jpg)'>
        <input type="hidden" value="../images/${item.image_path}.jpg" />
        <div class="content-info">
          <div class="content-title">${item.name}</div>
        </div>
        <div class="content-button">ПРОСМОТРЕТЬ</div>
      </div>
    `

    // добавляем сгенерированный html внутрь блока в HTML
    $(`.${name} .content`).append(result)
  })
}

function initModal () {
  // инициализация модального окна

  $('.content-item').on('click', function () {
    $('.modal').show()
    $('.modal .modal-inner').css('background-image', `url(${$(this).find('input').val()})`)
  })

  $('.modal-close').on('click', function () {
    $('.modal').hide()
  })

  $('.modal-background').on('click', function () {
    $('.modal').hide()
  })
}

$(document).ready(() => {
  // генерирование всех товаров в HTML
  getItems(bracelets, 'bracelets')
  getItems(chokers, 'chokers')
  getItems(earrings, 'earrings')
  getItems(rings, 'rings')
  // getItems(pendant, 'pendant')
  // getItems(necklace, 'necklace')

  initModal()
})
