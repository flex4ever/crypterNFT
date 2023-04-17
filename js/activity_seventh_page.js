const filtrosblock = document.querySelector( '.block__settings-two' )
const button = document.querySelector('.adaptive__knopka')

button.addEventListener('click', () => {
  filtrosblock.classList.toggle('block__settings-three')
})
  