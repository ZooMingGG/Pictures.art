const showMoreStyles = (triggerClass, contentClass) => {
    const trigger = document.querySelector(triggerClass);
    const content = document.querySelectorAll(contentClass);

    content.forEach((item) => {
        item.classList.add('animated', 'fadeInUp');
    });

    const showContent = () => {
        content.forEach((item) => {
            item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });

        trigger.remove();
    };

    trigger.addEventListener('click', showContent);
};

export default showMoreStyles;