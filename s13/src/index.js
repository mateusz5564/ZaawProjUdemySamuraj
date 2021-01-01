import { message, messageDOM } from "./utils/message";
import helloworld from "./data/helloworld.txt";
import "./sass/index.scss";
import "./components/footer";

message("works after boundling");
messageDOM(helloworld);
