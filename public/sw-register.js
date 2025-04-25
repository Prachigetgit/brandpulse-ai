// Register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js", {
        scope: "/",
      })
      .then((registration) => {
        if (process.env.NODE_ENV === "development") {
          console.log("ServiceWorker registration successful");
        }
      })
      .catch((error) => {
        if (process.env.NODE_ENV === "development") {
          console.error("ServiceWorker registration failed:", error);
        }
      });
  });
}
