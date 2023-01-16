const menuBtn = document.querySelector('.menu-btn')
const navBar = document.querySelector('.nav-bar')

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active')
  navBar.classList.toggle('active')
})