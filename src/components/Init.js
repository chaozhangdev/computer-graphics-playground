export default function Init() {
  localStorage.setItem("speed", 0.02);
  localStorage.setItem("shape", "box");
  localStorage.setItem("length", 1.5);
  localStorage.setItem("width", 1.5);
  localStorage.setItem("height", 1.5);
  localStorage.setItem("spotlightPosition", [0, 0, 0]);
  localStorage.setItem("ambientLight", 0);
  localStorage.setItem("spotLightX", 10);
  localStorage.setItem("spotLightY", 10);
  localStorage.setItem("spotLightZ", 10);
}
