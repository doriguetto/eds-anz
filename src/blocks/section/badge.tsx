import ImagePreloader from "../hero/image.tsx";

export type BadgeData = {
    iconPicture?: HTMLPictureElement | null
    content?: Element
}

export default (props: BadgeData) => {
    let icon;
    if (props.iconPicture) {
        const pictureEl = props.iconPicture;
            const img = {
                pictureEl,
                lazy: true
            }
            icon = <ImagePreloader {...img}/>
    }

    return (
        <div className="container__item container__main__element none badge">
            {icon &&
                <p className=" padding-top--0px ">
                    {icon}
                </p>
            }
            {props.content &&
                <div dangerouslySetInnerHTML={{__html: props.content?.outerHTML}}/>
            }
        </div>
    );
}