import {useEffect} from "react";

export type ImageBreakpoint = {
    media?: string;
    width: string;
};

export type ImagePreloaderProps = {
    breakpoints?: ImageBreakpoint[];
    pictureEl: HTMLPictureElement | null | undefined,
    eager?: boolean;
};

const ImagePreloader = ({ breakpoints = [], eager = false, pictureEl }: ImagePreloaderProps) => {

    if (!pictureEl) return null;
    const img = pictureEl.querySelector('img')
    const imgElSrc = img?.getAttribute('src')

    if (!imgElSrc) return null;
    const alt = img?.getAttribute('alt') || '';
    const width = img?.getAttribute('width') || 0;
    const height = img?.getAttribute('height') || 0;

    const url = new URL(imgElSrc, window.location.href);
    const { pathname } = url;
    const ext = pathname.substring(pathname.lastIndexOf('.') + 1);
    const imgSrc = `${pathname}?width=2048&amp;format=jpeg&amp;optimize=medium`

    const sources = breakpoints.map((breakpoint) => {
        return {
            type: 'image/webp',
            srcSet: `${pathname}?width=${breakpoint.width}&format=webply&optimize=medium`,
            media: breakpoint.media
        }
    });

    useEffect(() => {
        const reactImg = new Image()
        reactImg.src = `${pathname}?format=${ext}&optimize=medium`;
    }, []);

    return (
        <>
            <link rel="preload" as="image" href={imgSrc}></link>
            <picture>
                {sources.map((source, index) => (
                    <>
                        <source key={index} media={source.media} srcSet={source.srcSet}/>
                        <source key={index} media={source.media} type={source.type} srcSet={source.srcSet}/>
                        {index === sources.length - 1 && (
                            <img
                                loading={eager? 'eager' :'lazy'}
                                alt={alt}
                                width={width}
                                height={height}
                                src={`${pathname}?width=2048&amp;format=jpeg&amp;optimize=medium`}
                            />
                        )}
                    </>
                ))}
            </picture>
        </>
    );
};

export default ImagePreloader;