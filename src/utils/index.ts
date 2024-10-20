export async function loadFragment(path: string) {
    if (path) {
        const resp = await fetch(`${path}.plain.html`);
        if (resp.ok) {
            const main = document.createElement('main');
            main.innerHTML = await resp.text();
            return main;
        }
    }
    return null;
}
