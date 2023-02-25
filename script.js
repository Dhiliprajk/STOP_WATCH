let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector('.timerInterface');
let init = null;
document.getElementById('startBtn').addEventListener('click', () => {
    if (init !== null) {
        clearInterval(init); // hold or default
    }
    init = setInterval(displayTimer, 10);

});

// 3000-3secs
// 10 -1  msecs
document.getElementById('pauseBtn').addEventListener('click', () => {
    clearInterval(init);
})
document.getElementById('resetBtn').addEventListener('click', () => {
    clearInterval(init);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timerRef.innerHTML = `00:00:00:000`;
});
displayTimer = () => {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0
            minutes++
            if (minutes == 60) {
                minutes = 0
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours; // 1 2 3 4 5 - 01 02 03 04 010
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    timerRef.innerHTML = `${h}:${m}:${s}:${ms}`;

}
