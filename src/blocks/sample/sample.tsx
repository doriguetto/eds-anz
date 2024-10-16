import '@builder.io/qwik/qwikloader.js'

import {component$, render} from '@builder.io/qwik'

const Sample = component$(() => {
    const markup = '<div class="sample block" data-block-name="sample" data-block-status="loading">\n          <div>\n            <div><p>One day you will make It.</p></div>\n          </div>\n        </div>'
    return (
        <div dangerouslySetInnerHTML={markup}></div>)
})

export default async (block: HTMLDivElement) => {

    // Select the node that will be observed for mutations
    const targetNode = block;

    // Options for the observer (which mutations to observe)
    var config = {attributes: true, childList: true};

    // Callback function to execute when mutations are observed
    var callback = function (mutationsList: any) {
        debugger
        for (var mutation of mutationsList) {
            if (mutation.type == 'childList') {

                console.log(`Added:  ${"addedNodes" in mutation}`)    // no added nodes   (there should be)

                console.log(`Removed ${"removedNodes" in mutation}`) // no removed nodes (which is fine)
                console.log(mutation.target)                           // I've confirmed the target is the correct one
                console.log(mutation.target.childNodes.length)         // after multiple callbacks the length of children is actually increasing

            } else if (mutation.type == 'attributes') {
                console.log('The ' + mutation.attributeName + ' attribute was modified.');
            }
        }
    };

    // Create an observer instance linked to the callback function
    var observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
    debugger
    // hydrate(template(), block)
    render(block, <Sample/>)

};