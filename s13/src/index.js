import { message, messageDOM } from "./utils/message";
import helloworld from "./data/helloworld.txt";
import "./sass/index.scss";
import "./components/footer";
import addImage from './utils/image';
import Creator from './utils/creator';

message("works after boundling");
messageDOM(helloworld);

addImage('div')

const el1 = new Creator();
el1.addBgc('red');
const el2 = new Creator();
el2.addBgc('blue');
const el3 = new Creator();
el3.addBgc();
el3.showColor();