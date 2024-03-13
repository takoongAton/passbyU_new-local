
function autoResizeTextArea(textarea) {
  // 높이값을 0으로 설정한 후 scrollHeight 값을 구합니다.
  textarea.style.height = '0px';
  textarea.style.height = textarea.scrollHeight + 'px';
}



function typing(){
    // 해당 div 요소를 선택합니다.
    let div = document.createElement("div");
    div = document.querySelector(".receive-bubble.active");
    // console.log(div)

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
        toDoInput.disabled = false;
        // toDoButton.disabled = false;
    }
    }, 50);
}
/* by chatGPT */



const toDoForm = document.querySelector(".chat_input");
const toDoInput = toDoForm.querySelector("textarea")
const toDoButton = toDoForm.querySelector("button");
const chatHistory = document.querySelector(".chat_history");
const chatContent = document.querySelector(".chat_content");

let toDos = "";

const testMessage = "이런들 어떠하며 저런들 어떠하리 어쩌고 저쩌고 - 하여가 -"

function printTodo(newTodo){
    // console.log(newTodo)
    const div = document.createElement("div");
    div.innerText = newTodo;
    div.classList.add("send-bubble");
    chatHistory.appendChild(div);

    receive(testMessage);
}

function receive(testMessage) {
    const div = document.createElement("div");
    div.innerText = testMessage;
    div.classList.add("receive-bubble");
    div.classList.add("active");
    chatHistory.appendChild(div);
    typing();
    // chatContent.scrollTop = 1000;
    // console.log(chatHistory.offsetHeight)
}

function handleTodoSubmit(event){
    // event.preventdefault();
    const newTodo = toDoInput.value;
    if(newTodo == "") {
        alert("내용이 없다.")
        return;
    }
    toDoInput.value = "";
    // toDos.push(newTodo);
    printTodo(newTodo);
    toDoInput.style.height = 30 + "px";
    toDoInput.disabled = true;
    toDoButton.disabled = true;
    chatContent.scrollTop = chatHistory.offsetHeight;
}

toDoButton.addEventListener("click", handleTodoSubmit);
toDoInput.addEventListener("input", function(){
    if(toDoInput.value != "") {
        toDoButton.disabled = false;
    } else {
        toDoButton.disabled = true;
    }
})