//this acts to open and close the options in the file

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active')
  })
})