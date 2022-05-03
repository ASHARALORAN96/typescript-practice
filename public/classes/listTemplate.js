export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(text, heading, pos) {
        let li = document.createElement('li');
        let p = document.createElement('p');
        let h4 = document.createElement('h4');
        h4.innerText = heading;
        p.innerText = text.format();
        li.append(h4);
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
