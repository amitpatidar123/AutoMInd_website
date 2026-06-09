// Simple Google Analytics wrapper
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } else {
    // Fallback for development / ad-blockers
    console.debug(`[Analytics] ${category} > ${action} > ${label}`);
  }
};

export const trackDownload = (os, version) => {
  trackEvent('download', 'engagement', `${os} - v${version}`);
};

export const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', import.meta.env.VITE_GA_TRACKING_ID, {
      page_path: url,
    });
  }
};
