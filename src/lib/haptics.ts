export function haptic(type: "light" | "medium" | "success" | "warning" = "light") {
  if (typeof window === "undefined") return;

  // Basic fallback available in some mobile browsers.
  if ("vibrate" in navigator) {
    const pattern = type === "success" ? [12, 30, 12] : type === "warning" ? [30] : [8];
    navigator.vibrate(pattern);
  }
}
