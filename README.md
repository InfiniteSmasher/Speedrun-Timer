# Speedrun Timer | Shell Shockers
```js
// ==UserScript==
// @name         Speedrun Timer | Shell Shockers
// @version      1.0
// @author       Infinite Smasher
// @description  Adds a visible speedrun timer to the readouts while spawned - useful for speedruns ofc!
// @icon         https://raw.githubusercontent.com/InfiniteSmasher/Speedrun-Timer/main/ico_egg.png
// @match        https://shellshock.io
// @match        https://shellshock.io/?*
// @run-at       document-end
// ==/UserScript==

(function() {
    let script = document.createElement('script');
    script.src = `https://cdn.jsdelivr.net/gh/InfiniteSmasher/Speedrun-Timer@latest/timer.js?ts=${new Date().getTime()}`;
    document.head.appendChild(script);
})();
```
