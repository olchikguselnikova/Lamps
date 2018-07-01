import './lamp.scss';

const TARGET_CLASS_NAME = 'lamp';
const CIRCLE_CLASS_NAME = `${TARGET_CLASS_NAME}__circle`;
const CIRCLE_TOGGLED_CLASS_NAME = `${TARGET_CLASS_NAME}__circle_toggled`;
const BUTTON_CLASS_NAME = `${TARGET_CLASS_NAME}__button`;
const BUTTON_TOGGLED_CLASS_NAME = `${TARGET_CLASS_NAME}__button_toggled`;

export class Lamp {
  constructor(targetEl) {
    this.targetEl = targetEl;
    this.isToggled = false;

    this.groupEl = null;
    this.circleEl = null;
    this.btnEl = null;
    this.render();
  }

  render() {
    this.groupEl = document.createElement('div');
    this.groupEl.classList.add(TARGET_CLASS_NAME);

    this.targetEl.appendChild(this.groupEl);

    this.circleEl = document.createElement('div');
    this.circleEl.classList.add(CIRCLE_CLASS_NAME);

    this.groupEl.appendChild(this.circleEl);

    this.btnEl = document.createElement('button');
    this.btnEl.classList.add(BUTTON_CLASS_NAME);
    this.btnEl.textContent = "on/off";

    this.groupEl.appendChild(this.btnEl);

    this.btnEl.addEventListener('click', () => {
        if (this.isToggled) {
            this.turnOff();
        } else {
            this.turnOn();
        }
    });

  }

  turnOn() {
    this.circleEl.classList.add(CIRCLE_TOGGLED_CLASS_NAME);
    this.btnEl.classList.add(BUTTON_TOGGLED_CLASS_NAME);
    this.isToggled = true;
  }

  turnOff() {
    this.circleEl.classList.remove(CIRCLE_TOGGLED_CLASS_NAME);
    this.btnEl.classList.remove(BUTTON_TOGGLED_CLASS_NAME);
    this.isToggled = false;
  }

}