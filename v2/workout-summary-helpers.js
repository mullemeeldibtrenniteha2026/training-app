(function attachWorkoutSummaryHelpers(global) {
  "use strict";

  function formatSetSummaryLine(set) {
    return `${set?.kg || "—"} × ${set?.reps || "—"}`;
  }

  function buildSetSummary(sets) {
    return (Array.isArray(sets) ? sets : []).map(formatSetSummaryLine).join(" • ");
  }

  global.TimoTrainingV2Summary = {
    formatSetSummaryLine,
    buildSetSummary
  };
})(window);
