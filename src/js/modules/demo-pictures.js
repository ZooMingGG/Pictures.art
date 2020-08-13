const showDemoPictures = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    const showDemo = (block) => {
        const img = block.querySelector('img');

        img.src = img.src.slice(0, -4) + '-1.png';

        block.querySelectorAll('p:not(.sizes-hit)').forEach((item) => {
            item.style.display = 'none';
        });
    };

    const hideDemo = (block) => {
        const img = block.querySelector('img');

        img.src = img.src.slice(0, -6) + '.png';

        block.querySelectorAll('p:not(.sizes-hit)').forEach((item) => {
            item.style.display = 'block';
        });
    };

    blocks.forEach((item) => {
        item.addEventListener('mouseover', () => {
            showDemo(item);
        });

        item.addEventListener('mouseout', () => {
            hideDemo(item);
        });
    });
};

export default showDemoPictures;