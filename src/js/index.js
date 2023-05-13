import '../scss/style.scss'

import {SSmoreBtnInit, useSSSwiper} from './service-software.js';
import {STmoreBtnInit, useSTSwiper} from './service-tech.js';
import {useSPSwiper} from './service-price.js';
import {modalWindowsInit} from './modal.js';
import {MCmoreBtnInit} from './main-content.js';


const refreshSwipers = () => {
  useSSSwiper();
  useSTSwiper();
  useSPSwiper();
}

SSmoreBtnInit();
STmoreBtnInit();
modalWindowsInit();
MCmoreBtnInit();

window.onload = refreshSwipers
window.addEventListener('resize', refreshSwipers);

console.log('Works!')
