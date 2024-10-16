import {html, render, TemplateResult} from "lit";
import { hydrate } from '@lit-labs/ssr-client'

const template = (): TemplateResult => {
    return html`
        <div>
            <div><p>One day you will make It.</p></div>
        </div>
    `;
};

/**
 * Each block has an exported default function. It receives the raw block
 * provided by EDS and is used to extract the arguments from it.
 * @param {HTMLElement} block The raw block element provided by EDS.
 */
export default function (block: HTMLElement) {

    // Options for the observer (which mutations to observe)
    var config = { attributes: true, childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    var callback = function(mutationsList) {
        for(var mutation of mutationsList) {
            if (mutation.type == 'childList') {
                mutation.addedNodes.forEach(node => {
                    console.log('ADDED')
                    console.log(node);
                })
                mutation.removedNodes.forEach(node => {
                    console.log('REMOVED')
                    console.log(node);
                })
            }
            else if (mutation.type == 'attributes') {
                console.log('ATTR:  ' + mutation.attributeName);
            }
        }
    };

    // Create an observer instance linked to the callback function
    var observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(block, config);


    console.log(block.outerHTML)

    hydrate(template(), block);

    debugger
    render(template(), block);
}