import './lesson_13.scss';
import { Lamp } from './components/lamp/lamp';
import { ToggleBtn } from './components/ToggleBtn/toggleBtn';
import { AddBtn } from './components/addBtn/addBtn';


const lamp = new Lamp(document.querySelector('.place-for-lamps'));
const lamp2 = new Lamp(document.querySelector('.place-for-lamps'));
const lamp3 = new Lamp(document.querySelector('.place-for-lamps'));
const lamp4 = new Lamp(document.querySelector('.place-for-lamps'));
const lamp5 = new Lamp(document.querySelector('.place-for-lamps'));

const tglBtn = new ToggleBtn(document.querySelector('.place-for-toggleBtn'));

const addBtn = new AddBtn(document.querySelector('.place-for-addBtn'));