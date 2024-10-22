import {createRoot} from "react-dom/client";
import './hero.scss';
import ImagePreloader, {ImagePreloaderProps} from "./image.tsx";

const Hero = (props: HeroData) => {

    return (
        <div className="hero--container">
            <div className="hero--control">
                <div className="hero--control__main">
                    <div className="invisibleMbox"
                         id="content-anzcomau-en-personal-navigation-anz_homepage_hero_par-start">
                        <div className="herocontainer">
                            <div className="hero--tabs-container" data-hero-banner="false">
                                <div className="hero--tabs-container__content" data-ratio="25">
                                    <div className="hero textimage parbase">
                                        <div
                                            className="hero hero--fivefourthree-logon hero--stack-columns hero--product padding-bottom--10px padding-top--10px">
                                            <div className="hero__default">
                                                <div className="hero-frame">
                                                    {props.img &&
                                                        <div className="focuspoint" data-focus-x="0.241"
                                                             data-focus-y="0.048"
                                                             data-image-w="2560" data-image-h="1000">
                                                            <ImagePreloader {...props.img}/>
                                                        </div>
                                                    }
                                                </div>
                                                <div className="hero__breadcrumb grid" style={{width: '1164px'}}>
                                                    <div className="extra">
                                                        <a href="/locations/"
                                                           className="extra__link locator"
                                                           style={{color: '#fff'}}>
                                                            {/*<span className="icon icon_poi"></span>*/}
                                                            Find ANZ
                                                        </a>
                                                        <a href="https://www.anz.com.au/support/"
                                                           className="extra__link contact-us"
                                                           style={{color: '#fff'}}>
                                                            {/*<span className="icon icon_laptop"></span>*/}
                                                            Support Centre
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero__default hero__info">
                                                <div className="hero__main">
                                                    <div className="hero__main__element ">
                                                        <div className="text parbase">
                                                            <h1 className="alpha "><span className="text--white">Make life happen with an ANZ Personal Loan</span>
                                                            </h1>
                                                            <p style={{paddingTop: '10.0px'}}>New car? Trip of a
                                                                lifetime?
                                                                Fairy-tale wedding? Whatever it is you’ve got your heart
                                                                set on,
                                                                an ANZ Personal Loan could help you get there.</p>
                                                            <p style={{paddingTop: '10.0px'}}><a
                                                                href="/personal/personal-loans/?pid=pel-hb-td-hp-08-23-acq-pllifehappen"
                                                                className="btn btn--white">Visit ANZ
                                                                Personal Loans</a></p>
                                                            <p className="paragraph-text--small"><span
                                                                className="text--white">All credit applications are subject to ANZ’s credit assessment criteria. T&amp;Cs, fees and charges apply.</span>
                                                            </p>
                                                            <p>&nbsp;</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

type HeroData = {
    img?: ImagePreloaderProps
}

export default function decorate(block: HTMLDivElement) {
    const pictureEl = block.querySelector('picture');
    let img;
    if (pictureEl) {
        img = {
            pictureEl,
            lazy: true,
            breakpoints: [
                {media: '(max-width: 800px)', width: '350'},
                {media: '(max-width: 1140px)', width: '1150'},
                {media: '(max-width: 3000px)', width: '1593'},
                {width: '2048'}
            ]
        }
    }
    const heroData: HeroData = {
        img
    }

    // debugger
    createRoot(block).render(<Hero {...heroData}/>)
    // debugger
}