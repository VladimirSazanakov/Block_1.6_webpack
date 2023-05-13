import Swiper, {Pagination} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';

let STswiper = undefined;

export function useSTSwiper() {
  if (window.innerWidth < 768) {
    if (!STswiper){
      STswiper = new Swiper('.service-tech .swiper', {
      	modules: [Pagination],
        pagination: {
          el: '.service-tech .swiper-pagination',
          clickable: true,
        },
        slidesPerView: document.documentElement.scrollWidth/256,
        slidesPerGroup: 1,
        spaceBetween: 0,
        freeMode: true,
        slidesOffsetAfter: 40,
      });
    } else {
      STswiper.params.slidesPerView = document.documentElement.scrollWidth/256;
      STswiper.update();
    }
  } else if(STswiper) {
    STswiper.destroy(true, true);
    STswiper = undefined;
  }
}


export function STmoreBtnInit() {
	const STmoreBtn = document.querySelector('.service-tech__more-text');
	const STswiperLayout768 = document.querySelector('.service-tech .swiper');
	STmoreBtn.addEventListener('click', function(evt){
  		evt.preventDefault();
  		STswiperLayout768.classList.toggle('swiper--show-all');
  		if (!STmoreBtn.classList.contains('service-tech__more-text--less')) {
    		STmoreBtn.innerHTML = 'Скрыть';
    		STmoreBtn.classList.add('service-tech__more-text--less');
  		} else {
    	STmoreBtn.innerHTML = 'Показать еще';
    	STmoreBtn.classList.remove('service-tech__more-text--less');
  		}
	})

}