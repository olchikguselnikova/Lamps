import './addBtn.scss';
import {Lamp} from '../lamp/lamp';

export class AddBtn {
    constructor(targetEl) {
      this.targetEl = targetEl;
      this.render();
    }
  
    render() {
      this.addBtn = document.createElement('button');
  
      this.addBtn.textContent = 'add Lamp';
  
      this.addBtn.addEventListener('click', () =>  this.addLamp());
      
      this.targetEl.appendChild(this.addBtn);
    }
  
    addLamp() {    
      const lamp = new Lamp(document.querySelector('.place-for-lamps'));
    }

  }