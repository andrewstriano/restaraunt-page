import "./style.scss";
import buildHeader from "./header";
import "./menu";
import "./contact";
import { loadHome } from "./home";
import loadFooter from "./footer";

buildHeader();
loadHome();
loadFooter();
