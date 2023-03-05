import { REGULAR_EXPRESSIONS } from '../data/constants';

function validateInput(this: HTMLInputElement, ev: Event) {
    const { target } = ev;
    if (target instanceof HTMLInputElement) {
        target.classList.add('input_invalid');
        const message: ChildNode | null = target.nextSibling;
        if (message instanceof HTMLDivElement) {
            message.classList.remove('checkout__message_valid');
            message.textContent = '!';
        }
        const inputContent = target.value;
        const inputName = target.name;

        const regularExpression = REGULAR_EXPRESSIONS[inputName];

        if (inputContent.length === 0 || !regularExpression.test(inputContent)) {
            return;
        }
        if (message instanceof HTMLDivElement) {
            message.textContent = String.fromCharCode(10003);
            message.classList.add('checkout__message_valid');
        }
        target.classList.remove('input_invalid');
        target.classList.add('input_valid');
    }
}

export default validateInput;
