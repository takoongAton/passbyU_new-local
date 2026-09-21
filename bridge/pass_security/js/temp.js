/* 임의로 만든 스크립트 입니다.
새로 작성해주세요.
*/
/* 기본 select 사용하기로 함에 따라 폐기
const searchAirline = document.querySelector(".search_airline");
const selectWrap = searchAirline.querySelectorAll(".select_wrap");
const triggers = searchAirline.querySelectorAll("button.select_trigger");
const selectLists = searchAirline.querySelectorAll(".select_list");

if(triggers != null) {
    triggers.forEach(ele => {
        ele.addEventListener("click", function(event){
            let selectWrap = ele.parentElement;
            if(selectWrap.classList.contains("active")) {
                ele.classList.remove("active");
                selectWrap.classList.remove("active");
                selectWrap.querySelector("ul").style.display = "none";
            } else {
                ele.classList.add("active");
                selectWrap.classList.add("active");
                selectWrap.querySelector("ul").style.display = "block";
            }
        })
    });
}

selectLists.forEach(function(item,index){
    let testitem = item.querySelectorAll("li label");
    testitem.forEach(function(ddd){
        ddd.addEventListener("click", function(){
            
            let tempText = ddd.innerText;
            console.log("ddd" + ddd.innerText)

            let xxx = ddd.closest("div.select_wrap");
            xxx.querySelector("button.select_trigger span").innerText = tempText;

            ddd.closest("div.select_wrap").querySelector("ul").style.display = "none";
            xxx.classList.remove("active");
            xxx.querySelector("button.select_trigger").classList.remove("active");
        })
    })
})
*/

// document.querySelector(".submit").addEventListener("click", function(){
//     this.classList.add("active");
// })


/* 툴팁 (내 통신 정보 변경 현황)
    - 아이콘 탭 : 해당 말풍선만 개별 노출/닫힘 (다른 말풍선은 닫지 않고 동시 노출)
    - 닫힘 조건 : 노출 중인 말풍선 탭 / 말풍선 외 영역 탭 / 화면 스크롤
*/
(function () {
    const tooltipBtns = document.querySelectorAll("span.btn_tooltip");
    const tooltipLayers = document.querySelectorAll("div.layer_tooltip");

    if (tooltipBtns.length === 0) return;

    function closeAllTooltip() {
        tooltipLayers.forEach(function (layer) {
            layer.classList.remove("active");
        });
    }

    // 아이콘 탭 : 같은 txt_wrap 안의 말풍선만 개별 토글
    tooltipBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const wrap = btn.closest("div.txt_wrap");
            const layer = wrap ? wrap.querySelector("div.layer_tooltip") : null;
            if (layer == null) return;

            layer.classList.toggle("active");
        });
    });

    // 노출 중인 말풍선 탭 : 해당 말풍선만 닫힘
    tooltipLayers.forEach(function (layer) {
        layer.addEventListener("click", function () {
            layer.classList.remove("active");
        });
    });

    // 말풍선 외 영역 탭 : 노출 중인 말풍선 전체 닫힘
    document.addEventListener("click", function (event) {
        if (event.target.closest("span.btn_tooltip, div.layer_tooltip") != null) return;

        closeAllTooltip();
    });

    // 화면 스크롤 : 노출 중인 말풍선 전체 닫힘 (capture 로 내부 스크롤 영역까지 감지)
    window.addEventListener("scroll", closeAllTooltip, true);
})();


const input = document.getElementById('numericInput');
input.addEventListener('input', (e) => {
  // 숫자가 아닌 모든 문자(공백, 특수문자, 한글, 영문 등) 제거
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
});