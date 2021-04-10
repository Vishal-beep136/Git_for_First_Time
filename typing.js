const setOfwords = [
    "if you practice from here you are defenetly learn typing very quickly just follow",
    "you are very lucky",
    "if you are want to learn type fast just come here and practice for only 15 minutes",
    "Hello typing from this words and practce well.",
    "this is the first way to learn typing well .",
    "you are doing great just practice and practice and practice always practice practice and.... practice,",
    "Only this three words can make you perfect are, number one is practice second is practice and third is practice in well technique"
];
const msg = document.getElementById('msg');
const typewords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime , endTime;

const playGame = () =>{
let randomNumber = Math.floor(Math.random()*setOfwords.length);
msg.innerText = setOfwords[randomNumber];
let date = new Date();
startTime = date.getTime();
btn.innerText =  "Submit";
}

const endPlay = () => {
let date = new Date();
endTime = date.getTime();
let totalTime = ((endTime - startTime)/ 1000);
console.log(totalTime);

let totalStr = typewords.value;
let wordCount = wordCounter(totalStr);

let speed = Math.floor((wordCount / totalTime)* 60);

let finalMsg = " You typed total at " +speed+ " words per  minutes "

finalMsg += comparewords(msg.innerText, totalStr);


msg.innerText = finalMsg;
}
const comparewords = (str1, str2) =>{
let words1 = str1.split(" ");
let words2 = str2.split(" ");
let cnt = 0;
words1.forEach(function (item, index){
if (item == words2[index]){
    cnt++;
}            
})

let errorWords = ( words1.length - cnt );
return (cnt + " correct out of " + words1.length + " words and the total number of error are "+ errorWords + ".");

}
const wordCounter = (str) =>{
let response = str.split(" ").length;
return response;

}



btn.addEventListener('click', function(){
// console.log(this)
if(this.innerText == 'Start'){
    typewords.disabled = false;
    playGame();
}else if(this.innerText == "Submit"){
    typewords.disabled = true;
    btn.innerText = "Start";
    endPlay();
}

})