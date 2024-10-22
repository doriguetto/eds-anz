import {useEffect, useState} from "react";

export type ImageBreakpoint = {
    media?: string;
    width: string;
};

export type ImageSource = {
    type: string;
    srcSet: string;
    media?: string;
};

export type ImagePreloaderProps = {
    breakpoints?: ImageBreakpoint[];
    pictureEl: HTMLPictureElement | null | undefined,
    lazy?: boolean;
    preload?: boolean;
};

const ImagePreloader = ({breakpoints = [], lazy = false, preload = false, pictureEl}: ImagePreloaderProps) => {
    const [sources, setSources] = useState<ImageSource[]>([]);
    if (!pictureEl) return null;
    const img = pictureEl.querySelector('img')
    const imgElSrc = img?.getAttribute('src')

    if (!imgElSrc) return null;
    const alt = img?.getAttribute('alt') || '';
    const width = img?.getAttribute('width') || 0;
    const height = img?.getAttribute('height') || 0;

    const url = new URL(imgElSrc, window.location.href);
    const {pathname} = url;
    // const ext = pathname.substring(pathname.lastIndexOf('.') + 1);
    const imgSrc = `${pathname}?width=2048&amp;format=jpeg&amp;optimize=medium`


    useEffect(() => {
        if (preload) {
            const reactImg = new Image()
            reactImg.src = imgSrc;
        }
        setSources(breakpoints.map((breakpoint) => {
            const srcSet = `${pathname}?width=${breakpoint.width}&format=webply&optimize=medium`
            if (preload) {
                const reactImg = new Image()
                reactImg.src = srcSet;
            }
            return {
                type: 'image/webp',
                srcSet: srcSet,
                media: breakpoint.media
            }
        }))
    }, []);

    return (
        <>
            {preload && (
                <>
                    {sources.map((source, index) => (
                        <link rel="preload" as="image" href={source.srcSet} key={index}></link>
                    ))}
                    <link rel="preload" as="image" href={imgSrc}></link>
                </>
            )}
            <picture>
                {sources.map((source, index) => (
                    <>
                        <source key={index} media={source.media} srcSet={source.srcSet}/>
                        <source key={index} media={source.media} type={source.type} srcSet={source.srcSet}/>
                        {index === sources.length - 1 && (
                            <img
                                loading={lazy ? 'lazy' : 'eager'}
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