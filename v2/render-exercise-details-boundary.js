(function attachExerciseDetailsBoundary(global) {
  "use strict";

  function buildExerciseDetailsMarkup(input) {
    const restValue = String(input?.restValue || "");
    const noteValue = String(input?.noteValue || "");
    const recoveryMarkup = String(input?.recoveryMarkup || "");
    const setsMarkup = String(input?.setsMarkup || "");
    return `<div class="field-grid field-grid-rest">
            <div class="label">Rest</div>
            <input class="field" data-role="rest" data-ex="${String(input?.exerciseId || "")}" value="${restValue}" placeholder="2:00" />
          </div>
          <div class="field-grid">
            <div class="label">Notes</div>
            <textarea class="textarea" rows="1" data-role="note" data-ex="${String(input?.exerciseId || "")}">${noteValue}</textarea>
          </div>

          ${recoveryMarkup}
          ${setsMarkup}`;
  }

  global.TimoTrainingV2RenderExerciseDetails = {
    buildExerciseDetailsMarkup
  };
})(window);
