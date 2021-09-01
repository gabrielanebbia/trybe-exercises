window.onload = function() {

  function backgroundColor(color) {
      let background = document.querySelector('body');
      background.style.backgroundColor = color;
      localStorage.setItem('backgroundColor', color);
  }  
  
  function textColor(color) {
      let textColor = document.querySelector('body');
      textColor.style.color = color;
      localStorage.setItem('textColor', color);
  }
  
  function fontSize(size) {
    let fontSize = document.querySelector('.text');
    fontSize.style.fontSize = size;
    localStorage.setItem('fontSize', size);
  }
  
  function lineHeight(height) {
    let lineHeight = document.querySelector('.text');
    lineHeight.style.lineHeight = height;
    localStorage.setItem('lineHeight', height);
  }
  
  function fontFamily(family) {
    let fontFamily = document.querySelector('body');
    fontFamily.style.fontFamily = family;
    localStorage.setItem('fontFamily', family);
  }
  
  let buttonBackgroundColor = document.querySelector('body');
  for (let index = 0; index < buttonBackgroundColor.length; index += 1) {
    buttonBackgroundColor[index].addEventListener("click", function(){
    backgroundColor()
  })
  }
  
  let buttonTextColor = document.querySelector('body');
  for (let index = 0; index < buttonTextColor.length; index += 1) {
    buttonTextColor[index].addEventListener("click", function(){
    TextColor()
  })
  }
  
  let buttonFontSize = document.querySelector('.text')
  for (let index = 0; index < buttonFontSize.length; index += 1) {
    buttonFontSize[index].addEventListener("click", function(){
    fontSize()
  })
  }
  
  let buttonLineHeight = document.querySelector('.text');
  for (let index = 0; index < buttonLineHeight.length; index += 1) {
    buttonLineHeight[index].addEventListener("click", function(){
    lineHeight()
  })
  }
  
  let buttonFontFamily = document.querySelector()
  for (let index = 0; index < buttonFontFamily.length; index += 1) {
    buttonFontFamily[index].addEventListener("click", function(){
    fontFamily()
  })
  }
}
