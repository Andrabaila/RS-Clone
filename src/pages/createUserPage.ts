import { makeUserPage } from '../layouts/user-page/user-page';

function createUserPage() {
    document.body.innerHTML = '';
    makeUserPage();
}

export default createUserPage;
