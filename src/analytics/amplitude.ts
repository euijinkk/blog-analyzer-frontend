import * as amplitude from "@amplitude/analytics-browser";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function initAmplitude() {
  const apiKey = import.meta.env.VITE_AMPLITUDE_API_KEY;
  if (!apiKey) return;

  amplitude.init(apiKey, { defaultTracking: false });
}

export function trackEvent(
  eventName: string,
  properties?: Record<string, string>
) {
  amplitude.track(eventName, properties);
}

export function usePageView() {
  const location = useLocation();

  useEffect(() => {
    trackEvent("page_view", { page_path: location.pathname });
  }, [location.pathname]);
}
