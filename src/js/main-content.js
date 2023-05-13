
export function MCmoreBtnInit() {
	const MCmoreBtn = document.querySelector('.main-content__more-btn');
	const MCtext = document.querySelector('.main-content__text');
	MCmoreBtn.addEventListener('click', function(evt){
  		evt.preventDefault();
  		MCtext.classList.toggle('main-content__text--show-all');
  		if (!MCmoreBtn.classList.contains('main-content__more-btn--less')) {
    		MCmoreBtn.innerHTML = 'Скрыть';
    		MCmoreBtn.classList.add('main-content__more-btn--less');
  		} else {
    		MCmoreBtn.classList.remove('main-content__more-btn--less');
    		MCmoreBtn.innerHTML = 'Читать далее';
    	
  		}
	})
	
}