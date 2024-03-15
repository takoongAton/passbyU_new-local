$("button, a").click(function(){
	var $this = $(this);
	console.log($this, $this.context);
})



/*var sr = ScrollReveal();
sr_list = ".scrollreveal li, .scrollreveal2 li";
sr.reveal(sr_list, {
	delay: 0,
	distance: '0px',
	duration: 600,
	easing: 'cubic-bezier(0.5, 0, 0, 1)',
	interval: 0,
	opacity: 0,
	origin: 'top',
	rotate: {
		x: 0,
		y: 0,
		z: 0,
	},
	scale: 1,
	cleanup: false,
	container: document.documentElement,
	desktop: true,
	mobile: true,
	reset: false,
	useDelay: 'always',
	viewFactor: 1.0,
	viewOffset: {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
	},
	afterReset: function (el) {},
	afterReveal: function (el) {},
	beforeReset: function (el) {},
	beforeReveal: function (el) {}
})*/






var placeholder;
placeholder = {
	action : function(){
		$form_placeholder = "input[type='text'],input[type='password'], textarea";
		$($form_placeholder).each(function(){
			$(this).bind("focus",function(){
				$(this).siblings(".placeholder, label").css({
					"display" : "none"
				})
			});
			$(this).bind("blur",function(){
				if($(this).val() == ""){
					$(this).siblings(".placeholder, label").css({
						"display" : "block"
					})
				}
			});
		});
	}
}
placeholder.action();





/*sr.reveal('h2', {
	duration: 100,
	origin: 'top'
})*/

/* 이하 테스트용 스크립트 입니다. 삭제후 재작업 부탁드립니다. */
/*$(".menu a.depth2").on("click", function(){
	var $this = $(this);
	if($this.hasClass("active")){
	} else {
		$(".menu a").each(function(){
			$(this).removeClass("active");
			$(this).next().stop().slideUp(200);
		})
		$this.next().stop().slideDown(200);
		$this.toggleClass("active");
	}
})*/


/*function open_popup(target){
	var $this = "#" + target;
	$($this).css({
		"display" : "block"
	})
}

function close_popup(target){
	var $this = "#" + target;
	$($this).css({
		"display" : "none"
	})
}
*/