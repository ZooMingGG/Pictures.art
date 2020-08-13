const accordion = (triggerClass, contentClass) => {
    const triggers = document.querySelectorAll(triggerClass);
    const content = document.querySelectorAll(contentClass);

    content.forEach((item) => {
        item.classList.add('animated');
        item.style.display = 'none';
    });

    triggers.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (content[index].style.display === 'block') {
                content[index].style.display = 'none';
                content[index].classList.remove('ui-accordion-content-active');
                triggers[index].classList.remove('ui-accordion-header-active');
            } else if (content[index].style.display === 'none') {
                content[index].style.display = 'block';
                content[index].classList.add('ui-accordion-content-active');
                triggers[index].classList.add('ui-accordion-header-active');
            }
        });
    });
};

export default accordion;