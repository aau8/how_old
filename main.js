window.addEventListener('DOMContentLoaded', function(){
  let btn = document.getElementById('btn')
  let input = document.getElementById('input')
  let signatureContent = document.getElementById('age_signature')
  let ageTitle = document.getElementById('age_title')
  let ageImg = document.getElementById('age_img')
  let inputLable = document.querySelector('.input-lable')
  let date = new Date().getFullYear()

  // открытие блока с гифкой, возрастом и подписью
  function inputEmpty(e) {  
    let ageBlock = document.getElementById('age_block')
    let ageDate = document.querySelector('.age__date')

    ageBlock.style.display = 'none'
    setTimeout(function() {  
      ageBlock.style.opacity = '0'
    }, 1000)
    ageDate.classList.remove('_active')
    inputLable.classList.add('_emptyField')
  }

  // вычисление возраста и определение заголовка, подписи и гифки
  function whatInfo(){
    let age = date - input.value // разность нынешнего года (2020) и значения input (возраст)
    var randomIndex = Math.floor(Math.random() * 3)
    ageTitle.textContent = age + ' лет'
    if (input.value == ''){ // пустой input
      inputEmpty()
      signatureContent.textContent = 'Я не экстрасенс! Пожалуйста, введи год рождения)'
    }
    if (age < 0){ // возраст меньше 0
      var gifFuture = ['faZJRjwNERTZC', 'N71kWAa1wM7NC', 'Vqvr9BGv1vhDi']
      ageImg.src='https://media.giphy.com/media/' + gifFuture[randomIndex] + '/source.gif'
      signatureContent.textContent = 'Как дела Марти?'
    }
    if (age >=0 && age <6) { // возраст больше или равно 0 и строго меньше 6
      signatureContent.textContent = 'Ути-пути)))'
      ageImg.src='https://media.giphy.com/media/AGGz7y0rCYxdS/source.gif'
    } 
    if (age >=6 && age <12) { // возраст больше или равен 6 и строго меньше 12
      signatureContent.textContent = 'Это гениальный возраст!!!'
      ageImg.src='https://media.giphy.com/media/Lu94S7ZRGJ9mM/source.gif'
    }
    if (age >=12 && age <18) { // возраст больше или равно 12 и строго меньше 18
      signatureContent.textContent = 'Чо, как оно?)'
      ageImg.src='https://media.giphy.com/media/46RrPTYlYIemQ/source.gif'
    }
    if (age >=18 && age <26) { // возраст больше или равно 18 и строго меньше 26
      signatureContent.textContent = 'Да мы с тобой ровесники! Наверно.'
      ageImg.src='https://media.giphy.com/media/edLKLYMlNFPJC/giphy.gif'
    }
    if (age >=26 && age <50) { // возраст больше или равно 26 и строго меньше 50
      signatureContent.textContent = 'Человечек среднего возраста'
      ageImg.src='https://media.giphy.com/media/l46CeDBwmtMi1ddkc/source.gif'
    }
    if (age >=50 && age <60) { // возраст больше или равно 50 и строго меньше 90
      signatureContent.textContent = 'Мне было лень искать гифку.'
      ageImg.src='https://hi-news.ru/wp-content/uploads/2018/05/lbert-650x366.jpg'
    }
    if (age >=60 && age <90) { // возраст больше или равно 50 и строго меньше 90
      signatureContent.textContent = 'Ваш песочек?'
      ageImg.src='https://media.giphy.com/media/r52xR8XLhq1Zm/giphy.gif'
    }
    if (age >=90 && age <122) { // возраст больше или равно 90 и строго меньше 122
      signatureContent.textContent = 'А ты хорош)))'
      ageImg.src='https://media.giphy.com/media/11ISwbgCxEzMyY/source.gif'
    }
    if (age >=122 && age <140) { // возраст больше или равно 122 и строго меньше 140
      signatureContent.textContent = 'Либо ты демон, либо скорее свяжись с книгой рекордов!!! Ты самый старый!!!'
      ageImg.src='https://media.giphy.com/media/AGGz7y0rCYxdS/source.gif'
    }
    if (age >=140 && age <200) { // возраст больше или равно 140 и строго меньше 200
      signatureContent.textContent = 'ВАМПИИИИИИР!!!!'
      ageImg.src='https://media.giphy.com/media/49P00GTi0B4vm/source.gif'
    }
    if (age >=200 && input.value != '' && input.value != 0) { // разность нынешнего года и значения input больше или равно 200 и значение input не пустое и также не равно 0
      signatureContent.textContent = 'Что ты такое?'
      ageImg.src='https://media.giphy.com/media/fMvvwdTWamlA4/source.gif'
    }
    input.value = '' // обнуление значения input    
  }

  // открытие блока с гифкой, возрастом и подписью
  function btnClick(e) {  
    let ageBlock = document.getElementById('age_block')
    let ageDate = document.querySelector('.age__date')

    ageBlock.style.display = 'flex'
    setTimeout(function() {  
      ageBlock.style.opacity = '1'
    }, 1000)
    ageDate.classList.add('_active')
    inputLable.classList.remove('_emptyField')
  }

  // при клике по кнопке "Узнать" выполниться функция btnClick() b whatInfo()
  btn.addEventListener('click', function(e){
    if (input.value == ''){ // пустой input
      inputEmpty()
    }else{
      whatInfo()
      btnClick()
    }
  })
  
  //  после ввода числа в input и клика на enter, выполниться функция btnClick() и whatInfo()
  document.addEventListener('keypress', function (e) {
    if(e.keyCode === 13){
      if (input.value == ''){ // пустой input
        inputEmpty()
      }else{
        whatInfo()
        btnClick()
      }
    }else{}
  })
})