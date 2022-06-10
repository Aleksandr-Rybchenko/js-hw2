"use strict"
function operete(){
    let userName = prompt('введите свое имя')
    while (!isNaN(userName) || userName === null || userName === 0){
      userName = prompt('ввведите коректное имя')
    }
    let userAge = +prompt('введите возраст')
    while (isNaN(userAge) || userAge === null || userAge === 0){
      userAge = +prompt('введите коректный возраст')
    }
     if (userAge === 18 || userAge === 19 || userAge === 20 || userAge === 21 || userAge === 22){
      if (confirm('Are you sure you want to continue?')){
      alert(`Welcome, ${userName}`)
    }else {
      alert('You are not allowed to visit this website.')
      }
    }else if (userAge > 22){
      alert(`Welcome, ${userName}`)
    }else {
       alert(`${userName}, You are not allowed to visit this website. `)
       operete()
     }}
    operete()


    // 1. существуют типы данных: Строка, число, булевый тип, null, undefined, обьекты, typeof, symbol
    // 2. == и === - это строгое и не строгое сравнение типов, не строгое == это сравнение величин производится приведение типов, а строгое равно === сравнивает величины без приведения типов.
    // 3. это какая-то операция между двумя операндами, например а = b, где "=" это наш оператор
