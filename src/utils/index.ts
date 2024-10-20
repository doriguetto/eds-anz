export async function loadFragment(path: string) {
   debugger
    if (path) {
        const resp = await fetch(`${path}.plain.html`);
       debugger
        if (resp.ok) {
            const main = document.createElement('main');
            main.innerHTML = await resp.text();

            return main;
debugger
        }
    }
    return null;
}
