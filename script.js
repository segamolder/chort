let clicked = false;
let changeColorButton = document.querySelector('#change-color');
document.addEventListener('click', function () {
    let content = document.querySelector('.content');
    if(clicked === true) {
        content.style.backgroundColor = 'yellow';
    } else {
        content.style.backgroundColor = 'green';
    }

    clicked = !clicked;
})
