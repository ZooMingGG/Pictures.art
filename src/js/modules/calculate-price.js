const calculatePrice = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size);
    const materialBlock = document.querySelector(material);
    const optionsBlock = document.querySelector(options);
    const promocodeBlock = document.querySelector(promocode);
    const resultBlock = document.querySelector(result);

    let sum = 0;

    const calculateSum = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
        window.calcSum = sum;

        if (sizeBlock.value === '' || materialBlock.value === '') {
            resultBlock.textContent = 'Будь ласка, виберіть розмір і матеріал картини'; 
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
            window.calcSum = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change', calculateSum);
    materialBlock.addEventListener('change', calculateSum);
    optionsBlock.addEventListener('change', calculateSum);
    promocodeBlock.addEventListener('input', calculateSum);

};

export default calculatePrice;