const dropdowns = document.querySelectorAll('.catalog__settings_dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.catalog__settings_dropdown_select');
    const caret = dropdown.querySelector('.catalog__settings_dropdown_select_caret');
    const menu = dropdown.querySelector('.catalog__settings_dropdown_menu');
    const options = dropdown.querySelectorAll('.catalog__settings_dropdown_menu li');
    const selected = dropdown.querySelector('.catalog__settings_dropdown_select_selected');


    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });
    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});
// const container = document.querySelectorAll(".range-slider");
// for (let i = 0; i < container.length; i++) {
//     const slider = container[i].querySelectorAll(".slider");
//     const thumb = container[i].querySelector(".slider-thumb");
//     const tooltip = container[i].querySelector(".tooltip");
//     const progress = container[i].querySelector(".progress");
// }
// function customSlider() {
//     const maxVal = slider.getAttribute("max");
//     const val = (slider.value / maxVal) * 100 + "%";
//     tooltip.innerHTML = slider.value;
//     progress.style.width = val;
//     thumb.style.left = val;
// }
// customSlider();
// slider.addEventListener("input", () => {
//     customSlider();
// });
const container = document.querySelectorAll(".range-slider");
for (let i = 0; i < container.length; i++) {
    const slider = container[i].querySelector(".slider");
    const thumb = container[i].querySelector(".slider-thumb");
    const tooltip = container[i].querySelector(".tooltip");
    const progress = container[i].querySelector(".progress");
    
    function customSlider() {
        const maxVal = slider.getAttribute("max");
        let val = (slider.value / maxVal) * 100 + "%";
        tooltip.innerHTML = slider.value;
        progress.style.width = val;
        thumb.style.left = val;
    }
    customSlider();
    slider.addEventListener("input", () => {
        customSlider();
    });
}