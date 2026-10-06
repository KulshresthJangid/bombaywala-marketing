import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// GA4 only fires page_view on a full page load. This is a client-side
// router, so in-app navigation needs an explicit page_view per route change.
// The gtag config in index.html sets send_page_view:false so the initial
// load is counted here once, not twice.
export default function RouteTracker() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.gtag?.("event", "page_view", {
      page_path: pathname + search,
      page_location: window.location.href,
    });
  }, [pathname, search]);

  return null;
}
