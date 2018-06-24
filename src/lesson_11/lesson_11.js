import './lesson_11.scss';

let acc = document.getElementsByClassName("panel-group__title");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
       
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}