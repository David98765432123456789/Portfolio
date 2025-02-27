const images = document.querySelectorAll('.zoom');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeButton = document.getElementById('close');

images.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});