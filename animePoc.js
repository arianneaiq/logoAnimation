let pen = anime({
  targets: '.pen',
  points:[
    {value:[
      "M244.3,160.6l41.63,12.29,1.17.68,33.13,31.74a1.83,1.83,0,0,1,.09,2.54l-17.86,19.71a1.82,1.82,0,0,1-2.37.28L263.2,202.92a1.84,1.84,0,0,1-.6-.67L242.17,163.2A1.83,1.83,0,0,1,244.3,160.6Z"
    ]
  },
    { value:[
      "M415,322a.71.71,0,0,1-.21-.84,66.22,66.22,0,0,0,4.38-33.13.74.74,0,0,1,1.21-.65L461.1,322a1,1,0,0,1,.16.19,15.35,15.35,0,0,1-1.21,18c-4.87,5.59-13.69,6.72-20.3,2.18l-.06,0Z"
      ]
    },
  ],
  delay: 1000,
  keyframes: [
    {rotate: '360deg'},
  ],
  duration: 500,
  easing: 'easeOutExpo',
});

const knipperOog = "M297,364.45a66,66,0,0,1,7-12.15,54.82,54.82,0,0,1,9-10,53.81,53.81,0,0,1,11.43-7.46c6.87-3.49,12.69-6.45,16.92-4a8,8,0,0,1,3.1,3.54,6,6,0,0,1-.11,2.8c-.72,2.52-3,3.81-5,4.86s-3.85,1.52-7.88,2.58c-3.75,1-3.88.85-5.67,1.47a37.84,37.84,0,0,0-6.31,3,58.51,58.51,0,0,0-7.18,5.05c-2.17,1.7-5,4-8.29,6.74l-5.14,4.41a1,1,0,0,1-1.85-.84Z"

anime({
  targets:'.oog',
  points: knipperOog,
  baseFrequency: 0,
  scale: 1,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutExpo'
})

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
  delay: 250 // All properties except 'scale' inherit 250ms delay
});




