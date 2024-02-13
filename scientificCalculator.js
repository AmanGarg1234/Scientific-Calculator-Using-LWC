import { LightningElement, track } from 'lwc';

export default class ScientificCalculator extends LightningElement {
    @track result = '';

    handleButtonClick(event) {
        const buttonValue = event.target.label;
        this.result += buttonValue;
    }

    clearResult() {
        this.result = '';
    }

    calculateResult() {
        try {
            this.result = eval(this.result);
        } catch (error) {
            this.result = 'Error';
        }
    }

    handleTrigFunction(event) {
        const trigFunction = event.target.label;
        const angle = parseFloat(prompt(`Enter the angle in degrees for ${trigFunction}`));

        if (!isNaN(angle)) {
            const radians = (angle * Math.PI) / 180;

            switch (trigFunction) {
                case 'sin':
                    this.result = Math.sin(radians).toFixed(1);
                    break;
                case 'cos':
                    this.result = Math.cos(radians).toFixed(1);
                    break;
                case 'tan':
                    this.result = Math.tan(radians).toFixed(1);
                    break;
                default:
                    break;
            }
        } else {
            this.result = 'Invalid input';
        }
    }
}