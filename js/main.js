// 도큐먼트가 다 로드된 다음에 JS 실행하는 명령 삽입도 가능

const pEl = document.querySelector("#me"); // 노드 선택하기
pEl.style.backgroundColor = "#ff0000";
pEl.style.fontSize = "10px";
pEl.style.color = "#ffffff";

const pE2 = document.querySelector("#header");
pE2.classList.add("red-color", "fz20");

setInterval(() => {
    pE2.classList.toggle("red-color");
}, 2000);

const buttonEls = document.querySelectorAll("button");
buttonEls.forEach((el) => {
    console.log(el.dataset);
})

buttonEls[1].dataset.cnt = 7;

function button3_click() {
    if (pEl.style.backgroundColor === "gold")
        pEl.style.backgroundColor = "red"
    else
        pEl.style.backgroundColor = "gold"
}

function button4_click() {
    if (pEl.style.fontSize === "30px")
        pEl.style.fontSize = "10px"
    else
        pEl.style.fontSize = "30px"
}