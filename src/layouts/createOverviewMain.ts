// import getHtmlElement from '../components/getHtmlElement';
// import getLangObj from '../features/getLangObj';
// import { persons } from '../data/database';
// import togglePopup from '../features/togglePopup';

// function createOverviewMain() {
//     const langObj = getLangObj();

//     document.querySelector('.main')?.remove();

//     getHtmlElement({ parent: 'body', tag: 'main', style: ['main', 'main_overview'] });
//     getHtmlElement({ parent: '.main', style: ['main__wrapper', 'main__wrapper_overview'] });
//     getHtmlElement({ parent: '.main__wrapper', tag: 'ul', style: ['members-list'] });
//     persons.forEach((person) => {
//         const listItem = getHtmlElement({ parent: '.members-list', tag: 'li', style: ['members-list__item'] });
//         listItem.dataset.hash = 'user_page';
//         getHtmlElement({ parentNode: listItem, tag: 'span', style: ['members-list__text'], content: person.name });
//         getHtmlElement({
//             parentNode: listItem,
//             tag: 'span',
//             style: ['members-list__text'],
//             content: String(person.balance),
//         });
//     });

//     getHtmlElement({
//         parent: '.main__wrapper',
//         tag: 'button',
//         style: ['button', 'button_overview'],
//         content: langObj.buttonInvite,
//     }).addEventListener('click', togglePopup);
// }
// export default createOverviewMain;
