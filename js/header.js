import html from './html.js';

function makeHeader() {
    return html`
    <header>
        <img class="logo" src="assets/caripizza.png">
        <h1>
            Todo List
        </h1>
    </header>
    `;
}

class Header {
    render() {
        const dom = makeHeader();

        return dom;
    }
}

export default Header;