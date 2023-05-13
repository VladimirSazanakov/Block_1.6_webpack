import Swiper, {Pagination} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';

let SPswiper = undefined;

export function useSPSwiper() {
  if (window.innerWidth < 768) {
    if (!SPswiper){
      SPswiper = new Swiper('.service-price .swiper', {
      	modules: [Pagination],
        pagination: {
          el: '.service-price .swiper-pagination',
          clickable: true,
        },
        slidesPerView: document.documentElement.scrollWidth/274,
        slidesPerGroup: 1,
        spaceBetween: 0,
        freeMode: true,
        slidesOffsetAfter: 40,
      });
    } else {
      SPswiper.params.slidesPerView = document.documentElement.scrollWidth/274;
      SPswiper.update();
    }
  } else if(SPswiper) {
    SPswiper.destroy(true, true);
    SPswiper = undefined;
  }
}
