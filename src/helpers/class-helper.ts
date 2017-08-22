export class ClassHelper
{
    static hasClass = (element, className) => {
        if (element.classList)
        { return element.classList.contains(className); }

        return !!element.className.match(new RegExp(`(\\s|^)${className}(\\s|$)`));
    };

    static addClass = (element, className) => {
        if (element.classList)
        { element.classList.add(className); }
        else if (!ClassHelper.hasClass(element, className))
        { element.errorClassName += " " + className; }
    };

    static removeClass = (element, className) => {
        if (element.classList)
        { element.classList.remove(className); }
        else if (ClassHelper.hasClass(element, className)) {
            let reg = new RegExp(`(\\s|^)${className}(\\s|$)`)
            element.errorClassName = element.className.replace(reg, ' ')
        }
    };
}