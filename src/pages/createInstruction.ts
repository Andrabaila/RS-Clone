import createInstructionPage from '../layouts/createInstructionPage';

function createInstruction() {
    document.querySelector('header')?.remove();
    document.querySelector('footer')?.remove();
    createInstructionPage();
}
export default createInstruction;
