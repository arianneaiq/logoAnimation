let pen = anime({
  targets: '.pen',
  delay: 1000,
  keyframes: [
    {rotate: '360deg'},
  ],
  duration: 500,
  easing: 'easeOutExpo',
});

let name = anime({
  targets: '#name',
  rotateZ: {
    value: 360,
    duration: 1000,
    easing: 'easeInOutSine'
  },

});

let demo = anime({
  targets: '.demo',
  translateX: {
    value: 250,
    duration: 800
  },
  rotate: {
    value: 360,
    duration: 1800,
    easing: 'easeInOutSine'
  },
  scale: {
    value: 2,
    duration: 1600,
    delay: 800,
    easing: 'easeInOutQuart'
  },
  delay: 250 
});




