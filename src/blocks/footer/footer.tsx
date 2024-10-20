import {createRoot} from "react-dom/client";
import './footer.scss';

// import LinkedInSvg from '../../assets/linkedin.svg?react';
// import InstagramSvg from '../../assets/instagram.svg?react';
// import YoutubeSvg from '../../assets/youtube.svg?react';
// import GlobeSvg from '../../assets/globe.svg?react';
import {lazy } from "react";

import {Data} from "./footerComponent.tsx";
const FacebookSvg =  lazy(() => import('../../assets/facebook.svg?react'));
const LinkedInSvg =  lazy(() => import('../../assets/linkedin.svg?react'));
const InstagramSvg =  lazy(() => import('../../assets/instagram.svg?react'));
const YoutubeSvg =  lazy(() => import('../../assets/youtube.svg?react'));
const Footer = lazy(() => import('./footerComponent'))

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