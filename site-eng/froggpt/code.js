const cursor = document.querySelector('.custom-cursor');
const positionElement = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;   
  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}
window.addEventListener('mousemove', positionElement);

const barrel = document.querySelector(".cylinder");
const barrelDimensions = barrel.getBoundingClientRect();

document.addEventListener("mousemove", e => animateBarrel(e));

function animateBarrel(e) {
  const cursor = {
    x: e.clientX - Math.round(barrelDimensions.left),
    y: e.clientY - Math.round(barrelDimensions.top)
  };
  const angle = {
    y: 30 * ((cursor.y / barrelDimensions.height) * 2 - 1),
    x: 30 * ((cursor.x / barrelDimensions.width) * 2 - 1)
  };
  barrel.style.transform = `rotateX(${-angle.y}deg) rotateY(${angle.x}deg)`;
}

