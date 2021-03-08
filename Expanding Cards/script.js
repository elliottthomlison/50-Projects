const panels = document.querySelectorAll('.panel') //places all panels into NodeList (an array)

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active') 
  })
}) 

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}