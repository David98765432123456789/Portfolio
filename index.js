const images = document.querySelectorAll('.zoom');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeButton = document.getElementById('close');

images.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
        document.body.classList.add('modal-open');
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
});