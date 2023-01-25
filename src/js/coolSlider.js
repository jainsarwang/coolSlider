class CoolSlider{

	constructor ({
		slider,
		controls,
		isKeyControlled,
		autoSlide,
		maxWidth,
		aspectRatio,
		paginationActiveColorCode,
		paginationColorCode,
		paginationType,
		infinite
	}){

		maxWidth = (typeof maxWidth == 'undefined') ? true : maxWidth;
		aspectRatio = (typeof aspectRatio == 'undefined') ? 'auto' : aspectRatio;
		isKeyControlled = (typeof isKeyControlled == 'undefined') ? true : isKeyControlled;
		autoSlide = (typeof autoSlide == 'undefined') ? false : autoSlide;
		paginationActiveColorCode = (typeof paginationActiveColorCode == 'undefined') ? '#fe51ad' : paginationActiveColorCode;
		paginationColorCode = (typeof paginationColorCode == 'undefined') ? '#aaaaaa' : paginationColorCode;
		this.controls = (typeof controls == 'undefined') ? true : controls;
		this.infinite = (typeof infinite == 'undefined') ? false : infinite;
		
		if(typeof slider != 'object') {
			throw new Error("CoolSlider Class required 1 parameter of type HTML Element");
		}

		// setup pagination type
		let paginationTypes = ['disc','circle','bar'];
		if(paginationType < paginationTypes.length && paginationType >= 0){
			this.paginationType = paginationTypes[paginationType];
		}else{
			this.paginationType = paginationTypes[0];
		}


		this.slider = slider;
		this.currentSlide = 0;
		this.maxSlides = 0;

		this.setupSlider();  // setting up slider prompt

		if(isKeyControlled){
			// move with arrow key allowed
			let sli = this.slider;

			this.slider.setAttribute('tabindex','0');
			this.slider.addEventListener('click', function(){
				sli.focus();
			});
			this.slider.addEventListener('keydown', (e) => {
				if(e.keyCode == 37){
					//left arrow key PRESSED
					e.preventDefault();
					this.prev();
				}else if(e.keyCode == 39){
					//right arrow key PRESSED
					e.preventDefault();
					this.next();
				}
			});
		}

		if(autoSlide){
			// auto slide in a given time in millisecond
			this.setAutoSlider(autoSlide);
		}

		//setting maxwidth of slider
		slider.style.setProperty('max-width',maxWidth);
		slider.style.setProperty('--aspectRatio',aspectRatio);
		slider.style.setProperty('--coolSliderMaxWidth',maxWidth);
		slider.style.setProperty('--coolSliderActivePagination',paginationActiveColorCode);
		slider.style.setProperty('--coolSliderPagination',paginationColorCode);
		
	}

	setAutoSlider(timeInMS){
		let obj = this;
		setInterval(function(){
			if(obj.currentSlide == (obj.maxSlides-1)){
				obj.changeSlide(0);
			}else{
				obj.changeSlide(obj.currentSlide+1);    
			}
		},timeInMS);
	}

	setupSlider() {
		var slideItems = this.slider.children,
			slideItemLength = slideItems.length,
			sliding = (document.createElement('DIV'));

		//max element available to slide
		this.maxSlides = slideItemLength; 

		sliding.classList.add('sliding');
		
		//adding element to slider
		for(var i = 0; i <= slideItemLength; i++) {
			let elem = slideItems[0];

			if(typeof elem == 'object'){
				sliding.append(elem);
			}
		}

		this.slider.innerHTML = '';
		this.slider.append(sliding);


		//setting up pagination
		var pagination = document.createElement('DIV');
		pagination.classList.add('pageCount',this.paginationType);

		for(var i = 0;i<slideItemLength;i++) {
			pagination.innerHTML += '<i></i>';
		}

		this.slider.append(pagination);


		//control btn
		if(this.controls) {
			this.slider.innerHTML += '<span class="controls prev"></span><span class="controls next"></span>';

			//prev and next
			var obj = this;
			this.slider.querySelector('.prev').onclick = function(e){
				obj.prev(e);
			}

			this.slider.querySelector('.next').onclick = function(e){
				obj.next(e,obj);
			}
			this.toggleControl(0);
		}
		
		this.activatePagination(0,(this));
	}

	toggleControl(activeSlideIndex){
		if(this.infinite == true) return;

		let prev = this.slider.querySelector('.prev'),
			next = this.slider.querySelector('.next');

		if(activeSlideIndex+1 == this.maxSlides) {
			//hide next Button

			next.classList.add('hide');
			prev.classList.remove('hide');

		}else if(activeSlideIndex == 0) {
			//hide prev Button
			prev.classList.add('hide');
			next.classList.remove("hide");
		}else{
			next.classList.remove('hide');
			prev.classList.remove("hide");
		}
	}

	prev() {
		if(--this.currentSlide < 0){
			if(!this.infinite) this.currentSlide = 0;
			else this.currentSlide = this.maxSlides - 1;
		}

		this.changeSlide(this.currentSlide);
	}

	next() {
		if(this.maxSlides <= ++this.currentSlide) {
			if(!this.infinite) this.currentSlide = this.maxSlides - 1;
			else this.currentSlide = 0;
		}
		this.changeSlide(this.currentSlide);
	}

	changeSlide(i){

		var images = this.slider.querySelector("*");

		this.slider.querySelector('.sliding').scrollLeft = i * images.getClientRects()[0].width;

		this.slider.querySelector('.pageCount i.active').classList.remove('active');
		this.slider.querySelectorAll('.pageCount i')[i].classList.add('active');

		this.currentSlide = i;

		if(this.controls) this.toggleControl(i);

	}

	activatePagination(i,slider){
		var pagination = this.slider.querySelectorAll('.pageCount i');
		
		pagination[i].classList.add('active');

		pagination.forEach((e,ind) => {
			e.onclick = () => {
				pagination.forEach((a) => {
					a.classList.remove('active');
				});

				e.classList.add('active');
				this.changeSlide(ind);  // changing image 
			}	
		});
	}
}