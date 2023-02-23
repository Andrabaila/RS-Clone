function switchLanguage() {
    if (localStorage.getItem('language')) {
        switch (localStorage.getItem('language')) {
            case 'english':
                localStorage.setItem('language', 'belarusian');
                break;
            case 'belarusian':
                localStorage.setItem('language', 'russian');
                break;
            case 'russian':
                localStorage.setItem('language', 'english');
                break;
            default:
        }
    }
}

export default switchLanguage;
