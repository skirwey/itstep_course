class HTMLElement {
    constructor (name) {
        this.name = name;
        this.id = null;
        this.style = {};
        this.classList = {
            classes: [],
            add: function(...classNames) {
                for (let className of classNames) {
                    this.classes.push(className);
                }
            },
            delete: function(...classNames) {
                for (let className of classNames) {
                    let index = this.classes.indexOf(className);
                    if (index > -1) {
                        this.classes.splice(index, 1);
                    }
                }
            }
        };
    }

    addStyle(name, value) {
        this.style[name] = value;
    }
    
    getStylesList() {
        let styles = '';
        for (let key of Object.keys(this.style)) {
            let styleName = key;
            let styleValue = this.style[key];
            let styleString = `${styleName}:${styleValue};`;
            styles += styleString;
        }
        return styles ? ` style = "${styles}"` : '';
    }

    getClassList() {
        return this.classList.classes.length > 0 ? ` class="${this.classList.classes.join(' ')}"` : '';
    }

    renderHTML() {
        return `<${this.name}${this.getClassList()}${this.getStylesList()}></${this.name}>`;
    }

    drawHTML() {
        document.body.insertAdjacentHTML('afterbegin', this.renderHTML());
    }
}

class HTMLHrefElement extends HTMLElement{
    constructor (href) {
        super('a');
        this.href = href;
    }
}

    const div = new HTMLElement ('div');
    div.id = "block";
    div.classList.add("container", "main-section", "colored");
    div.classList.delete("colored");

    div.addStyle('height', '100vh');
    div.addStyle('background-color', 'red');

    console.log(div);
    div.drawHTML();

    const a = new HTMLHrefElement('https://google.com');
    a.id = "external_link";

    console.log(a.renderHTML());
