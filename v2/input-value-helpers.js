(function attachInputValueHelpers(global) {
  "use strict";

  function num(val) {
    if (val === null || val === undefined || val === "") return null;
    const normalized = String(val).replace(",", ".").trim();
    if (!normalized) return null;
    const parsed = parseFloat(normalized);
    return Number.isNaN(parsed) ? null : parsed;
  }

  function sanitizeSetInputValue(role, value) {
    const raw = String(value ?? "");
    if (role === "kg") {
      const normalized = raw.replace(/,/g, ".").replace(/[^0-9.]/g, "");
      const parts = normalized.split(".");
      if (parts.length <= 1) return normalized;
      return `${parts.shift()}.${parts.join("")}`;
    }
    if (role === "reps") {
      return raw.replace(/[^0-9]/g, "");
    }
    return raw;
  }

  global.TimoTrainingV2Input = {
    num,
    sanitizeSetInputValue
  };
})(window);
