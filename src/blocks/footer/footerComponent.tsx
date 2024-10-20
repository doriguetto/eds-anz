
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

export default (props: Data) => {
    return (
        <>
            {props.rows.map((row) =>
                row.type === 'menu' ?
                    <MenuRow {...row}/> :
                    <LinkRow {...row}/>)}
        </>
    )
}

export type Row = {
    type: 'menu' | 'links';
    text?: string;
    menus: Menu[]
}
export type Data = {
    rows: Row[],
}

export type Menu = {
    title: string;
    link: string;
    subMenus?: SubMenu[]
}

export type MenuProps = Menu & {
    children: ReactElement
}

export type SubMenu = {
    title?: string;
    link?: string;
    icon?: ReactNode;
}