function stringToElement(htmlString: string) {
    const template = document.createElement('template');
    if (htmlString) {
        template.innerHTML = htmlString;
        return template.content.firstChild as HTMLTemplateElement;
    }
    return template;
}

export default stringToElement;
