/*
let btns = document.querySelectorAll("button");
btns.forEach(function(item){
	item.addEventListener("click", function(e){
		if(item.closest(".btn_close")) {
			e.target.closest(".layer").style.display = "none";
		}
	})
})
*/


/* 컨텐츠와 버튼이 겹치는 문제 해결용 */
let footer_btn_wrap = document.querySelector(".footer_btn_wrap");
if(footer_btn_wrap) {
	let footer_btn_group = footer_btn_wrap.querySelector(".footer_btn_group");
	footer_btn_wrap.style.height = footer_btn_group.clientHeight + 'px';
}
/* // 컨텐츠와 버튼이 겹치는 문제 해결용 */


/* 버튼 스위치 샘플 */
let btn_switchs = document.querySelectorAll(".btn_switch");
if(btn_switchs.length > 0) {
	console.log("ASdfasfd")
	btn_switchs.forEach(function(item){
		item.addEventListener("click", function(){
			item.classList.toggle("on");
			if(item.classList.contains("on")) {
				item.querySelector("span").innerText = "on";
			} else {
				item.querySelector("span").innerText = "off";
			}
		})
	})
}
/* // 버튼 스위치 샘플 */