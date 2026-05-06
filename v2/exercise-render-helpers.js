(function attachExerciseRenderHelpers(global) {
  "use strict";

  function formatExerciseHeaderDisplay(input) {
    const displayName = String(input?.name || "");
    const metaText = [
      input?.supersetLabel ? `Superset item ${input.supersetLabel}` : (input?.code ? `Block item ${input.code}` : ""),
      input?.recovery ? "Recovery / conditioning" : "",
      input?.weighted ? "Weighted" : ""
    ].filter(Boolean).join(" • ");
    return { displayName, metaText };
  }

  global.TimoTrainingV2Render = {
    formatExerciseHeaderDisplay
  };
})(window);
