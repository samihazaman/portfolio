const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('#prev-btn');
const nextButton = document.querySelector('#next-btn');
const cards = Array.from(track.children);
const cardWidth = cards[0].getBoundingClientRect().width;

let currentIndex = 0;

// Function to update the carousel position
function updateCarousel(index) {
  const amountToMove = -cardWidth * index;
  track.style.transform = `translateX(${amountToMove}px)`;
}

// Event listeners for buttons
nextButton.addEventListener('click', () => {
  if (currentIndex < cards.length - 4) {
    currentIndex++;
    updateCarousel(currentIndex);
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel(currentIndex);
  }
});
