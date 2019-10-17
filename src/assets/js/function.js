import $ from 'jquery';
import howler from 'howler';
import anime from "animejs";

const LANDING = {};
LANDING.intro = document.querySelector('.intro-screen');
LANDING.start = LANDING.intro.querySelector('div#start');
LANDING.path = LANDING.intro.querySelector('path');

const svgAnimation = () => {
    console.log('Animation');

    anime({
      targets: LANDING.intro,
      duration: 2000,
      easing: 'easeInOutSine',
      translateY: '-200vh'
    });

    anime({
      targets: LANDING.intro,
      duration: 1500,
      easing: 'easeInOutSine',
      d: LANDING.path.getAttribute('pathdata:id')
    });

};

LANDING.start.addEventListener('click',svgAnimation);
