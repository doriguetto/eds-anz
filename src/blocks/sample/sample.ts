import Sample from './Sample.svelte';

export default async function decorate(block) {

    // Options for the observer (which mutations to observe)
    var config = { attributes: true, childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    var callback = function(mutationsList) {
        debugger
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

    console.log(block.outerHTML);

    new Sample({
        target: block,
        hydrate: true
    })

    // Later, you can stop observing
    //observer.disconnect();

}

