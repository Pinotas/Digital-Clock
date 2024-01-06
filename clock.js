function updateClock() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, "0");
    var minutes = now.getMinutes().toString().padStart(2, "0");
    var seconds = now.getSeconds().toString().padStart(2, "0");
    var timeString = "".concat(hours, ":").concat(minutes, ":").concat(seconds);
    var clock = document.getElementById("clockBody");
    if (clock) {
        clock.textContent = timeString;
    }
}
setInterval(updateClock, 1000);
updateClock();
