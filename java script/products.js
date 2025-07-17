document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll('.product');
    const previews = document.querySelectorAll('.preview');
    const previewContainer = document.querySelector('.products-preview');
    const closeButtons = document.querySelectorAll('.closeImg');

    products.forEach(product => {
        product.addEventListener('click', () => {
            const name = product.getAttribute('data-name');
            previews.forEach(preview => {
                if (preview.getAttribute('data-target') === name) {
                    previewContainer.style.display = 'flex';
                    preview.classList.add('active');
                }
            });
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            previewContainer.style.display = 'none';
            previews.forEach(preview => {
                preview.classList.remove('active');
            });
        });
    });

    previewContainer.addEventListener('click', (e) => {
        if (e.target === previewContainer) {
            previewContainer.style.display = 'none';
            previews.forEach(preview => {
                preview.classList.remove('active');
            });
        }
    });
});