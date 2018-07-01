import './toggleBtn.scss';
import {Lamp} from '../lamp/lamp';

export class ToggleBtn {
    constructor(targetEl) {
      this.targetEl = targetEl;
      this.lamps = [];
      this.btns = [];
      this.render();
    }
  
    render() {
      this.toggleBtn = document.createElement('button');
  
      this.toggleBtn.textContent = 'toggle All';
  
      this.toggleBtn.addEventListener('click', () =>  this.toggleAll());
      
      this.targetEl.appendChild(this.toggleBtn);
    }
  
    toggleAll() {    
      this.lamps = document.querySelectorAll('.lamp__circle');
      this.lamps.forEach((lamp) => lamp.classList.add('lamp__circle_toggled'));

      this.btns = document.querySelectorAll('.lamp__button');
      this.btns.forEach((btn) => btn.classList.add('lamp__button_toggled'));
    }

  }