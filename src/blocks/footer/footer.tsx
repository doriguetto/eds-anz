import {createRoot} from "react-dom/client";
import './footer.scss';
// import {useState} from "react";

// interface Data {
//     menus: Menu[]
// }
import FacebookSvg from '../../assets/facebook.svg?react'
import LinkedInSvg from '../../assets/linkedin.svg?react';
import InstagramSvg from '../../assets/instagram.svg?react';
import YoutubeSvg from '../../assets/youtube.svg?react';
import { ReactElement, ReactNode } from "react";

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
            {/*<a className="linkmultifield__link" href={props.link}*/}
            {/*   data-event="site-interaction" data-category="footer"*/}
            {/*   data-description="ourcompany" data-clicktrack="ourcompany-footer">*/}
                {props.icon}
            {/*</a>*/}
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


const Row = (props: Row) => {
    return (
        <div className="rowcontainer">
            <div className="rowcontainer anz-component ">
                <div className="grid">
                    <div className="rowcontainer__row rowcontainer--column-4 ">
                        {props.menus.map((menu) =>
                            <Menu {...menu}>
                                <>
                                    {menu.subMenus.map((subMenu) =>
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
    )
}

const Footer = (props: Data) => {
    return (
        <>
            {props.rows.map((row) => <Row {...row}/>)}
        </>
    );
}

type Row = {
    menus: Menu[]
}
type Data = {
    rows: Row[],
}

type Menu = {
    title: string;
    link: string;
    subMenus: SubMenu[]
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
            }
        ]
    }

    createRoot(block).render(<Footer {...footerData}/>)
}