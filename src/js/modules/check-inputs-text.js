const checkInputsText = (selector) => {
    const inputs = document.querySelectorAll(selector);

    inputs.forEach((item) => {
        item.addEventListener('keypress', (event) => {
            if (event.key.match(/[^[А-ЯЄIЇ][а-яєiї] 0-9]/ig)) {
                event.preventDefault();
            }
        });
    });
};

export default checkInputsText;