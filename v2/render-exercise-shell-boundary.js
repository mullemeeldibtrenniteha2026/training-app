(function attachExerciseShellBoundary(global) {
  "use strict";

  function buildExerciseShellMarkup(input) {
    const exerciseClass = String(input?.exerciseClass || "");
    const exerciseId = String(input?.exerciseId || "");
    const mainMarkup = String(input?.mainMarkup || "");
    const compareMarkup = String(input?.compareMarkup || "");
    const detailsMarkup = String(input?.detailsMarkup || "");
    const actionsMarkup = String(input?.actionsMarkup || "");
    return `<div class="exercise ${exerciseClass}" data-exercise-card="${exerciseId}">${mainMarkup}${compareMarkup}${detailsMarkup}${actionsMarkup}</div>`;
  }

  global.TimoTrainingV2RenderExercise = {
    buildExerciseShellMarkup
  };
})(window);
