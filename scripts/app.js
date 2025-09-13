function init() {
    // all of our code goes here


    // 1 cache our element
    const buttons = document.querySelectorAll('.projectBttn')
    const abtMeBttn = document.querySelector('.abtMeBttn')
    const myInfo = document.querySelector('#myInfo')


    // 3 write a function to run when the event happens


    // 2 add an event listener
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const link = button.getAttribute('data-link');
            window.open(link, '_blank');
        })
    })


    abtMeBttn.addEventListener('click', () => {
        myInfo.classList.toggle('hidden');
    });


}

document.addEventListener('DOMContentLoaded', init)