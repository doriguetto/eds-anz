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
    ext?: string;
};

const ImagePreloader = ({breakpoints = [], lazy = false, preload = false, pictureEl, ext = 'webp'}: ImagePreloaderProps) => {
    const [sources, setSources] = useState<ImageSource[]>([]);
    if (!pictureEl) return null;
    const img = pictureEl.querySelector('img')
    const imgElSrc = img?.getAttribute('src')

    if (!imgElSrc) return null;
    const alt = img?.getAttribute('alt') || '';
    const width = img?.getAttribute('width') || 0;
    const height = img?.getAttribute('height') || 0;

    const url = new URL(imgElSrc, window.location.href);
    const { pathname} = url;
    const pathWithoutExtension = pathname.substring(0,pathname.lastIndexOf('.') );
    const imgSrc = `${pathWithoutExtension}.${ext}?width=2048&amp;format=jpeg&amp;optimize=medium`

    useEffect(() => {

        setSources(breakpoints.map((breakpoint) => {
            const srcSet = `${pathWithoutExtension}.${ext}?width=${breakpoint.width}&format=webply&optimize=medium`
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
                        <link rel="preload" as="image" media={source.media} href={source.srcSet} key={index}></link>
                    ))}
                </>
            )}
            <picture>
                {sources.map((source, index) => (
                    <>
                        <source key={index} media={source.media} type={source.type} srcSet={source.srcSet}/>
                    </>
                ))}
                <img
                    loading={lazy ? 'lazy' : 'eager'}
                    alt={alt}
                    width={width}
                    height={height}
                    src={imgSrc}
                />
            </picture>
        </>
    );
};

export default ImagePreloader;