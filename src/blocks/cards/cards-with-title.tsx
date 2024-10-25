import ComputerSvg from '../../assets/computer.svg?react';
import HomeSvg from '../../assets/home.svg?react';
import CardSvg from '../../assets/card.svg?react';

type CardsWithTitlesProps = {
    title: Element | null;
    cards: Element[] | null;
}

export default (props: CardsWithTitlesProps) => {
    return (
        <>
            <div className="columns">
                <div className="container    box--white padding-top--20px padding-bottom--0px container--one-column">
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
                                        {props.title &&
                                            <div className="text parbase"
                                                 dangerouslySetInnerHTML={{__html: props.title?.outerHTML}}>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {props.cards &&
                <div className="columns">
                    <div
                        className="container   container--four box--white padding-top--10px padding-bottom--40px container--three-columns">
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
                                        {props.cards.map(card =>
                                            (<div className="container__item container__main__element     none">
                                                    <div className="invisibleMbox"
                                                         id="content-anzcomau-en-personal-anz_default_par-columns_1488187552-anz_default_par1-start">
                                                        <div>
                                                        </div>
                                                        <div className="textimage parbase">
                                                            <div
                                                                className="image-text image-text--medium image-text--left   ">
                                                                <div className="clearfix">
                                                                    <div className="heading">
                                                                    </div>
                                                                </div>
                                                                <div className="clearfix">
                                                                    <div
                                                                        className="image bg-transparent image--noborder">
                                                                        {card.children[1] && card.children[1].textContent === 'computer' &&
                                                                            <ComputerSvg/>
                                                                        }
                                                                        {card.children[1] && card.children[1].textContent === 'house' &&
                                                                            <HomeSvg/>
                                                                        }
                                                                        {card.children[1] && card.children[1].textContent === 'credit-card' &&
                                                                            <CardSvg/>
                                                                        }
                                                                    </div>
                                                                    {card.children[0] &&
                                                                        <div className="text" data-emptytext="Text">
                                                                            <div
                                                                                dangerouslySetInnerHTML={{__html: card.children[0].outerHTML}}>

                                                                            </div>
                                                                            {card.children[2] &&
                                                                                <a
                                                                                    href={card.children[2].getAttribute('href') || '#'}
                                                                                    className="btn btn--blue btn--transparent card-button"
                                                                                    aria-label="Open a bank account">{card.children[2].textContent}
                                                                                </a>
                                                                            }

                                                                        </div>
                                                                    }


                                                                </div>

                                                            </div>

                                                        </div>


                                                        <div className="end">

                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}