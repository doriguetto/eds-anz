<script>
    import Time from './Time.svelte';
    import {onMount} from "svelte";

    let timeComponent;
    let time;

    onMount(() => {
        debugger;
    })

</script>

<div>
    <div>
        <Time bind:this={timeComponent} bind:time />
        <h1>Spent time: {time} ms</h1>

        {#if timeComponent}
            <button on:click={() => timeComponent.spendTime() }>Click me</button>
        {:else}
            Loading...
        {/if}
    </div>
</div>



