(function attachExerciseActionsBoundary(global) {
  "use strict";

  function buildExerciseActionsMarkup(input) {
    const exerciseId = String(input?.exerciseId || "");
    const primaryButtonClass = String(input?.primaryButtonClass || "btn");
    const primaryButtonRole = String(input?.primaryButtonRole || "");
    const primaryButtonLabel = String(input?.primaryButtonLabel || "");
    return `<div class="exercise-actions">
	            <button class="${primaryButtonClass}" data-role="${primaryButtonRole}" data-ex="${exerciseId}">${primaryButtonLabel}</button>
	            <button class="btn" data-role="delete" data-ex="${exerciseId}">Delete exercise</button>
	          </div>`;
  }

  global.TimoTrainingV2RenderExerciseActions = {
    buildExerciseActionsMarkup
  };
})(window);
