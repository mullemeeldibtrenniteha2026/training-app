(function attachWorkoutRuntimeHelpers(global) {
  "use strict";

  function clampActiveWorkoutIndex(input) {
    const activeIndex = Number(input?.activeIndex) || 0;
    const groupCount = Math.max(0, Number(input?.groupCount) || 0);
    const max = Math.max(0, groupCount - 1);
    return Math.min(max, Math.max(0, activeIndex));
  }

  function getActiveWorkoutGroup(input) {
    const groups = Array.isArray(input?.groups) ? input.groups : [];
    const activeIndex = clampActiveWorkoutIndex({
      activeIndex: input?.activeIndex,
      groupCount: groups.length
    });
    return groups[activeIndex] || null;
  }

  function buildWorkoutProgressItems(input) {
    const groups = Array.isArray(input?.groups) ? input.groups : [];
    const activeIndex = clampActiveWorkoutIndex({
      activeIndex: input?.activeIndex,
      groupCount: groups.length
    });
    const week = Number(input?.week) || 0;
    const day = String(input?.day || "");
    const isExerciseDone = typeof input?.isExerciseDone === "function"
      ? input.isExerciseDone
      : () => false;

    return groups.map((group, idx) => {
      const items = Array.isArray(group?.items) ? group.items : [];
      const done = items.length ? items.every(ex => isExerciseDone(week, day, ex)) : false;
      const className = idx === activeIndex ? "active" : (done ? "done" : "");
      return {
        index: idx,
        label: String(idx + 1),
        className
      };
    });
  }

  function buildWorkoutFocusMeta(input) {
    const groupCount = Math.max(0, Number(input?.groupCount) || 0);
    const activeIndex = clampActiveWorkoutIndex({
      activeIndex: input?.activeIndex,
      groupCount
    });
    return `Block ${Math.min(activeIndex + 1, Math.max(1, groupCount))} of ${Math.max(1, groupCount)}`;
  }

  function getWorkoutAddSetTarget(input) {
    const groupsForDay = Array.isArray(input?.groupsForDay) ? input.groupsForDay : [];
    const dayExercises = Array.isArray(input?.dayExercises) ? input.dayExercises : [];
    const activeExerciseIndex = Number(input?.activeExerciseIndex) || 0;
    const week = Number(input?.week) || 0;
    const day = String(input?.day || "");
    const isRecoveryLike = typeof input?.isRecoveryLike === "function"
      ? input.isRecoveryLike
      : () => false;

    const activeGroup = getActiveWorkoutGroup({
      groups: groupsForDay,
      activeIndex: activeExerciseIndex
    });

    let active = activeGroup?.items?.find(ex => !isRecoveryLike(week, day, ex))
      || activeGroup?.items?.[0]
      || null;

    if(!active || isRecoveryLike(week, day, active)) {
      active = dayExercises.find(ex => !isRecoveryLike(week, day, ex)) || null;
    }

    return active || null;
  }

  global.TimoTrainingV2WorkoutRuntime = {
    clampActiveWorkoutIndex,
    getActiveWorkoutGroup,
    buildWorkoutProgressItems,
    buildWorkoutFocusMeta,
    getWorkoutAddSetTarget
  };
})(window);
