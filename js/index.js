// Design Selector
//==== Color Selector
//Identify elements for color scheme
//Query select: header, footer, headings, default text, buttons, nav-links, hyperlinks, dividers

let pageElements = {
  header: document.querySelector('header'),
  footer: document.querySelector('footer'),
  heading: document.querySelectorAll('h1, h2, h3, h4'),
  navLinks: document.querySelectorAll('nav a'),
  buttons: document.querySelectorAll('button'),
  links: document.querySelectorAll('a'),
  defaultText: document.querySelector('body')
}

console.log(pageElements.header)

//Parse the color palette options
//Create object with key names: primary-color, primary-dark, primary-light, accent, emphasis
//secondary, dark-text, light-text, secondary-text, primary-bg-shading, secondary-bg;
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
//Create a function that maps a color key/value pair to specified element
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
  pageElements.defaultText.style.color = palette['dark-text']
}

const colorOptionBtn = document.querySelectorAll(".color-selector button")
console.log(colorOptionBtn)
colorOptionBtn[0].addEventListener('click', () => mapColorScheme(pageElements, colorScheme1))
colorOptionBtn[1].addEventListener('click', () => mapColorScheme(pageElements, colorScheme2))
colorOptionBtn[2].addEventListener('click', () => mapColorScheme(pageElements, colorScheme3))

//==== Font Selector
//Identify text elements for font selector
//Query select h1 - h4, p, nav-links, a tags, logo

//Parse the font pairing options
//Create object with key names: heading, default-text

//Match the element with the appropriate font family
//Create a function that maps a font key/value pair to specified element
