const dragAndDrop = () => {
    const fileInputs = document.querySelectorAll('[name="upload"]');

    const preventDefaults = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const highlight = (item) => {
        item.closest('.file_upload').style.border = '2px solid #a12ab1';
        item.closest('.file_upload').style.borderRadius = '25px';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    };

    const unHighlight = (item) => {
        item.closest('.file_upload').style.border = 'none';
        if (item.closest('.calc-form')) {
            item.closest('.file_upload').style.backgroundColor = '#ffffff';
        } else {
            item.closest('.file_upload').style.backgroundColor = '#ededed';
        }
    };

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach((eventName) => {
        fileInputs.forEach((item) => {
            item.addEventListener(eventName, preventDefaults, false);
        });
    });

    ['dragenter', 'dragover'].forEach((eventName) => {
        fileInputs.forEach((item) => {
            item.addEventListener(eventName, () => highlight(item), false);
        });
    });

    ['dragleave', 'drop'].forEach((eventName) => {
        fileInputs.forEach((item) => {
            item.addEventListener(eventName, () => unHighlight(item), false);
        });
    });

    fileInputs.forEach((item) => {
        item.addEventListener('drop', (event) => {
            item.files = event.dataTransfer.files;

            let dots;
            const arr = item.files[0].name.split('.');

            arr[0].length > 6 ? dots = "..." : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });
    });
};

export default dragAndDrop;