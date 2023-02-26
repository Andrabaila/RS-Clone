import createGreetingMain from '../layouts/createGreetingMain';

function createGreetingPage() {
    document.querySelector('header')?.remove();
    createGreetingMain();
}
export default createGreetingPage;
