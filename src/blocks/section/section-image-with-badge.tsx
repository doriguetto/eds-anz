import {SectionData} from "./section.tsx";
import ImagePreloader from "../hero/image.tsx";

export default ({innerSections}: SectionData) => {


    let img;
    let badgeImg;
    let badgeSectionContent;
    let button;
    if (innerSections) {
        const pictureEl = innerSections[0].querySelector('picture');

        if (pictureEl) {
            const imgData = {
                pictureEl,
                preload: true,
                breakpoints: [
                    {media: '(max-width: 800px)', width: '727'},
                ]
            }
            img = <ImagePreloader {...imgData}/>
        }

        const badge = innerSections[1].querySelector('picture')
        if (badge) {
            const imgData = {
                pictureEl: badge,
                preload: true,
                breakpoints: [
                    {media: '(max-width: 800px)', width: '727'},
                ]
            }
            badgeImg = <ImagePreloader {...imgData}/>
        }

        badgeSectionContent = innerSections[2]
        button = innerSections[3]
    }


    return (
        <div className="columns">
            <div
                className="container container--matchheight container--eightfour box--white padding-top--20px padding-bottom--0px container--two-columns">
                <div className="grid ">
                    <div className="container__default column-heading">
                        <div className="aem__component clearfix">
                            <div className="container__default__element     ">

                            </div>
                        </div>
                    </div>
                    <div className="    clearfix ">
                        <div className="container__items container__main none none ">
                            <div className="aem__component clearfix">
                                <div className="container__item container__main__element     none">
                                    <div className="box--top">
                                        <div className="textimage parbase">
                                            <div className="image-text image-text--medium image-text--left   ">
                                                <div className="clearfix">
                                                </div>
                                                <div className="clearfix">
                                                    <div className="image bg-transparent image--noborder image-section">
                                                    </div>
                                                    <div className="text" data-emptytext="Text">
                                                        {img &&
                                                            <p className="paragraph-text--regular">
                                                                {img}
                                                            </p>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="match-height--separator"></div>
                                </div>
                            </div>
                        </div>
                        <div className="container__items container__aside none none ">
                            <div className="aem__component clearfix">
                                <div className="container__item container__aside__element     none">
                                    <div className="box--top">
                                        <div className="text text-underline parbase">
                                            {badgeImg &&
                                                <p className=" padding-top--40px badge">
                                                    {badgeImg}
                                                </p>
                                            }
                                            {badgeSectionContent &&
                                                <div
                                                    dangerouslySetInnerHTML={{__html: badgeSectionContent?.outerHTML}}/>
                                            }
                                            {button &&
                                                <a href={button.getAttribute('href') || '#'}
                                                   className="btn btn--blue btn--transparent badge-button"
                                                   aria-label="Learn about financial wellbeing">{button.textContent}</a>
                                            }
                                        </div>
                                    </div>
                                    <div className="match-height--separator"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
