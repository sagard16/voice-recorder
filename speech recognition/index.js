window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResulte = true
recognition.lang = 'en-US'


let p = document.createElement('p');
const words = document.querySelector('.words')
words.appendChild(p);

recognition.addEventListener("result", e=>{
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    console.log(transcript)


    p.textContent = transcript
    if(e.result[0].isFinal){
        p = document.createElement('p');
        words.appendChild(p);
    }

   
    
})

recognition.addEventListener('end',recognition.start)

recognition.start();