import belarusian from '../data/belarusian';
import english from '../data/english';
import russian from '../data/russian';

function getLangObj() {
    const language = localStorage.getItem('language') ? localStorage.getItem('language') : 'english';
    if (language === 'belarusian') {
        return belarusian;
    }
    if (language === 'russian') {
        return russian;
    }
    return english;
}

export default getLangObj;
