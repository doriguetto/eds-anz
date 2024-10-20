export type CardData = {
    heading?: Element | undefined
    button?: Element | undefined
    image?: Element | undefined,
}

export default (props: CardData) => {
    const button = props.button?.querySelector('a');
    return (
        <>
            <div className="container__item container__main__element     none">
                <div className="text parbase">
                    {props.heading &&
                        <div dangerouslySetInnerHTML={{__html: props.heading.outerHTML}}/>
                    }
                    {button && props.button &&
                        <>
                            <div className=" padding-top--50px "></div>
                            <a href={button.getAttribute('href') || '#'}
                            className="btn btn--blue btn--transparent"
                            aria-label="Learn more about Cyber Security Awareness Month"
                            data-clicktrack="btn-hp-cyber-ser">{props.button.textContent}</a>
                        </>
                    }
                    <br/>
                    <br/>
                </div>
            </div>
            {props.image &&
                <div className="container__item container__main__element     none">
                    <div className="textimage parbase">
                        <div className="image-text image-text--medium image-text--left   ">
                            <div className="clearfix">
                            </div>
                            <div className="clearfix">
                                <div className="image bg-transparent image--noborder">
                                    <div dangerouslySetInnerHTML={{__html: props.image.outerHTML}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}