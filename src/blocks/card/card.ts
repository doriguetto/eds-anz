import Card from './Card.svelte';

export default async function decorate(block) {
    new Card({
        target: block,
    })
}
