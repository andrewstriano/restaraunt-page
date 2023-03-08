import { contactLink, homeLink, mainContent, menuLink } from "./header";
import loadFooter from "./footer";

const formContainer = document.createElement("div");
formContainer.classList.add("formContainer");

const form = document.createElement("form");
form.setAttribute("action", "someServer");

const formList = document.createElement("ul");

const firstLi = document.createElement("li");
const secondLi = document.createElement("li");
const thirdLi = document.createElement("li");
const fourthLi = document.createElement("li");

const nameLabel = document.createElement("label");
nameLabel.setAttribute("for", "name");
nameLabel.innerText = "Name";
const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "name");
nameInput.setAttribute("name", "name");
firstLi.append(nameLabel, nameInput);

const phoneLabel = document.createElement("label");
phoneLabel.innerText = "Phone Number";
phoneLabel.setAttribute("for", "phone");
const phoneInput = document.createElement("input");
phoneInput.setAttribute("type", "tel");
phoneInput.setAttribute("id", "phone");
phoneInput.setAttribute("name", "phone");
secondLi.append(phoneLabel, phoneInput);

const commentLabel = document.createElement("label");
commentLabel.innerText = "Comment";
commentLabel.setAttribute("for", "comment");
const commentInput = document.createElement("textarea");
commentInput.setAttribute("name", "comment");
commentInput.setAttribute("id", "comment");
commentInput.setAttribute("cols", "30");
commentInput.setAttribute("rows", "10");
commentInput.setAttribute("placeholder", "Comment");
thirdLi.append(commentLabel, commentInput);

const submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.classList.add("submitButton");

fourthLi.append(submitButton);

formList.append(firstLi, secondLi, thirdLi, fourthLi);
formContainer.append(formList);

function loadContact() {
  mainContent.innerHTML = "";
  homeLink.classList.remove("currentPage");
  menuLink.classList.remove("currentPage");
  contactLink.classList.add("currentPage");
  mainContent.append(formContainer);
  loadFooter();
}
contactLink.addEventListener("click", loadContact);
submitButton.addEventListener("click", loadContact);
export default { contactLink };
