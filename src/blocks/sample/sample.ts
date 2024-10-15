import Sample from './Sample.svelte';

export default async function decorate(block) {
    debugger;

    // Select the node that will be observed for mutations
    var targetNode = block;

    // Options for the observer (which mutations to observe)
    var config = { attributes: true, childList: true };

    // Callback function to execute when mutations are observed
    var callback = function(mutationsList) {
        debugger
        for(var mutation of mutationsList) {
            if (mutation.type == 'childList') {
                console.log('A child node has been added or removed.');
                console.log(mutation.target)
            }
            else if (mutation.type == 'attributes') {
                console.log('The ' + mutation.attributeName + ' attribute was modified.');
            }
        }
    };

    // Create an observer instance linked to the callback function
    var observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);


    new Sample({
        target: block,
        hydrate: true
    })

    // Later, you can stop observing
    //observer.disconnect();

}

