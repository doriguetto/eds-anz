import Badge, {BadgeData} from "./badge.tsx";
import Card, {CardData} from "./card.tsx";
import {SectionData} from "./section.tsx";

export default (props: SectionData) => {

    const innerSections = props?.innerSections;
    const badgeData: BadgeData = {
        iconPicture: innerSections && innerSections[0].children[0].querySelector('picture'),
        content: innerSections && innerSections[0].children[2]
    }
    const cardData: CardData = {
        heading: innerSections && innerSections[1].children[0],
        button: innerSections && innerSections[1].children[2],
        cardPicture: innerSections && innerSections[1].children[4].querySelector('picture')
    }
    return (
        <div className="invisibleMbox" id="content-anzcomau-en-personal-anz_default_par-start">
            <div className="columns">
                <div
                    className="container   container--four box--white padding-top--40px padding-bottom--0px container--three-columns">
                    <div className="grid ">
                        <div className="    clearfix">
                            <div className="container__items container__main">
                                <div className="aem__component clearfix">
                                    <Badge {...badgeData}/>
                                    <Card {...cardData}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}