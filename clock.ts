function updateClock(): void {
  const now: Date = new Date();
  const hours: string = now.getHours().toString().padStart(2, "0");
  const minutes: string = now.getMinutes().toString().padStart(2, "0");
  const seconds: string = now.getSeconds().toString().padStart(2, "0");

  const timeString: string = `${hours}:${minutes}:${seconds}`;

  const clock: HTMLElement | null = document.getElementById("clockBody");
  if (clock) {
    clock.textContent = timeString;
  }
}

setInterval(updateClock, 1000);

updateClock();
