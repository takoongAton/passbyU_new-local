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

document.querySelector(".submit").addEventListener("click", function(){
    this.classList.add("active");
})