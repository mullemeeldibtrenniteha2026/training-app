(function attachWorkoutModeHelpers(global) {
  "use strict";

  function renderWorkoutHeader(input) {
    const dateDisplay = String(input?.dateDisplay || "");
    const title = String(input?.title || "");
    const progressItems = Array.isArray(input?.progressItems) ? input.progressItems : [];
    const prevLabel = String(input?.prevLabel || "← Previous");
    const nextLabel = String(input?.nextLabel || "Next →");

    const progressMarkup = `<div class="workout-progress-row">${progressItems.map(item => {
      const index = Number(item?.index) || 0;
      const label = String(item?.label || "");
      const className = String(item?.className || "").trim();
      return `<button class="workout-progress-pill ${className}" type="button" data-workout-jump="${index}">${label}</button>`;
    }).join("")}</div>`;

    const navMarkup = `<div class="workout-nav-row"><button class="btn" id="prevExerciseBtn">${prevLabel}</button><button class="btn" id="nextExerciseBtn">${nextLabel}</button></div>`;

    return `<div class="card workout-focus-card"><div class="workout-date-big">${dateDisplay}</div><div class="section-title"><h3>${title}</h3></div>${progressMarkup}${navMarkup}</div>`;
  }

  global.TimoTrainingV2WorkoutMode = {
    renderWorkoutHeader
  };
})(window);
