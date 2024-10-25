import {SectionData} from "./section.tsx";
import ImagePreloader from "../hero/image.tsx";

export default ({innerSections}: SectionData) => {

    let img;
    let badgeImg;
    let badgeSectionContent;
    let sectionContent;
    if (innerSections) {

        const badge = innerSections[0].querySelector('picture')
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
        badgeSectionContent = innerSections[1]

        sectionContent = innerSections[2]

        const pictureEl = innerSections[3].querySelector('picture');

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

    }

    return (
        <div className="columns">
            <div
                className="container  container--matchheight container--four box--white padding-top--40px padding-bottom--40px container--three-columns">
                <div className="grid ">
                    <div className="container__default column-heading">
                        <div className="aem__component clearfix">
                            <div className="container__default__element     ">
                            </div>
                        </div>
                    </div>
                    <div className="    clearfix">
                        <div className="container__items container__main">
                            <div className="aem__component clearfix">
                                <div className="container__item container__main__element     none">
                                    <div className="box--top">
                                        <div className="text parbase text-underline">
                                            {badgeImg &&
                                                <p className=" padding-top--40px badge">
                                                    {badgeImg}
                                                </p>
                                            }
                                            {badgeSectionContent &&
                                                <div dangerouslySetInnerHTML={{__html: badgeSectionContent?.outerHTML}}/>
                                            }
                                        </div>
                                    </div>
                                    <div className="match-height--separator"></div>
                                </div>
                                <div className="container__item container__main__element     none">
                                    <div className="box--top">
                                        {sectionContent &&

                                            <div className="text parbase text-underline"
                                                 dangerouslySetInnerHTML={{__html: sectionContent.outerHTML}}>

                                            </div>
                                        }
                                    </div>
                                    <div className="match-height--separator"></div>

                                </div>
                                <div className="container__item container__main__element     none">


                                    <div className="box--top">
                                        <div className="textimage parbase">


                                            <div className="image-text image-text--medium image-text--left   ">


                                                <div className="clearfix">

                                                </div>


                                                <div className="clearfix">


                                                    <div className="image bg-transparent image--noborder">


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
                    </div>
                </div>
            </div>
        </div>
    )
}