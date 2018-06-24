import './lesson_11.scss';

let titleItem = document.querySelectorAll('.panel-group__title'),
bodyItem = document.querySelectorAll('.panel-group__body');


titleItem.forEach(function(item, i, titleItem){
item.addEventListener('click', function(e){
if (this.classList.contains('panel-active')) {
    bodyItem[i].classList.remove('active');
    this.classList.remove('panel-active');
} else {
    item[i].classList.remove('panel-active');
    titleItem[i].classList.remove('panel-active');
    bodyItem[i].classList.remove('active');
    this.classList.add('panel-active');
    this.nextElementSibling.classList.add('active');
}
});
});