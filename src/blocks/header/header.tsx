import {createRoot} from "react-dom/client";
import './header.scss';
import {useState} from "react";


const Header = (props: Data) => {
    const [menuOpen, setMenuOpen] = useState('')
    const onClick = (e: any, menu: string) => {
        e.preventDefault();
        e.stopPropagation();
        setMenuOpen(menuOpen === menu? '' : menu)
    }
    return (
        <div className="primary grid clearfix">
            <a href="#" className="logo logo--authored logo--default" title="ANZ Logo">
                <img
                    src="/public/logo-promo-anz-small.png"
                    role="presentation"
                    alt="ANZ logo"></img>
            </a>
            {props.menus.map((menu: Menu) =>
                <Menu
                    onMenuClick={onClick}
                    isMenuOpen={menuOpen === menu.title}
                    {...menu} />
            )}
        </div>
    )
}


const MenuItem = (props: SubMenu) => {
    return (
        <li className="subNav__content__menu__items__accounts" role="menuitem">
            <a href={props.href} className="clearfix">
                <span className="subNav__content__menu__items__accounts__title"><span
                    className={`sprite ${props.icon}`}></span>{props.title}</span>
                <span
                    className="subNav__content__menu__items__accounts__desc">{props.description}</span>
            </a>
        </li>
    )
}

