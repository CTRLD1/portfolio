function init() {
    // all of our code goes here


    // 1 cache our element
    const buttons = document.querySelectorAll('.project-Bttn')


    // 3 write a function to run when the event happens




    // 2 add an event listener
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const link = button.getAttribute('data-link');
            window.open(link, '_blank');
        })
    })

}

document.addEventListener('DOMContentLoaded', init)





