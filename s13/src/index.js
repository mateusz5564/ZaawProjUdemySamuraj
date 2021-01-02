import { message, messageDOM } from "./utils/message";
import helloworld from "./data/helloworld.txt";
import "./sass/index.scss";
import "./components/footer";
import addImage from './utils/image';

message("works after boundling");
messageDOM(helloworld);

addImage('div')
