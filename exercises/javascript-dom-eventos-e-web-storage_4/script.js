window.onload = function() {
  
  function setBackgroundColor(color) {
    let background = document.querySelector('.main');
    background.style.backgroundColor = color;
  }  
  
  function setFontColor(color) {
    let fontColor = document.querySelectorAll('.paragraph');
    fontColor.style.color = color;
  }
  
  function setFontSize(size) {
    let fontSize = document.querySelector('.paragraph');
    fontSize.style.fontSize = size;
  }
  
  function setLineHeight(height) {
    let lineHeight = document.querySelector('.paragraph');
    lineHeight.style.lineHeight = height;
  }
  
  function setFontFamily(family) {
    let fontFamily = document.querySelectorAll('.paragraph');
    fontFamily.style.fontFamily = family;
  }
  
  let backgroundColorButtons = document.querySelectorAll('.backgroundColor>button');
  for (let index = 0; index < backgroundColorButtons.length; index += 1) {
    backgroundColorButtons[index].addEventListener("click", function(event){
    setBackgroundColor(event.target.innerText)
  })
  }
  
  let fontColorButtons = document.querySelectorAll('.fontColor>button');
  for (let index = 0; index < fontColorButtons.length; index += 1) {
    fontColorButtons[index].addEventListener("click", function(event){
    setFontColor(event.target.innerText)
  })
  }
  
  let fontSizeButtons = document.querySelectorAll('.fontSize>button');
  for (let index = 0; index < fontSizeButtons.length; index += 1) {
    fontSizeButtons[index].addEventListener("click", function(event){
    setFontSize(event.target.innerText)
  })
  }
  
  let lineHeightButtons = document.querySelectorAll('.lineHeight>button');
  for (let index = 0; index < lineHeightButtons.length; index += 1) {
    lineHeightButtons[index].addEventListener("click", function(event){
    setLineHeight(event.target.innerText)
  })
  }
  
  let fontFamilyButtons = document.querySelectorAll('.fontFamily>button');
  for (let index = 0; index < fontFamilyButtons.length; index += 1) {
    fontFamilyButtons[index].addEventListener("click", function(event){
    setFontFamily(event.target.innerText)
  })
  }
}
