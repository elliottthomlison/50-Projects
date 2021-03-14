const labels = document.querySelectorAll('.form-control label')

// //no wave
// labels.forEach(label => {
//   label.innerHTML = label.innerText
//     .split('')
//     .map((letter, index) => `<span>${letter}</span>`)
//     .join('')
// })


//with wave
labels.forEach(label => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, index) => `<span
    style="transition-delay:${index * 50}ms">${letter}</span>`)
    .join('')
})
