import { contactLink, homeLink, mainContent, menuLink } from "./header";

const homeContainer = document.createElement("div");
homeContainer.classList.add("homeContainer");

const aboutUs = document.createElement("section");
aboutUs.classList.add("aboutUs");

const aboutUsHeader = document.createElement("h1");
aboutUsHeader.innerText = "About Us!";

const aboutUsPara = document.createElement("p");
aboutUsPara.innerText =
  "Route 99 is a locally owned restaurant started by renowned Salem local Annette Day. Started in the midst of covid madness, route 99 has defied all odds and has quickly become a favorite amongst farmers and Salemites alike!";

aboutUs.append(aboutUsHeader, aboutUsPara);
homeContainer.append(aboutUs);
function loadHome() {
  mainContent.innerHTML = "";
  mainContent.append(homeContainer);
  homeLink.classList.add("currentPage");
  contactLink.classList.remove("currentPage");
  menuLink.classList.remove("currentPage");
}

homeLink.addEventListener("click", loadHome);

export { homeLink, loadHome };
