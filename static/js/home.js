// const toggleButton = document.querySelector('toggle-button')
// const navbar = document.getElementsByClassName('navbar')

// toggleButton.addEventListener('click', () => {
//   navbar.classList.add('flex-all-center')
// })

const toggleButton = document.querySelector('.toggle-button')
const navbarLinks = document.querySelector('.navbar')
const btnLinks = document.querySelector('.right')

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
//   btnLinks.classList.toggle('active')

})