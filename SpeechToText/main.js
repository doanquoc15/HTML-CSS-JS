//1. Lam cho nut bat dau phat sang
const startIcon = document.querySelector('#content #welcome .circle ion-icon');
const listColors = ['red', 'blue', 'yellow', 'pink', 'green', 'orange'];
const welcomeBox = document.getElementById('welcome');
const startBox = document.getElementById('start');
const close = document.querySelector('#content #start ion-icon');
const textArea = document.querySelector('textarea');
const getVoiceBtn = document.querySelector('button')

//setInterval () : lap lai ham sau mot khoang tg chi dinh
//setTimeout() : kich hoat mot lan sau 1 khoang xac dinh

// var index = 0;
// setInterval(() => {
//     startIcon.style.filter = `drop-shadow(0px 0px 10px ${listColors[index]}) drop-shadow(0px 0px 20px  ${listColors[index]})`;
//     // index++;

//     if (index == listColors.length) {
//         index = 0
//     }
//     else if (index < 0) {
//         index = listColors.length - 1;
//     }
//     else {
//         index++;
//     }
// }, 300)

//2. Lam cho chu phat sang
const chars = document.querySelectorAll('#content #welcome .author span');
// var indexOfChar = 0;
// setInterval(() => {
//     chars.forEach(e => {
//         e.style.fontSize = '16px';
//     });

//     chars[indexOfChar].style.fontSize = '25px';
//     indexOfChar++;

//     if (indexOfChar == chars.length) {
//         indexOfChar = 0;
//     }
// }, 200)

// //3. Bat dau chuong trinh
// welcomeBox.addEventListener('click', (e) => {
//     welcomeBox.style.opacity = '0';
//     startBox.style.zIndex = '1';
// })

// //4. Quay lai trang truoc
// close.addEventListener('click', (e) => {
//     welcomeBox.style.opacity = '1'
//     startBox.style.zIndex = '-1'
// })

// //5. Chuyen van ban thanh giong noi
// var value = '';
// textArea.addEventListener('keyup', (e) => {
//     value = e.target.value;
// })

// getVoiceBtn.addEventListener('click', (e) => {
//     const objectSpeech = new SpeechSynthesisUtterance(value);
//     speechSynthesis.speak(objectSpeech);
// })
const text = document.querySelector('.text')
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
startIcon.addEventListener('click', (e) => {
    recognition.onstart = function () {
        text.innerHTML = "Listening, please speak..";
        setInterval(() => {
            startIcon.classList.toggle('active');
            startIcon.style.filter = `drop-shadow(0px 0px 10px red) drop-shadow(0px 0px 20px red)`
        },200)
    };

    recognition.onspeechend = function () {
        welcomeBox.style.opacity = '0';
        startBox.style.zIndex = '1';
        text.innerHTML = "...... ";
        recognition.stop();
    }

    // This runs when the speech recognition service returns result
    recognition.onresult = function (event) {
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;
        textArea.innerHTML = "Text: " + transcript ;
    };

    recognition.start();  

});
//Quay lai trang truoc
close.addEventListener('click', (e) => {
    welcomeBox.style.opacity = '1'
    startBox.style.zIndex = '-1'
})
