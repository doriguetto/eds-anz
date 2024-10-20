import {useState} from "react";

export type SubMenu = {
    href: string,
    title: string,
    description: string,
    icon: string
}

export type MenuProps = Menu & {
    onMenuClick: (e: any, menu: string) => void
    isMenuOpen: boolean
}

export type Menu = {
    href: string,
    title: string,
    description: string,
    submenus: SubMenu[],
}

export type Data = {
    menus: Menu[]
}

export default (props: Data) => {
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