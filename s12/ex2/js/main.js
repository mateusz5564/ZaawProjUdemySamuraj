import { showInConsole, showInDOM } from "./components/show.js";
import bike from "./components/product.js";

showInConsole(bike.name);
showInDOM(bike.name);
showInDOM(bike.age, "p");
showInDOM(bike.price, "p");
