window.addEventListener('DOMContentLoaded', function(){
  let btn = document.getElementById('btn')
  let input = document.getElementById('input')
  let signatureContent = document.getElementById('age_signature')
  let ageTitle = document.getElementById('age_title')
  let ageImg = document.getElementById('age_img')
  let inputLable = document.querySelector('.input-lable')
  let date = new Date().getFullYear()
  let preloader = document.getElementById('preloader')

  // animation preloader
  function preFade(e){
    e.style.opacity = 1
    let preInterval = setInterval(function() {
      e.style.opacity = e.style.opacity - 0.05
      if(e.style.opacity <= 0){
        clearInterval(preInterval)
        preloader.style.display = 'none'
      }
    }, 16);
  }
  window.onload = function (e) {  
    setTimeout(function () {  
      preFade(preloader)
    }, 2000)
  }

  // the opening of the block not comfortable with voice input, age and signature
  function inputEmpty(e) {  
    let ageBlock = document.getElementById('age_block')
    let ageDate = document.querySelector('.age__date')
    let attention = document.getElementById('attention')
    let linkAuthor = document.querySelector('.link')
    
    ageBlock.style.display = 'none'
    linkAuthor.style.display = 'none'
    setTimeout(function() {  
      ageBlock.style.opacity = '0'
      linkAuthor.style.opacity = '0'
      document.querySelector('.wrapper').style.overflow = 'hidden'
    }, 1000)
    ageDate.classList.remove('_active')
    attention.classList.add('_emptyField')
  }

  // calculating the age and determining the title, caption, and GIF
  function whatInfo(){
    let age = date - input.value // the difference between the current year (2020) and the input value (age)
    var randomIndex = Math.floor(Math.random() * 3)
    ageTitle.textContent = age + ' лет'
    if (input.value == ''){ // empty input
      inputEmpty()
    }
    if (age < 0){ // age less than 0
      var gifFuture = ['faZJRjwNERTZC', 'N71kWAa1wM7NC', 'Vqvr9BGv1vhDi']
      ageImg.src='https://media.giphy.com/media/' + gifFuture[randomIndex] + '/source.gif'
      signatureContent.textContent = 'How are you doing Marty?'
    }
    if (age >=0 && age <6) { // the age is greater than or equal to 0 and strictly less than 6
      signatureContent.textContent = 'You are very cute)))'
      ageImg.src='https://media.giphy.com/media/AGGz7y0rCYxdS/source.gif'
    } 
    if (age >=6 && age <12) { // the age is greater than or equal to 6 and strictly less than 12
      signatureContent.textContent = 'This a genius age!!!'
      ageImg.src='https://media.giphy.com/media/Lu94S7ZRGJ9mM/source.gif'
    }
    if (age >=12 && age <18) { // the age is greater than or equal to 12 and strictly less than 18
      signatureContent.textContent = 'How are you bro?)'
      ageImg.src='https://media.giphy.com/media/46RrPTYlYIemQ/source.gif'
    }
    if (age >=18 && age <26) { // the age is greater than or equal to 18 and strictly less than 26
      signatureContent.textContent = 'We are the same age! Probably.'
      ageImg.src='https://media.giphy.com/media/edLKLYMlNFPJC/giphy.gif'
    }
    if (age >=26 && age <50) { // the age is greater than or equal to 26 and strictly less than 50
      signatureContent.textContent = 'Middle-aged man.'
      ageImg.src='https://media.giphy.com/media/l46CeDBwmtMi1ddkc/source.gif'
    }
    if (age >=50 && age <60) { // the age is greater than or equal to 50 and strictly less than 60
      signatureContent.textContent = 'I was too lazy to look for a GIF.'
      ageImg.src='https://hi-news.ru/wp-content/uploads/2018/05/lbert-650x366.jpg'
    }
    if (age >=60 && age <90) { // the age is greater than or equal to 60 and strictly less than 90
      signatureContent.textContent = 'Your sand?'
      ageImg.src='https://media.giphy.com/media/r52xR8XLhq1Zm/giphy.gif'
    }
    if (age >=90 && age <122) { // the age is greater than or equal to 90 and strictly less than 122
      signatureContent.textContent = 'You are good)))'
      ageImg.src='https://media.giphy.com/media/11ISwbgCxEzMyY/source.gif'
    }
    if (age >=122 && age <140) { // the age is greater than or equal to 122 and strictly less than 140
      signatureContent.textContent = 'Either you are a demon, or contact the record book soon!!! You are the oldest!!!'
      ageImg.src='https://media.giphy.com/media/AGGz7y0rCYxdS/source.gif'
    }
    if (age >=140 && age <200) { // the age is greater than or equal to 140 and strictly less than 200
      signatureContent.textContent = 'VAMPIIIIRE!!!!'
      ageImg.src='https://media.giphy.com/media/49P00GTi0B4vm/source.gif'
    }
    if (age >=200 && input.value != '' && input.value != 0) { // the difference between this year and the input value is greater than or equal to 200 and the input value is not empty and also not equal to 0
      signatureContent.textContent = 'What are you?'
      ageImg.src='https://media.giphy.com/media/fMvvwdTWamlA4/source.gif'
    }
    input.value = '' // zeroing the input value    
  }

  // the opening of the block not comfortable with voice input, age and signature
  function btnClick(e) {  
    let ageBlock = document.getElementById('age_block')
    let ageDate = document.querySelector('.age__date')
    let linkAuthor = document.querySelector('.link')

    ageBlock.style.display = 'flex'
    linkAuthor.style.display = 'flex'
    setTimeout(function() {  
      ageBlock.style.opacity = '1'
      linkAuthor.style.opacity = '1'
      document.querySelector('.wrapper').style.overflow = 'auto'
    }, 1000)
    ageDate.classList.add('_active')
    inputLable.classList.remove('_emptyField')
  }

  // when you click on the "Find out" button, the btnClick() and whatInfo() functions are executed
  btn.addEventListener('click', function(e){
    e.preventDefault()
    if (input.value == ''){ // empty value input
      inputEmpty()
    }else{
      whatInfo()
      btnClick()
    }
  })
  
  //  after entering a number in input and clicking on enter, the btnClick() and whatInfo() functions are executed
  document.addEventListener('keypress', function (e) {
    if(e.keyCode === 13){
      if (input.value == ''){ // empty value input
        inputEmpty()
      }else{
        whatInfo()
        btnClick()
      }
    }
    if(input.value != ''){
      attention.classList.remove('_emptyField')
    }
  })

})