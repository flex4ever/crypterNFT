let swiper = new Swiper(".mySwiper", {
    loop: false,
    spaceBetween: 30,
    slidesPerView: 4,
    mousewheel: true,
    keyboard: true,
  });


 const blockDowland = document.querySelector(".block__dowland");




document.querySelector('#switches').addEventListener('click', event => {
  const id = event.target.getAttribute('data-id');
  if (!id) return; 
  function block(){
  blockDowland.classList.toggle("active");
  }
  block();
  setTimeout(block,1000);

})

const imgBlockOne = document.getElementById('img-1');
const imgBlockTwo = document.getElementById('img-2');
const imgBlockThree = document.getElementById('img-3');
const imgOne = document.getElementById('img-1-1');
const imgTwo = document.getElementById('img-2-2');
const imgThree = document.getElementById('img-3-3');

document.querySelector("#btn-1").addEventListener('click', () =>{
    imgBlockOne.classList.add('modal__file-img_active');
    imgOne.classList.add('modal__img_active');
    const btnText = document.querySelector('.modal__btn-text').innerHTML = 'Done'
    const btn = document.querySelector('#btn-1').classList.add('modal__btn-done')
    document.querySelector("#btn-2").classList.add("modal__btn-active")
})
document.querySelector("#btn-2").addEventListener('click', () =>{
  imgBlockTwo.classList.add('modal__file-img_active');
  imgTwo.classList.add('modal__img_active');
  const btnText = document.querySelector('#btn-2-text').innerHTML = 'Done'
  const btn = document.querySelector('#btn-2').classList.add('modal__btn-done')
  document.querySelector("#btn-3").classList.add("modal__btn-active")
})
document.querySelector("#btn-3").addEventListener('click', () =>{
  const btn = document.querySelector('#btn-3').classList.add('modal__btn-done');
  const btnText = document.querySelector('#btn-3-text').innerHTML = 'Done';
  imgBlockThree.classList.add('modal__file-img_active');
  imgThree.classList.add('modal__img_active');

 
})

const modalMain = document.querySelector('.modal');
const modalBlock = document.querySelector('.modal__block');
const modalBtn = document.getElementById('upmodal');
const modalClose = document.querySelector('.modal__title-btn')
modalBtn.addEventListener('click', () => {
  modalMain.classList.add("modal__active");
  modalBlock.classList.add("modal__block-active");
})
modalClose.addEventListener('click', () => {
  modalMain.classList.remove("modal__active");
  modalBlock.classList.remove("modal__block-active");
})


