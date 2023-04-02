let acc = document.getElementsByClassName("qiestions__main_tabs-accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
const LEFT_SLIDE = document.getElementById('left-btn');
const RIGHT_SLIDE = document.getElementById('right-btn');
const slider_cards = document.querySelector('.hot-bid__slider_cards');

let line_score = 0;
let line_page = 0;

RIGHT_SLIDE.addEventListener('click', () => {
    if (line_page == 5) {
        line_page = 0;
        line_score = 0;
        slider_cards.style.right = line_score + "px";
    }
    line_score += 275;
    slider_cards.style.right = line_score + "px";
    line_page++;
    if (line_score > 1200) {
        line_score = 0;
        slider_cards.style.right = line_score + "px";
        line_page = 0;
    }
})
LEFT_SLIDE.addEventListener('click', () => {
    if (line_score > 0) {
        line_score -= 275;
        slider_cards.style.right = line_score + "px";
    }
    if (line_score < 0) {
        line_score = 275;
        line_score = line_score * 4;
        slider_cards.style.right = line_score + "px";
        line_page = 5;

    }
    if (line_page == 0) {
        line_score = 275;
        line_score = line_score * 4;
        slider_cards.style.right = line_score + "px";
        line_page = 5;
        
    
    } else if (line_page > 5) {
        line_page = 0;
    }
    line_page--
})