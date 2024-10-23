import {createRoot} from "react-dom/client";
import { useState} from 'react';
import './accordion.scss'

const Accordion = (props: AccordionData) => {
    const [open, setOpen] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const hover = () => {
        // const element = e.currentTarget;
        // element.classList.toggle('hover')
        setIsHover(!isHover);
    }
    const onClick = () => {
        // const element = e.currentTarget;
        // element.querySelector('.icon')?.classList.toggle('icon_arrow_down');
        // element.querySelector('.icon')?.classList.toggle('icon_arrow_up');
        setOpen(!open)
    }
    return (
        <div className="container">
            <div className="grid">
                <div className="clearfix">
                    <div className="container__main">
                        <div className="aem__component clearfix">
                            <div className="container__main__element">
                                <div className="accordion accordion--open">
                                    {props.title &&
                                        <div
                                            onMouseOver={hover}
                                            onMouseOut={hover}
                                            onClick={onClick}
                                            className={`accordion__trigger ${isHover ? 'hover' : ''}`}>
                                            <div className="delta semibold text--html-blue-link"
                                                 dangerouslySetInnerHTML={{__html: props.title?.outerHTML}}>
                                            </div>
                                            <span aria-hidden="false"
                                                  className={`box--right icon ${open ? 'icon_arrow_top' : 'icon_arrow_down'}`}></span>
                                        </div>
                                    }
                                    <div className="accordion__content" style={{ display : open ? 'none' : 'block'}}>
                                        {props.content &&
                                            <div dangerouslySetInnerHTML={{__html: props.content.outerHTML}}>
                                            </div>
                                        }
                                        {props.disclaimer &&
                                            <div id="disclaimer"
                                                 dangerouslySetInnerHTML={{__html: props.disclaimer.outerHTML}}>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


type AccordionData = {
    title?: Element | null,
    content?: Element | null,
    disclaimer?: Element | null
}

export default function decorate(block: HTMLDivElement) {

    const accordionData: AccordionData = {
        title: block.firstElementChild?.children[0],
        content: block.firstElementChild?.children[1],
        disclaimer: block.firstElementChild?.children[2]
    }
    createRoot(block).render(<Accordion {...accordionData}/>)
}