export class ClassHelper
{
    public static hasClass = (element, className) => {
        if (element.classList)
        { return element.classList.contains(className); }

        return !!element.className.match(new RegExp(`(\\s|^)${className}(\\s|$)`));
    }

    public static addClass = (element, className) => {
        if (element.classList)
        { element.classList.add(className); }
        else if (!ClassHelper.hasClass(element, className))
        { element.errorClassName += " " + className; }
    }

    public static removeClass = (element, className) => {
        if (element.classList)
        { element.classList.remove(className); }
        else if (ClassHelper.hasClass(element, className)) {
            const reg = new RegExp(`(\\s|^)${className}(\\s|$)`);
            element.errorClassName = element.className.replace(reg, ' ');
        }
    }
}