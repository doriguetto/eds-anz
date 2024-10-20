export type BadgeData = {
    icon?: Element | undefined
    content?: Element | undefined
}

export default (props: BadgeData) => {
    return (
        <div className="container__item container__main__element none">
            {props.icon &&
                props.icon.textContent &&
                props.icon.textContent.trim().toLowerCase() === 'security' &&
                <p className=" padding-top--0px ">
                    <img src="/public/badge-security.png" height="30" alt="Security"/>
                </p>
            }
            {props.content &&
                <div dangerouslySetInnerHTML={{__html: props.content?.outerHTML}}/>
            }
        </div>
    );
}