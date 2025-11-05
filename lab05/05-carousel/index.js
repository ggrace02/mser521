let currentPosition = 0;
const gap = 10;
const slideWidth = 400;
//Above determines the layout of the page itself and photos slide width & gap. //
const items = document.querySelectorAll('.carousel-item');
const totalSlides = items.length;
//above determines the number of slides and the items in the page//
function moveForward() {
  if (currentPosition >= totalSlides - 2) {
    currentPosition = 0;
  } else {
    currentPosition++;
  }
  updateCarouselPosition();
}
//above is how the left arrows move to the next slide, keeping 2 slides(photos) in frame//

function moveBackward() {
  if (currentPosition <= 0) {
    currentPosition = totalSlides - 2;
  } else {
    currentPosition--;
  }
  updateCarouselPosition();
}
//above is how the right arrows move to the photo slide before, keeping 2 slides(photos) in frame//


function updateCarouselPosition() {
  const items = document.querySelectorAll('.carousel-item');
  const offset = (slideWidth + gap) * currentPosition;

  for (const item of items) {
    item.style.transform = `translateX(-${offset}px)`;
  }
}
//above is telling the previous functions how much to move by, the slide width and gap//
