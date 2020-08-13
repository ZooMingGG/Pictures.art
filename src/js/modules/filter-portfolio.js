const filterPortfolio = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          btnAll = menu.querySelector('.all'),
          btnLovers = menu.querySelector('.lovers'),
          btnChef = menu.querySelector('.chef'),
          btnGirl = menu.querySelector('.girl'),
          btnGuy = menu.querySelector('.guy'),
          btnGrandmother = menu.querySelector('.grandmother'),
          btnGranddad = menu.querySelector('.granddad'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          markGirl = wrapper.querySelectorAll('.girl'),
          markLovers = wrapper.querySelectorAll('.lovers'),
          markChef = wrapper.querySelectorAll('.chef'),
          markGuy = wrapper.querySelectorAll('.guy'),
          no = document.querySelector('.portfolio-no');

    const filter = (mark) => {
        markAll.forEach((item) => {
            item.style.display = 'none';
            item.classList.remove('animated', 'fadeIn');
        });

        no.style.display = "none";
        no.classList.remove('animated', 'fadeIn');

        if (mark) {
            mark.forEach((item) => {
                item.style.display = 'block';
                item.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    btnAll.addEventListener('click', () => {
        filter(markAll);
    });

    btnLovers.addEventListener('click', () => {
        filter(markLovers);
    });

    btnChef.addEventListener('click', () => {
        filter(markChef);
    });

    btnGirl.addEventListener('click', () => {
        filter(markGirl);
    });

    btnGuy.addEventListener('click', () => {
        filter(markGuy);
    });

    btnGrandmother.addEventListener('click', () => {
        filter();
    });

    btnGranddad.addEventListener('click', () => {
        filter();
    });

    menu.addEventListener('click', (event) => {
        let target = event.target;

        if (target && target.nodeName === 'LI') {
            items.forEach((item) => {
                item.classList.remove('active');
                target.classList.add('active');
            });
        }
    });
};

export default filterPortfolio;