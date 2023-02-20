import getLangObj from '../features/getLangObj';

function createFooter() {
    const langObj = getLangObj();

    if (document.querySelector('.footer') instanceof Node && document.querySelector('.main') instanceof Node) {
        document.querySelector('.main')?.after(<Node>document.querySelector('.footer'));
        return;
    }

    const body = document.querySelector('body');
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const footerWrapper = document.createElement('div');
    footerWrapper.classList.add('footer__wrapper');
    footer.append(footerWrapper);
    body?.append(footer);

    const githubLinkFirstTeammate = document.createElement('a');
    githubLinkFirstTeammate.classList.add('footer__item', 'footer__item_github-link');
    githubLinkFirstTeammate.href = 'https://github.com/andrabaila';
    githubLinkFirstTeammate.target = '_blank';
    githubLinkFirstTeammate.textContent = langObj.githubLinkFirstTeammate;

    const githubLinkSecondTeammate = document.createElement('a');
    githubLinkSecondTeammate.classList.add('footer__item', 'footer__item_github-link');
    githubLinkSecondTeammate.href = 'https://github.com/skynersany';
    githubLinkSecondTeammate.target = '_blank';
    githubLinkSecondTeammate.textContent = langObj.githubLinkSecondTeammate;

    const githubLinkThirdTeammate = document.createElement('a');
    githubLinkThirdTeammate.classList.add('footer__item', 'footer__item_github-link');
    githubLinkThirdTeammate.href = 'https://github.com/pavelpoleshchuk';
    githubLinkThirdTeammate.target = '_blank';
    githubLinkThirdTeammate.textContent = langObj.githubLinkThirdTeammate;

    const applicationCreationYear = document.createElement('span');
    applicationCreationYear.classList.add('footer__item');
    applicationCreationYear.textContent = langObj.applicationCreationYear;

    const rsSchoolLink = document.createElement('a');
    rsSchoolLink.classList.add('footer__item', 'footer__item_rsschool-link');
    rsSchoolLink.href = 'https://rs.school/js/';
    rsSchoolLink.target = '_blank';

    footerWrapper.append(
        githubLinkFirstTeammate,
        githubLinkSecondTeammate,
        githubLinkThirdTeammate,
        applicationCreationYear,
        rsSchoolLink
    );
}

export default createFooter;
