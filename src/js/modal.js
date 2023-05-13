export function modalWindowsInit(){
	const overlay = document.querySelector('.overlay');
	
	overlay.addEventListener('click', function(evn){
  		let activeModal = document.querySelector('.modal.open');
  		const body = document.querySelector(".body");
  		if (activeModal) {
    		activeModal.classList.remove('open');
    		overlay.classList.remove('open');
    		body.classList.remove('body--lock');
  		}
	})
	
	document.addEventListener('keydown', function(evn){
  		if (evn.which === 27) {
    		let activeModal = document.querySelector('.modal.open');
    		const body = document.querySelector(".body");
    		if (activeModal) {
      			activeModal.classList.remove('open');
      			overlay.classList.remove('open');
      			body.classList.remove('body--lock');
    		}
  		}
	})
	
	document.querySelectorAll('.js-open-modal').forEach(function(item){
		item.addEventListener('click', function(evn){
    		evn.preventDefault();
    		const modalElement = document.querySelector(".modal[data-modal='" + item.dataset.modal+ "']");
    		const body = document.querySelector(".body");
    		let activeModal = document.querySelector('.modal.open');
    		if (activeModal) {
      			activeModal.classList.remove('open');
      			overlay.classList.remove("open");
      			body.classList.remove('body--lock');
	    	}
	    	if (modalElement){
    			modalElement.classList.add('open');
    			overlay.classList.add("open");
    			body.classList.add('body--lock');
    		}
    	})
	})

	document.querySelectorAll('.js-modal-close').forEach(function(item){
  		item.addEventListener('click', function(env){
    		env.preventDefault();
    		const modalElement = document.querySelector(".modal[data-modal='" + item.dataset.modal+ "']");
       		const body = document.querySelector(".body");
       		let activeModal = document.querySelector('.modal.open');
    		if (activeModal) {
      			activeModal.classList.remove('open');
      			overlay.classList.remove('open');
      			body.classList.remove('body--lock');
    		};
    		modalElement.classList.remove('open');
    		overlay.classList.remove('open');
    		body.classList.remove('body--lock');
  		})
	})
}
