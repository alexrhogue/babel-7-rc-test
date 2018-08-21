
//import target from './target'; // real target
import target from 'fake-module/target'; //fake module 

export default function caller() {
	target();
}