
function autoResizeTextArea(textarea) {
  // 높이값을 0으로 설정한 후 scrollHeight 값을 구합니다.
  textarea.style.height = '0px';
  textarea.style.height = textarea.scrollHeight + 'px';
}



function typing(){
    // 해당 div 요소를 선택합니다.
    let div = document.createElement("div");
    div = document.querySelector(".bubble.receive.active");
    console.log(div)

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


function createChatElement(className) {
    const divChat = document.createElement("div");
    divChat.classList.add("chat");
    divChat.classList.add(className);
    return divChat;
}

function createAuthorElement(authorName) {
    const divAuthor = document.createElement("div");
    divAuthor.classList.add("author");
    const spanIcon = document.createElement("span");
    spanIcon.classList.add("icon");
    spanIcon.innerText = authorName;
    divAuthor.appendChild(spanIcon);
    return divAuthor;
}

function createBubbleElement(bubbleClass, text) {
    const divBubble = document.createElement("div");
    divBubble.classList.add("bubble");
    divBubble.classList.add(bubbleClass);
    divBubble.innerText = text;
    return divBubble;
}

function printAsk(newAsk){
    const divChatAsk = createChatElement("ask");
    const divAuthor = createAuthorElement("나");
    const divBubbleAsk = createBubbleElement("ask", newAsk)
    
    divChatAsk.appendChild(divAuthor);
    divChatAsk.appendChild(divBubbleAsk)
    chatHistory.appendChild(divChatAsk);

    receive(testMessage);
}

function receive(testMessage) {
    const divChatAns = createChatElement("receive");
    const divAuthor = createAuthorElement("PASS");
    const divBubbleAns = createBubbleElement("receive", testMessage)
    divBubbleAns.classList.add("active");

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
    askInput.style.height = 30 + "px";
    askInput.disabled = true;
    askButton.disabled = true;
    chatContent.scrollTop = chatHistory.offsetHeight;
}

askButton.addEventListener("click", askSubmit);
askInput.addEventListener("input", function(){
    console.log(askInput.value)
    if(askInput.value != "") {
        askButton.disabled = false;
    } else {
        askButton.disabled = true;
    }
})