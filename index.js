let sec = 0;
let min = 0;
let hr = 0; 
let interval = null;

function start(){
    if (interval == null)
        interval = setInterval(counter,10); 
}

function pause() {
    if (interval !== null) {
        clearInterval(interval);
        interval = null; 
    }
}


function stop() {
    if (interval !== null) { 
        clearInterval(interval);
        interval = null; 
    }
    sec = 0;
    min = 0;
    hr = 0;
    document.getElementById('timer').innerText = '00:00:00';
}


function counter() {
    sec++;
    if (sec === 100) { 
        sec = 0;
        min++;
        if (min === 60) {
            min = 0;
            hr++;
        }
    }
    document.getElementById('timer').innerText =
        String(hr).padStart(2, '0') + ':' +
        String(min).padStart(2, '0') + ':' +
        String(sec).padStart(2, '0');
}
