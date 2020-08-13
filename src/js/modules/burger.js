const burger = (triggerSelector, menuSelector) => {
    const trigger = document.querySelector(triggerSelector);
    const menu = document.querySelector(menuSelector);

    menu.style.display = 'none';

    menu.addEventListener('click', () => {
        setTimeout(() => {
            menu.style.display = 'none';
        }, 400);
    });

    trigger.addEventListener('click', () => {
        if (menu.style.display === 'none' && window.screen.availWidth < 993) {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });

    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 993) {
            menu.style.display = 'none';
        }
    });
};

export default burger;