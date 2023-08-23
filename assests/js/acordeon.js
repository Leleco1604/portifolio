const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement;
        const isOpen = acordeon.classList.contains('open');
        const arrowIcon = trigger.querySelector('.arrow-icon'); 

        if (isOpen) {
            acordeon.classList.remove('open');
            arrowIcon.style.transform = 'rotate(0deg)';  
        } else {
            acordeon.classList.add('open');
            arrowIcon.style.transform = 'rotate(180deg)';
        }
    });
});
