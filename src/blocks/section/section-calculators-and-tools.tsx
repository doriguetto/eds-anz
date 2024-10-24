import {SectionData} from "./section.tsx";
import BankerSvg from '../../assets/banker.svg?react';
import CoinsSvg from '../../assets/coins.svg?react';
import CreditCardSvg from '../../assets/credit-card.svg?react';
import CurrencySvg from '../../assets/currency.svg?react';
import MoneyBagSvg from '../../assets/money.svg?react';
import HomeLoanSvg from '../../assets/home-loan.svg?react';


export default (props: SectionData) => {

    const innerSections = props?.innerSections;
    let heading;
    let links;
    let calculatorLink;
    if (innerSections) {
        heading = innerSections[0]
        links = innerSections[1]
        calculatorLink = innerSections[2]
    }

    const iconList = [
        <HomeLoanSvg/>,
        <CreditCardSvg/>,
        <CurrencySvg/>,
        <CoinsSvg/>,
        <MoneyBagSvg/>,
        <BankerSvg/>
    ]


    return (
        <>
            <div className="columns">
                <div
                    className="container container--foureight box--white padding-top--50px padding-bottom--20px container--two-columns">
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
                                        {heading &&
                                            <div className="text parbase margin-bottom--40px"
                                                 dangerouslySetInnerHTML={{__html: heading.outerHTML}}></div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="container__items container__aside none none ">
                                <div className="aem__component clearfix">
                                    <div className="container__item container__aside__element     none">
                                        <div className="inpagenav">
                                            <div></div>
                                            <div id="inpagenav-165195906" className="cp-inpage-nav grid clearfix">
                                                <div className="inpage-nav--tile-type">


                                                    <div className="inpage-nav__title clearfix">


                                                    </div>


                                                    <ul className="inpage-nav__links clearfix list--reset inpage-nav--calcs inpage-nav--col-2 inpage-nav--small-tile">
                                                        {links && Array.from(links.children).map((link, index) => {
                                                            return (
                                                                <li className="inpage-nav__link clearfix">
                                                                    <a href={link.getAttribute('href') || '#'}
                                                                       className="clearfix"
                                                                       aria-label="Home loan repayment calculator"
                                                                    >
                                                                <span
                                                                    className="inpage-nav__link-icon inpage-nav__svg-icon">
                                                                    {iconList[index]}
                                                                </span>
                                                                        <div className="inpage-nav__link-content">
                                                                            <div
                                                                                className="inpage-nav__link-text full-width ">
                                                                                {link.textContent}
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
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
            <div className="columns">
                <div
                    className="container container--foureight box--white padding-top--0px padding-bottom--30px container--two-columns">
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
                                    </div>
                                </div>
                            </div>
                            <div className="container__items container__aside none none ">
                                <div className="aem__component clearfix">
                                    <div className="container__item container__aside__element     none">
                                        <div className="text parbase">
                                            <p className="">
                                                {calculatorLink &&
                                                    <a
                                                        href={calculatorLink.getAttribute('href') || '#'}
                                                        className="text--html-blue-link link-no-underline">{calculatorLink.textContent}
                                                        <span className="icon" aria-hidden="true">&nbsp;</span>
                                                    </a>
                                                }
                                            </p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}