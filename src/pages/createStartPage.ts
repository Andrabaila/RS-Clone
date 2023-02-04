import createFooter from '../layouts/createFooter';
import { createHeader } from '../layouts/header/header';

async function createStartPage() {
    createHeader();
    createFooter();
}

export default createStartPage;
