import createNewGroupPage from '../pages/createNewGroupPage';
import { FunctionObject } from '../data/types';

function routeFunctions(event: MouseEvent) {
    if (
        event instanceof MouseEvent &&
        event.type === 'click' &&
        event.target instanceof HTMLButtonElement &&
        event.target.id
    ) {
        event.preventDefault();

        const functions: FunctionObject = {
            startPageButtonNew: () => createNewGroupPage,
            startPageButtonJoin: () => {},
        };

        functions[event.target.id]?.();

        /*         switch (event.target.id) {
            case 'startPageButtonNew':
                createNewGroupPage();
                break;
            default:
                break;
        } */
    }
}
export default routeFunctions;
