import Swiper, {Pagination} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';

let SSswiper = undefined;

export function useSSSwiper() {
  if (window.innerWidth < 768) {
    if (!SSswiper){
      SSswiper = new Swiper('.service-software .swiper', {
      	modules: [Pagination],
        pagination: {
          el: '.service-software .swiper-pagination',
          clickable: true,
        },
        slidesPerView: document.documentElement.scrollWidth/256,
        slidesPerGroup: 1,
        spaceBetween: 0,
        freeMode: true,
        slidesOffsetAfter: 40,
      });
    } else {
      SSswiper.params.slidesPerView = document.documentElement.scrollWidth/256;
      SSswiper.update();
    }
  } else if(SSswiper) {
    SSswiper.destroy(true, true);
    SSswiper = undefined;
  }
}


export function SSmoreBtnInit() {
	const SSmoreBtn = document.querySelector('.service-software__more-text');
	const SSswiperLayout768 = document.querySelector('.service-software .swiper');
	SSmoreBtn.addEventListener('click', function(evt){
  		evt.preventDefault();
  		SSswiperLayout768.classList.toggle('swiper--show-all');
  		if (!SSmoreBtn.classList.contains('service-software__more-text--less')) {
    		SSmoreBtn.innerHTML = 'Скрыть';
    		SSmoreBtn.classList.add('service-software__more-text--less');
  		} else {
    	SSmoreBtn.innerHTML = 'Показать еще';
    	SSmoreBtn.classList.remove('service-software__more-text--less');
  		}
	})
}