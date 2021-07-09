const {offsetHeight, offsetWidth} = document.querySelector('.circleWrap');
const circles = document.querySelectorAll('.circle');
const balloons = document.querySelectorAll('.balloon');

const getRandom = max => Math.floor(Math.random() * max);


circles.forEach(circle => {
  circle.style.top = getRandom(offsetHeight) + 'px';
  circle.style.left = getRandom(offsetWidth) + 'px';
  console.log(circle.style.left)
});
setTimeout(() => {
  balloons.forEach((balloon, index) => {
    balloon.style.left = getRandom(offsetWidth) + 'px';
    setTimeout(() => {
      balloon.classList.add('activateBalloon')
    }, index * 1000 / 1.3)
  })
}, 1000)