const Promo = () => {
    return (
        <div className="subNav__promo">
            <div className="subNav__promo__item">
                <div>
                    <div className="textimage parbase">
                        <div className="image-text image-text--medium image-text--left   ">
                            <div className="clearfix">
                            </div>
                            <div className="clearfix">
                                <div className="image bg-transparent image--noborder">
                                    <a href="#" aria-label="Visit our security hub">
                                        <div data-picture="" data-alt="ANZ Falcon">
                                            <img alt="ANZ Falcon" src="/public/1712895216397.jpg"/>
                                        </div>
                                    </a>
                                </div>
                                <div className="text" data-emptytext="Text">

                                    <p className="rte--body2-regular padding-top--5px" style={{textAlign: 'center'}}>
                                        <b><br/>
                                            Fraud protection. <br/>
                                            Now it’s personal.</b></p>
                                    <p style={{textAlign: 'center'}}>ANZ Falcon® technology monitors millions of
                                        transactions every day to help keep you safe from fraud.&nbsp;</p>
                                    <p className="rte--body2-regular padding-top--5px" style={{textAlign: 'center'}}>
                                        <a
                                            href="#"
                                            className="btn btn--blue"
                                            aria-label="Visit our security hub">
                                            Visit our security hub
                                        </a>
                                    </p>
                                    <p className="paragraph-text--small" style={{textAlign: 'center'}}><span
                                        className="text--grayscale-45">Falcon® is a registered trademark of Fair Isaac Corporation.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Menu = (props: MenuProps) => {

    return (
        <div className="desktop-menu clearfix" aria-hidden="false">
            <div role="navigation" aria-hidden="false" className="navigation" aria-label="Primary">
                <ul className="primary__nav clearfix">
                    <li className={`tabs-personal hasSubNav ${props.isMenuOpen ? 'open' : ''}`}>
                        <a href="/personal/" className={`primary__nav__trigger ${props.isMenuOpen ? 'semibold' : ''}`} aria-expanded="false"
                           onClick={(e) => props.onMenuClick(e, props.title) }>{props.title}</a>
                        <div className="subNav" style={{display: props.isMenuOpen ? 'block' : 'none'}}>
                            <div className="subNav__content flex-container">
                                <div className="subNav__content__menu">
                                    <ul className="subNav__content__menu__items clearfix">
                                        <li className="subNav__content__menu__items__landing" role="menuitem">
                                            <a href={props.href}>
                                                <span className="subNav__content__menu__items__landing__title"><span
                                                    className="icon icon_arrow_right"></span>{props.title}</span>
                                                <span className="subNav__content__menu__items__landing__desc">
                                                    {props.description}</span>
                                            </a>
                                        </li>
                                        {
                                            props.submenus.map((submenu: SubMenu) => {
                                                return <MenuItem {...submenu}/>
                                            })
                                        }
                                    </ul>
                                </div>
                                <Promo/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
type SubMenu = {
    href: string,
    title: string,
    description: string,
    icon: string
}

type MenuProps = Menu & {
    onMenuClick: (e: any, menu: string) => void
    isMenuOpen: boolean
}

type Menu = {
    href: string,
    title: string,
    description: string,
    submenus: SubMenu[],
}

type Data = {
    menus: Menu[]
}

export default function decorate(block: HTMLDivElement) {

    const data: Data = {
        menus: [
            {
                href: '/personal/',
                title: 'Personal',
                description: '',
                submenus: [
                    {
                        href: '/personal/bank_accounts',
                        title: 'Bank accounts',
                        description: 'Everyday/savings & term deposits',
                        icon: 'bank-accounts'
                    },
                    {
                        href: '/personal/credit-cards',
                        title: 'Credit cards',
                        description: 'Low interest rate, rewards frequent flyer & platinum',
                        icon: 'card'
                    },
                    {
                        href: '/personal/home-loans',
                        title: 'Home loans',
                        description: 'Buying, refinancing & investing in property',
                        icon: 'home-loans'
                    },
                    {
                        href: '/personal/personal-loans',
                        title: 'Personal loans',
                        description: 'Debt consolidation, buying a new or used car, renovations and more',
                        icon: 'personal-loans'
                    },
                    {
                        href: '/personal/insurance',
                        title: 'Insurance',
                        description: 'Get on top of your home, life, income and car insurance',
                        icon: 'insurance'
                    },
                    {
                        href: '/personal/superannuation',
                        title: 'Superannuation and retirement',
                        description: 'Superannuation and retirement options',
                        icon: 'investing-super'
                    },
                    {
                        href: '/personal/international-travel',
                        title: 'International travel',
                        description: 'Foreign exchange, travel insurance, travel money card & international payments',
                        icon: 'foreignfx'
                    },
                ]

            },
            {
                href: '/business/',
                title: 'Business',
                description: '',
                submenus: [
                    {
                        href: '/personal/bank_accounts',
                        title: 'Bank accounts',
                        description: 'Everyday/savings & term deposits',
                        icon: 'bank-accounts'
                    },
                    {
                        href: '/personal/credit-cards',
                        title: 'Credit cards',
                        description: 'Low interest rate, rewards frequent flyer & platinum',
                        icon: 'card'
                    },
                    {
                        href: '/personal/home-loans',
                        title: 'Home loans',
                        description: 'Buying, refinancing & investing in property',
                        icon: 'home-loans'
                    },
                    {
                        href: '/personal/personal-loans',
                        title: 'Personal loans',
                        description: 'Debt consolidation, buying a new or used car, renovations and more',
                        icon: 'personal-loans'
                    },
                    {
                        href: '/personal/insurance',
                        title: 'Insurance',
                        description: 'Get on top of your home, life, income and car insurance',
                        icon: 'insurance'
                    },
                    {
                        href: '/personal/superannuation',
                        title: 'Superannuation and retirement',
                        description: 'Superannuation and retirement options',
                        icon: 'investing-super'
                    },
                    {
                        href: '/personal/international-travel',
                        title: 'International travel',
                        description: 'Foreign exchange, travel insurance, travel money card & international payments',
                        icon: 'foreignfx'
                    },
                ]

            },
            {
                href: '/institutional/',
                title: 'Institutional',
                description: '',
                submenus: [
                    {
                        href: '/personal/bank_accounts',
                        title: 'Bank accounts',
                        description: 'Everyday/savings & term deposits',
                        icon: 'bank-accounts'
                    },
                    {
                        href: '/personal/credit-cards',
                        title: 'Credit cards',
                        description: 'Low interest rate, rewards frequent flyer & platinum',
                        icon: 'card'
                    },
                    {
                        href: '/personal/home-loans',
                        title: 'Home loans',
                        description: 'Buying, refinancing & investing in property',
                        icon: 'home-loans'
                    },
                    {
                        href: '/personal/personal-loans',
                        title: 'Personal loans',
                        description: 'Debt consolidation, buying a new or used car, renovations and more',
                        icon: 'personal-loans'
                    },
                    {
                        href: '/personal/insurance',
                        title: 'Insurance',
                        description: 'Get on top of your home, life, income and car insurance',
                        icon: 'insurance'
                    },
                    {
                        href: '/personal/superannuation',
                        title: 'Superannuation and retirement',
                        description: 'Superannuation and retirement options',
                        icon: 'investing-super'
                    },
                    {
                        href: '/personal/international-travel',
                        title: 'International travel',
                        description: 'Foreign exchange, travel insurance, travel money card & international payments',
                        icon: 'foreignfx'
                    },
                ]
            },
            {
                href: '/learn/',
                title: 'Learn',
                description: '',
                submenus: [
                    {
                        href: '/personal/bank_accounts',
                        title: 'Bank accounts',
                        description: 'Everyday/savings & term deposits',
                        icon: 'bank-accounts'
                    },
                    {
                        href: '/personal/credit-cards',
                        title: 'Credit cards',
                        description: 'Low interest rate, rewards frequent flyer & platinum',
                        icon: 'card'
                    },
                    {
                        href: '/personal/home-loans',
                        title: 'Home loans',
                        description: 'Buying, refinancing & investing in property',
                        icon: 'home-loans'
                    },
                    {
                        href: '/personal/personal-loans',
                        title: 'Personal loans',
                        description: 'Debt consolidation, buying a new or used car, renovations and more',
                        icon: 'personal-loans'
                    },
                    {
                        href: '/personal/insurance',
                        title: 'Insurance',
                        description: 'Get on top of your home, life, income and car insurance',
                        icon: 'insurance'
                    },
                    {
                        href: '/personal/superannuation',
                        title: 'Superannuation and retirement',
                        description: 'Superannuation and retirement options',
                        icon: 'investing-super'
                    },
                    {
                        href: '/personal/international-travel',
                        title: 'International travel',
                        description: 'Foreign exchange, travel insurance, travel money card & international payments',
                        icon: 'foreignfx'
                    },
                ]
            }
        ]
    }


    createRoot(block).render(<Header {...data} />)
}