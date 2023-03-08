import { mainContent } from "./header";

const footerContainer = document.createElement("footer");
footerContainer.classList.add("footerContainer");

const footerText = document.createElement("p");
footerText.classList.add("footerText");
footerText.innerHTML =
  'Created by <a href="https://github.com/andrewstriano">Andrew Striano</a>';

footerContainer.append(footerText);

export default function loadFooter() {
  mainContent.append(footerContainer);
}
