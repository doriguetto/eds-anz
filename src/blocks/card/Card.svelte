<script>
    export let block;

    // This function creates an optimized picture object
    function createOptimizedPicture(src, alt, flag, sizes) {
        return { src, alt, sizes };
    }

    // Helper function to determine the class name based on the content
    function getClass(div) {
        if (div.children.length === 1 && div.querySelector('picture')) {
            return 'cards-card-image';
        }
        return 'cards-card-body';
    }
</script>

<ul>
    {#each block.children as row (row)}
        <li>
            {#each row.children as div (div)}
                <div class={getClass(div)}>
                    {#if div.querySelector('picture')}
                        {#each Array.from(div.querySelectorAll('picture > img')) as img (img)}
                            <picture>
                                <img src={img.src} alt={img.alt} />
                            </picture>
                        {/each}
                    {:else}
                        {@html div.innerHTML}
                    {/if}
                </div>
            {/each}
        </li>
    {/each}
</ul>