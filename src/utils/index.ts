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

/**
 * Returns a picture element with webp and fallbacks
 * @param {string} src The image URL
 * @param {string} [alt] The image alternative text
 * @param {boolean} [eager] Set loading attribute to eager
 * @param {Array} [breakpoints] Breakpoints and corresponding params (eg. width)
 * @returns {Element} The picture element
 */
export const createOptimizedPicture = (
    pictureEl: HTMLPictureElement | null | undefined,
    eager = false,
    breakpoints = [{ media: '(min-width: 600px)', width: '2000' }, { width: '750' }],
) => {
    if (!pictureEl) return null;
    const img = pictureEl.querySelector('img')
    const src = img?.getAttribute('src')

    if (!src) return null;
    const alt = img?.getAttribute('alt') || '';

    const url = new URL(src, window.location.href);
    const picture = document.createElement('picture');
    const { pathname } = url;
    const ext = pathname.substring(pathname.lastIndexOf('.') + 1);

    // webp
    breakpoints.forEach((br) => {
        const source = document.createElement('source');
        if (br.media) source.setAttribute('media', br.media);
        source.setAttribute('type', 'image/webp');
        source.setAttribute('srcset', `${pathname}?width=${br.width}&format=webply&optimize=medium`);
        picture.appendChild(source);
    });

    // fallback
    breakpoints.forEach((br, i) => {
        if (i < breakpoints.length - 1) {
            const source = document.createElement('source');
            if (br.media) source.setAttribute('media', br.media);
            source.setAttribute('srcset', `${pathname}?width=${br.width}&format=${ext}&optimize=medium`);
            picture.appendChild(source);
        } else {
            const img = document.createElement('img');
            img.setAttribute('loading', eager ? 'eager' : 'lazy');
            img.setAttribute('alt', alt);
            picture.appendChild(img);
            img.setAttribute('src', `${pathname}?width=${br.width}&format=${ext}&optimize=medium`);
        }
    });

    return picture;
}
