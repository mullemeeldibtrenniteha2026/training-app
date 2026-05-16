(function attachTimerRuntimeHelpers(global) {
  "use strict";

  function getTimerElapsedMs(input) {
    const state = input?.timerState && typeof input.timerState === "object" ? input.timerState : {};
    const now = typeof input?.now === "function" ? input.now() : Date.now();
    const elapsedMs = Math.max(0, Number(state.elapsedMs) || 0);
    const startedAt = Number(state.startedAt) || 0;
    const running = !!state.running;

    if(running && startedAt) {
      return Math.max(0, elapsedMs + (now - startedAt));
    }

    return elapsedMs;
  }

  function formatTimer(input) {
    const totalSeconds = Number(input?.totalSeconds);
    const total = Math.max(0, Math.floor(Number.isFinite(totalSeconds) ? totalSeconds : 0));
    const hours = Math.floor(total / 3600);
    const mins = Math.floor((total % 3600) / 60).toString().padStart(2, "0");
    const secs = Math.floor(total % 60).toString().padStart(2, "0");
    return hours > 0 ? `${hours}.${mins}.${secs}` : `${mins}:${secs}`;
  }

  function shouldHoldWorkoutWakeLock(input) {
    return !!(input?.workoutMode || input?.timerRunning);
  }

  function bindTimerOverlayControls(input) {
    const onClose = typeof input?.onClose === "function" ? input.onClose : null;
    const onStart = typeof input?.onStart === "function" ? input.onStart : null;
    const onPause = typeof input?.onPause === "function" ? input.onPause : null;
    const onReset = typeof input?.onReset === "function" ? input.onReset : null;

    const timerCloseBtn = global.document.getElementById("timerCloseBtn");
    const timerStartBtn = global.document.getElementById("timerStartBtn");
    const timerPauseBtn = global.document.getElementById("timerPauseBtn");
    const timerResetBtn = global.document.getElementById("timerResetBtn");
    const timerOverlay = global.document.getElementById("timerOverlay");

    if(timerCloseBtn && onClose) timerCloseBtn.onclick = () => onClose();
    if(timerStartBtn && onStart) timerStartBtn.onclick = () => onStart();
    if(timerPauseBtn && onPause) timerPauseBtn.onclick = () => onPause();
    if(timerResetBtn && onReset) timerResetBtn.onclick = () => onReset();
    if(timerOverlay && onClose) {
      timerOverlay.addEventListener("click", e => {
        if(e.target.id === "timerOverlay") onClose();
      });
    }
  }

  global.TimoTrainingV2TimerRuntime = {
    getTimerElapsedMs,
    formatTimer,
    shouldHoldWorkoutWakeLock,
    bindTimerOverlayControls
  };
})(window);
