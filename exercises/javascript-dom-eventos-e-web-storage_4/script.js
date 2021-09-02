window.onload = function() {
  
  function setBackgroundColor(color) {
    let background = document.querySelector("body");
    switch(color) {
      case "Branco":
        background.style.backgroundColor = "white";
        break;
      case "Cinza":
        background.style.backgroundColor = "grey";
        break;
      case "Preto":
        background.style.backgroundColor = "black";
        break;
    }
    localStorage.setItem("backgroundColor", color);
  }  
  
  function setFontColor(color) {
    let text = document.querySelectorAll(".text");
    for (let index = 0; index < text.length; index += 1) {
      switch(color) {
        case "Branco":
          text[index].style.color = "white";
          break;
        case "Amarelo":
          text[index].style.color = "yellow";
          break;
        case "Preto":
          text[index].style.color = "black";
          break;
      }
    }
    localStorage.setItem("fontColor", color);
}
  
  function setFontSize(size) {
    let textSize = document.querySelectorAll(".size");
    for (let index = 0; index < textSize.length; index += 1) {
      switch(size) {
        case "Pequena":
          textSize[index].style.fontSize = "small";
          break;
        case "Média":
          textSize[index].style.fontSize = "medium";
          break;
        case "Grande":
          textSize[index].style.fontSize= "larger";
          break;
      }
    }
    localStorage.setItem("fontSize", size);
  }
  
  function setLineHeight(height) {
    let paragraph = document.querySelector(".paragraph");
    paragraph.style.lineHeight = height;

    localStorage.setItem("lineHeight", height);
  }
  
  function setFontFamily(family) {
    let text = document.querySelectorAll(".text");
    for (let index = 0; index < text.length; index += 1) {
      switch(family) {
        case "Times New Roman":
          text[index].style.fontFamily = "Times New Roman";
          break;
        case "Arial":
          text[index].style.fontFamily = "Arial";
          break;
      }
    }
    localStorage.setItem('fontFamily', family);
  }
  
  let backgroundColorButtons = document.querySelectorAll(".backgroundColor>button");
  for (let index = 0; index < backgroundColorButtons.length; index += 1) {
    backgroundColorButtons[index].addEventListener("click", function(event) {
      setBackgroundColor(event.target.innerText)
    })
  }
  
  let fontColorButtons = document.querySelectorAll(".fontColor>button");
  for (let index = 0; index < fontColorButtons.length; index += 1) {
    fontColorButtons[index].addEventListener("click", function(event) {
      setFontColor(event.target.innerText)
    })
  }
  
  let fontSizeButtons = document.querySelectorAll(".fontSize>button");
  for (let index = 0; index < fontSizeButtons.length; index += 1) {
    fontSizeButtons[index].addEventListener("click", function(event) {
      setFontSize(event.target.innerText)
    })
  }
  
  let lineHeightButtons = document.querySelectorAll(".lineHeight>button");
  for (let index = 0; index < lineHeightButtons.length; index += 1) {
    lineHeightButtons[index].addEventListener("click", function(event) {
      setLineHeight(event.target.innerText)
    })
  }
  
  let fontFamilyButtons = document.querySelectorAll(".fontFamily>button");
  for (let index = 0; index < fontFamilyButtons.length; index += 1) {
    fontFamilyButtons[index].addEventListener("click", function(event) {
      setFontFamily(event.target.innerText)
    })
  }

  function getPreferences() {
    let backgroundColor = localStorage.getItem("backgroundColor")
    if(backgroundColor) setBackgroundColor(backgroundColor)

    let fontColor = localStorage.getItem("fontColor")
    if(fontColor) setFontColor(fontColor)

    let fontSize = localStorage.getItem("fontSize")
    if(fontSize) setFontSize(fontSize)

    let lineHeight = localStorage.getItem("lineHeight")
    if(lineHeight)  setLineHeight(lineHeight)

    let fontFamily = localStorage.getItem("fontFamily")
    if(fontFamily)  setFontFamily(fontFamily)
  }
  getPreferences();

}
