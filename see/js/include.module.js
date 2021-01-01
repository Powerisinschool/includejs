//j

export class IncludeFile extends HTMLElement {
    constructor() {
        super(); // always call super() first in the constructor.

        let e404 = document.createElement('template');
        e404.innerHTML = `
            <style>:host { ... }</style> <!-- look ma, scoped styles -->
            <b>Page Not Found</b>
            <slot></slot>
        `;
        let responsei = document.createElement('template');

        var file, xhttp;
        var file = this.getAttribute("data-url");
        var elmnt = this;
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        //elmnt.innerHTML = this.responseText;
                        // Attach a shadow root to the element.
                        let shadowRoot = elmnt.attachShadow({mode: 'open'});
                        responsei.innerHTML = `
                            <style>:host { ... }</style> <!-- look ma, scoped styles -->
                            <b>${this.responseText}</b>
                            <slot></slot>
                        `
                        shadowRoot.appendChild(responsei.content.cloneNode(true));
                    }
                    if (this.status == 404) {
                        // Attach a shadow root to the element.
                        let shadowRoot = elmnt.attachShadow({mode: 'open'});
                        shadowRoot.appendChild(e404.content.cloneNode(true));
                    }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("data-url");
                }
            }
            var urle;
            if (window.location.pathname.match('/') || window.location.pathname.match('')) {
                urle = window.location.href + file;
            } else {
                urle = window.location.href.split(window.location.pathname)[0] + '/' + file;
            }
            console.log(`Pathname: ${window.location.pathname}`);
            console.log(`Full Url: ${window.location.href}`);
            console.log(`Url to fetch: ${urle}`);
            xhttp.open("GET", urle, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

export function getFileWithTag(tag) {
    var farse = tag.split('-');
    if (farse[0]) {
        customElements.whenDefined(tag, () => {
            console.log(`Defined ${tag}`);
        });
        customElements.define(tag, IncludeFile);
        return 'Defined';
    } else {
        return 'Not Defined';
    }
}