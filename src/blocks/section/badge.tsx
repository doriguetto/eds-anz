export type BadgeData = {
    icon?: HTMLPictureElement | null
    content?: Element
}

export default (props: BadgeData) => {
    return (
        <div className="container__item container__main__element none">
            {props.icon &&
                <p className=" padding-top--0px "
                   dangerouslySetInnerHTML={{__html: props.icon?.outerHTML}}/>
            }
            {props.content &&
                <div dangerouslySetInnerHTML={{__html: props.content?.outerHTML}}/>
            }
        </div>
    );
}