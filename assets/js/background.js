document.addEventListener("DOMContentLoaded", () => {
  // Load Vanta.js dynamically
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js";
  script.onload = () => {
    VANTA.NET({
      el: "body",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xffffff,
      backgroundColor: 0x000000,
      points: 10.0,
      maxDistance: 20.0,
      spacing: 16.0
    });
  };
  document.head.appendChild(script);
});
