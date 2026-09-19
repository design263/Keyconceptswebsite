/**
 * Utility functions for GA4 and GTM Event Measurement
 */

export function trackEvent(eventName, eventParams = {}) {
  if (typeof window === 'undefined') return

  // Push to GTM dataLayer
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: eventName,
    ...eventParams,
  })

  // Call GA4 gtag if available
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams)
  }
}

export function trackFormSubmission(formName, extraParams = {}) {
  trackEvent('generate_lead', {
    form_name: formName,
    event_category: 'engagement',
    event_label: formName,
    ...extraParams,
  })
}

export function trackCTAClick(ctaName, destinationUrl = '') {
  trackEvent('cta_click', {
    cta_name: ctaName,
    destination_url: destinationUrl,
    event_category: 'conversion_intent',
  })
}
