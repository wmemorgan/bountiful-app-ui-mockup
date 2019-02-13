// Design Selector
//==== Color Selector
//Identify elements for color scheme
let pageElements = {
  header: document.querySelector('header'),
  footer: document.querySelector('footer'),
  heading: document.querySelectorAll('h1, h2, h3, h4'),
  navLinks: document.querySelectorAll('nav a'),
  buttons: document.querySelectorAll('button'),
  links: document.querySelectorAll('a'),
  paragraph: document.querySelectorAll('p'),
  lists: document.querySelectorAll('li'),
  body: document.querySelector('body'),
  logo: document.querySelector('.logo')
}

console.log(pageElements.header)

//Parse the color palette options
const colorScheme1 = {
  "primary-color": "#265077", 
  "primary-dark": "#022140", 
  "primary-light": "#C5CAE9", 
  accent: "#51A7F8", 
  emphasis: "#212121",
  secondary: "#1E4258", 
  "dark-text": "#595959", 
  "light-text": "#FFFFFF", 
  "secondary-text": "#CCC", 
  "primary-bg-shading": "#FCFCFC", 
  "secondary-bg": "#f0f0f8"
}

const colorScheme2 = {
  "primary-color": "#3F51B5",
  "primary-dark": "#303F9F",
  "primary-light": "#C5CAE9",
  accent: "#03A9F4",
  emphasis: "#212121",
  secondary: "#757575",
  "dark-text": "#595959",
  "light-text": "#FFFFFF",
  "secondary-text": "CCC",
  "primary-bg-shading": "#FCFCFC",
  "secondary-bg": "#31302e"
}

const colorScheme3 = {
  "primary-color": "#464866",
  "primary-dark": "#25274D",
  "primary-light": "#AAABB8",
  accent: "#2E9CCA",
  emphasis: "#212121",
  secondary: "#1E4258",
  "dark-text": "#212121",
  "light-text": "#FFFFFF",
  "secondary-text": "#CCC",
  "primary-bg-shading": "#FCFCFC",
  "secondary-bg": "#f0f0f8"
}

//Match the element with the appropriate color
const mapColorScheme = (pageElements, palette) => {
  pageElements.header.style.backgroundColor = palette['primary-dark']
  pageElements.header.style.color = palette['light-text']
  pageElements.footer.style.backgroundColor = palette['primary-dark']
  pageElements.header.style.color = palette['light-text']
  pageElements.heading.forEach(elem => elem.style.color = palette['primary'])
  pageElements.links.forEach(elem => elem.style.color = palette['accent'])
  pageElements.navLinks.forEach(elem => elem.style.color = palette['light-text'])
  pageElements.buttons.forEach(elem => elem.style.backgroundColor = palette['accent'])
  pageElements.buttons.forEach(elem => elem.style.color = palette['light-text'])
  pageElements.body.style.color = palette['dark-text']
}

//==== Font Selector
//Identify text elements for font selector
let fontOption1 = {
  heading: "Montserrat, 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
  text: "Lato, Helvetica, Sans-Serif",
  logo: "Montserrat, 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
}

let fontOption2 = {
  heading: "Roboto Slab, 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
  text: "'Open Sans', Helvetica, Sans-Serif",
  logo: "Roboto Slab, 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
}

let fontOption3 = {
  heading: "Lora, 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
  text: "Muli, Helvetica, Sans-Serif",
  logo: "Lora, 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
}

//Match the element with the appropriate font family
const mapFontStyle = (pageElements, fontStyles) => {
  pageElements.heading.forEach(elem => elem.style.fontFamily = fontStyles.heading)
  pageElements.paragraph.forEach(elem => elem.style.fontFamily = fontStyles.text)
  pageElements.links.forEach(elem => elem.style.fontFamily = fontStyles.text)
  pageElements.lists.forEach(elem => elem.style.fontFamily = fontStyles.text)
  pageElements.logo = fontStyles.logo
}

// Invoke functions
const colorOptionBtn = document.querySelectorAll(".color-selector button")
console.log(colorOptionBtn)
colorOptionBtn[0].addEventListener('click', () => mapColorScheme(pageElements, colorScheme1))
colorOptionBtn[1].addEventListener('click', () => mapColorScheme(pageElements, colorScheme2))
colorOptionBtn[2].addEventListener('click', () => mapColorScheme(pageElements, colorScheme3))

const fontOptionBtn = document.querySelectorAll(".font-selector button")
console.log(fontOptionBtn)
fontOptionBtn[0].addEventListener('click', () => mapFontStyle(pageElements, fontOption1))
fontOptionBtn[1].addEventListener('click', () => mapFontStyle(pageElements, fontOption2))
fontOptionBtn[2].addEventListener('click', () => mapFontStyle(pageElements, fontOption3))



