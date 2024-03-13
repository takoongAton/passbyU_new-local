
/* ==================================== */
// 새로 작성해주세요~
/* ==================================== */



function autoResizeTextArea(textarea) {
  // 높이값을 0으로 설정한 후 scrollHeight 값을 구합니다.
  textarea.style.height = '0px';
  textarea.style.height = textarea.scrollHeight + 'px';
}





window.scrollY = document.querySelector(".chat_wrap").clientHeight;

function typing(){
    // 해당 div 요소를 선택합니다.
    let div = document.createElement("div");
    div = document.querySelector(".bubble.receive.active");
    //console.log(div)

    // div 요소 안의 텍스트를 가져옵니다.
    let text = div.textContent;

    // div 요소의 텍스트를 빈 문자열로 변경합니다.
    div.textContent = "";

    // index 변수를 0으로 초기화합니다.
    let index = 0;

    // setInterval() 함수를 사용하여 100밀리초마다 문자를 추가합니다.
    let intervalId = setInterval(function() {
    // index 변수가 text 문자열의 길이보다 작을 때
    if (index < text.length) {
        // div 요소의 텍스트에 text 문자열의 index 번째 문자를 추가합니다.
        div.textContent += text.charAt(index);
        
        // index 변수를 1 증가시킵니다.
        index++;

        
    }
    // index 변수가 text 문자열의 길이와 같거나 크다면
    else {
        // setInterval() 함수를 종료합니다.
        clearInterval(intervalId);
        div.classList.remove("active");
        askInput.disabled = false;
        // askButton.disabled = false;
    }
    }, 50);
}
/* by chatGPT */



const inputForm = document.querySelector(".chat_input");
const askInput = inputForm.querySelector("textarea")
const askButton = inputForm.querySelector("button");
const chatHistory = document.querySelector(".chat_history");
const chatContent = document.querySelector(".chat_content");

const testMessage = "이런들 어떠하며 저런들 어떠하리 어쩌고 저쩌고 - 하여가 -"

function printAsk(newAsk){
    const divChatAsk = document.createElement("div");
    divChatAsk.classList.add("chat")
    divChatAsk.classList.add("ask");

    const divAuthor = document.createElement("div")
    divAuthor.classList.add("author")

    const spanIcon = document.createElement("span");
    spanIcon.classList.add("icon");
    spanIcon.innerText = "나"

    const divBubbleAsk = document.createElement("div");
    divBubbleAsk.classList.add("bubble");
    divBubbleAsk.classList.add("ask");

    divBubbleAsk.innerText = newAsk;

    divAuthor.appendChild(spanIcon);
    divChatAsk.appendChild(divAuthor);
    divChatAsk.appendChild(divBubbleAsk)
    chatHistory.appendChild(divChatAsk);

    receive(testMessage);
}

function receive(testMessage) {
    const divChatAns = document.createElement("div");
    divChatAns.classList.add("chat")
    divChatAns.classList.add("receive");

    const divAuthor = document.createElement("div")
    divAuthor.classList.add("author")

    const spanIcon = document.createElement("span");
    spanIcon.classList.add("author");
    spanIcon.innerHTML = "<img src='../images/ico_chatbot.png' />";

    const divBubbleAns = document.createElement("div");
    divBubbleAns.classList.add("bubble");
    divBubbleAns.classList.add("receive");
    divBubbleAns.classList.add("active")

    divBubbleAns.innerText = testMessage;

    divAuthor.appendChild(spanIcon);
    divChatAns.appendChild(divAuthor);
    divChatAns.appendChild(divBubbleAns)
    chatHistory.appendChild(divChatAns);

    typing();
}

function askSubmit(event){
    // event.preventdefault();
    const newAsk = askInput.value;
    if(newAsk == "") {
        alert("내용이 없다.")
        return;
    }
    askInput.value = "";
    printAsk(newAsk);
    askInput.style.height = 20 + "px";
    askInput.disabled = true;
    askButton.disabled = true;
    
    // chatContent.scrollTop = chatHistory.offsetHeight;
    //footerPaddingFn();

    /* 질문이 화면에 표시 되면 질문의 크기만큼 내려감. 답변은 계산 되지 않음. */
    const viewportHeight = window.innerHeight;
    if(viewportHeight < chatWrap.clientHeight) {
        console.log("이제 화면보다 크다")
        let temp = chatWrap.clientHeight - viewportHeight;
        window.scrollBy(0,temp)
    }
}

askButton.addEventListener("click", askSubmit);
askInput.addEventListener("input", function(){
    //console.log(askInput.value)
    if(askInput.value != "") {
        askButton.disabled = false;
    } else {
        askButton.disabled = true;
    }
    //footerPaddingFn();
})

askInput.focus();



let chatWrap = document.querySelector(".chat_wrap")
function footerPaddingFn() {
    let temp = inputForm.clientHeight;
    chatWrap.style.paddingBottom = temp + "px";
}



function loadingFn(){
    const divLoading = document.createElement("div");
    divLoading.classList.add("receive-loading")

    const divLoader = document.createElement("div");
    divLoader.classList.add("loader")

    const span = document.createElement("span")

    divLoader.appendChild(span)
    divLoading.appendChild(divLoader);
}


function insertMessageFn(messageState){
    
}


window.addEventListener("scroll", function(){
    console.log("ASDf")
})





window.addEventListener('scroll', function(){
	pos = window.scrollY;
	// header.header_set(pos);
});



document.querySelector("textarea").addEventListener("focusin", function(){
    document.querySelector("html").style.height = 100 + "%";
    document.querySelector("body").style.height = 100 + "%";
    document.querySelector(".chat_wrap").style.height = 100 + "%";
    document.querySelector(".chat_wrap").style.display = 'flex';
    document.querySelector(".chat_wrap").style.flexDirection = 'column';
});

document.querySelector("textarea").addEventListener("focusout", function(){
    console.log("dddd")
})