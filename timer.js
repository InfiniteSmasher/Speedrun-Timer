document.getElementById("game-screen-template").innerHTML = document.getElementById("game-screen-template").innerHTML.replace(
    `uts">`,
    `uts">
    <h5 v-show="!game.isPaused" class="nospace title">TIME</h5>
    <p v-show="!game.isPaused" id="playTimer" class="name">0:00.000</p>`);

let tickerStyle = document.createElement("style");
tickerStyle.textContent = "#killTicker { top: 13em !important; }";
document.head.appendChild(tickerStyle);

let startTime, timerInterval;
function startTimer() {
    let display = document.getElementById("playTimer");
    let health = document.getElementById("healthHp");
    startTime = new Date().getTime();
    timerInterval = setInterval(() => {
        if (vueApp.game.respawnTime) {
            clearInterval(timerInterval);
            return;
        }
        let elapsedTime = (new Date().getTime() - startTime) / 1000;
        let minutes = Math.floor(elapsedTime / 60);
        let hours = Math.floor(minutes / 60);
        display.innerHTML = `${(hours > 0 ? String(hours).padStart(hours > 10 ? 2 : 1, "0") + ":" : "") + (minutes % 60).toString().padStart(minutes > 10 ? 2 : 1, "0")}:${(elapsedTime % 60).toFixed(3).padStart(6, "0")}`;
    }, 1);
}

let timerInitInterval = setInterval(() => {
  if (typeof(extern) === "undefined" || !extern.respawn) return;
  clearInterval(timerInitInterval);
  let oldRespawn = extern.respawn;
  extern.respawn = () => {
      oldRespawn();
      startTimer();
  };
}, 100);
