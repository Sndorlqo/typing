let target=document.querySelector("#dynamic");
let stringArr=["이건 동아리 실습과제", "지금은 화학시간", "아까는 global English", "내일은 물리시험ㅋㅋㅋ", "난 공부를 안했쥬ㅋㅋㅋ!"];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
let selectStringArr = selectString.split("");

function randomString(){
    let stringArr=["이건 동아리 실습과제", "지금은 화학시간", "아까는 global English", "내일은 물리시험ㅋㅋㅋ", "난 공부를 안했쥬ㅋㅋㅋ!"];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
let selectStringArr = selectString.split("");

return selectStringArr;
}


function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}


//한글자씩 난 왜 안됨
function dynamic(randomArr){

    console.log(randomArr);
    if(randomArr.length>0){
        target.textContent+=randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80);
    }else{
        setTimeout(resetTyping, 3000);
    }
}
dynamic(randomString());
console.log(selectString);
console.log(selectStringArr);

//깜빡이 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);