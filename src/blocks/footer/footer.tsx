import {createRoot} from "react-dom/client";
import './footer.scss';

import FacebookSvg from '../../assets/facebook.svg?react'
import LinkedInSvg from '../../assets/linkedin.svg?react';
import InstagramSvg from '../../assets/instagram.svg?react';
import YoutubeSvg from '../../assets/youtube.svg?react';
import GlobeSvg from '../../assets/globe.svg?react';
import {ReactElement, ReactNode} from "react";

const SubMenu = (props: SubMenu) => {
    return (
        <li className="linkmultifield__item">
            <a className="linkmultifield__link" href={props.link}
               data-event="site-interaction" data-category="footer"
               data-description="ourcompany" data-clicktrack="ourcompany-footer">
                {props.title}
            </a>
        </li>
    )
}


const IconMenu = (props: SubMenu) => {
    return (
        <li className="linkmultifield__item linkmultifield__item--icon">
            <a className="linkmultifield__link" href={props.link}
               data-event="site-interaction" data-category="footer"
               data-description="ourcompany" data-clicktrack="ourcompany-footer">
                {props.icon}
            </a>
        </li>
    )
}

const Menu = (props: MenuProps) => {
    return (
        <div className="rowcontainer__column">
            <div className="linkmultifield">
                <div className="linkmultifield anz-component">
                    <h2 className="linkmultifield__heading">
                        {props.title}
                    </h2>
                    <ul className="linkmultifield__list ">
                        {props.children}
                    </ul>
                </div>
            </div>
        </div>
    )
}

const MenuRow = (props: Row) => {
    return <div className="rowcontainer">
        <div className="rowcontainer anz-component ">
            <div className="grid">
                <div className="rowcontainer__row rowcontainer--column-4 ">
                    {props.menus.map((menu) =>
                        <Menu {...menu}>
                            <>
                                {menu.subMenus &&
                                    menu.subMenus.map((subMenu) =>
                                        !!subMenu.icon ?
                                            <IconMenu {...subMenu}/> :
                                            <SubMenu {...subMenu}/>
                                    )}
                            </>
                        </Menu>
                    )}
                </div>
            </div>
        </div>
    </div>
}

const LinkRow = (props: Row) => {
    return (
        <div className="rowcontainer__row">
            <div className="grid">
                <div className="footer__tertiarylinks">
                   <span className="countrypicker">
                       <a className="countrypicker__link" href="/personal/regions/" data-event="site-interaction"
                          data-category="footer" data-description="australia" data-clicktrack="australia-footer">
                           <span className="countrypicker__icon">
                                <GlobeSvg/>
                            </span>
                           Australia<span className="icon icon_arrow_right"></span>
                       </a>
                   </span>
                    <ul className="nostyle tertiarylinks__list">
                        {props.menus.map((menu) =>
                            <li className="tertiarylinks__item">
                                <a href={menu.link} className="tertiarylink" data-event="site-interaction"
                                   data-category="footer" data-description="privacy"
                                   data-clicktrack="privacy-footer">
                                    {menu.title}
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
                {props.text ?
                    <div className="footer__tertiarytext">
                       <p dangerouslySetInnerHTML={{ __html : props.text }}/>
                    </div> :
                    null
                }
            </div>
        </div>
    )
}

const Footer = (props: Data) => {
    return (
        <>
            {props.rows.map((row) =>
                row.type === 'menu' ?
                    <MenuRow {...row}/> :
                    <LinkRow {...row}/>)}
        </>
    )
}

type Row = {
    type: 'menu' | 'links';
    text?: string;
    menus: Menu[]
}
type Data = {
    rows: Row[],
}

type Menu = {
    title: string;
    link: string;
    subMenus?: SubMenu[]
}

type MenuProps = Menu & {
    children: ReactElement
}

type SubMenu = {
    title?: string;
    link?: string;
    icon?: ReactNode;
}

export default function decorate(block: HTMLDivElement) {

    const footerData: Data = {
        rows: [
            {
                type: 'menu',
                menus: [
                    {
                        title: "About us",
                        link: "#",
                        subMenus: [
                            {title: "Our company", link: "#"},
                            {title: "Debt Investor Centre", link: "#"},
                            {title: "ANZ Newsroom", link: "#"},
                            {title: "Shareholder Centre", link: "#"},
                            {title: "Environment, Social and Governance", link: "#"},
                            {title: "Careers", link: "#"},
                            {title: "Accessibility Statement", link: "#"},
                        ]
                    },
                    {
                        title: "Our other sites",
                        link: "#",
                        subMenus: [
                            {title: "Institutional banking", link: "#"},
                            {title: "Private banking", link: "#"},
                            {title: "Mobile lending", link: "#"},
                            {title: "Residential brokers", link: "#"},
                            {title: "Commercial brokers", link: "#"},
                        ]
                    },
                    {
                        title: "Security",
                        link: "#",
                        subMenus: [
                            {title: "Security hub", link: "#"},
                            {title: "Types of scams", link: "#"},
                            {title: "Latest security alerts", link: "#"},
                            {title: "Report fraud", link: "#"},
                            {title: "Report a lost or stolen card", link: "#"},
                        ]
                    },
                    {
                        title: "Contacts",
                        link: "#",
                        subMenus: [
                            {title: "Contact us", link: "#"},
                            {title: "Phone directory", link: "#"},
                            {title: "Book a branch appointment", link: "#"},
                            {title: "Complaints", link: "#"},
                            {title: "Financial hardship assistance", link: "#"},
                            {title: "Banking Code of Practice", link: "#"},
                        ]
                    },
                ],
            },
            {
                type: 'menu',
                menus: [
                    {
                        title: "Connect with us",
                        link: "#",
                        subMenus: [
                            {icon: <FacebookSvg/>},
                            {icon: <LinkedInSvg/>},
                            {icon: <YoutubeSvg/>},
                            {icon: <InstagramSvg/>}
                        ]
                    },
                    {
                        title: "Download our new app",
                        link: "#",
                        subMenus: [
                            {title: "For Android and iOS", link: "#"},
                        ]
                    },
                ]
            },
            {
                type: 'links',
                text: "© Australia and New Zealand Banking Group Limited (ANZ)   <span class=\"text--nowrap\">ABN 11 005 357 522.</span>",
                menus: [
                    {
                        title: 'Privacy',
                        link: '/privacy/centre/',
                    },
                    {
                        title: 'Website terms of use',
                        link: '/privacy/centre/',
                    },
                    {
                        title: 'Sitemap',
                        link: '/privacy/centre/',
                    },
                    {
                        title: 'Help',
                        link: '/privacy/centre/',
                    },
                ]

            }
        ]
    }

    createRoot(block).render(<Footer {...footerData}/>)
}