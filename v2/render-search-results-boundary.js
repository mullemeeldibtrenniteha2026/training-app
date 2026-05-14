(function attachRenderSearchResultsBoundary(global) {
  "use strict";

  function renderSearchResultsCard(input) {
    const heading = String(input?.heading || "Search results");
    const count = Number(input?.count) || 0;
    const emptyMessage = String(input?.emptyMessage || "");
    const itemMarkup = String(input?.itemMarkup || "");
    const countLabel = `${count} match${count === 1 ? "" : "es"}`;
    return `<div class="card search-results-card"><div class="section-title"><h3>${heading}</h3><div class="meta">${countLabel}</div></div>${count ? `<div class="search-results">${itemMarkup}</div>` : `<div class="empty-state">${emptyMessage}</div>`}</div>`;
  }

  function renderSearchResultItem(input) {
    const week = Number(input?.week) || 0;
    const day = String(input?.day || "");
    const exerciseId = String(input?.exerciseId || "");
    const name = String(input?.name || "");
    const meta = String(input?.meta || "");
    const ctaLabel = String(input?.ctaLabel || "Open");
    return `<button class="search-item" type="button" data-jump-week="${week}" data-jump-day="${day}" data-jump-ex="${exerciseId}"><div><div class="name">${name}</div><div class="meta">${meta}</div></div><div class="search-open">${ctaLabel}</div></button>`;
  }

  global.TimoTrainingV2RenderSearchResults = {
    renderSearchResultsCard,
    renderSearchResultItem
  };
})(window);
