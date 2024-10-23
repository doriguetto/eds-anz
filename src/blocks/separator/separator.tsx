import {createRoot} from "react-dom/client";
import './separator.scss';
import ImagePreloader from "../hero/image.tsx";

const Separator = (props: SeparatorData) => {
    let separatorPicture;
    if (props.separatorPicture) {
        const pictureEl = props.separatorPicture;
        const img = {
            pictureEl,
            lazy: true,
        }
        separatorPicture = <ImagePreloader {...img}/>
    }
    return (
        <div className="text parbase">
            <p className="paragraph-text--regular padding-top--10px margin-bottom--30px">
                {separatorPicture}
            </p>
        </div>
    );
}

type SeparatorData = {
    separatorPicture?: HTMLPictureElement | null
}

export default function decorate(block: HTMLDivElement) {
    const separatorData = {
        separatorPicture: block.querySelector('picture')
    };
    createRoot(block).render(<Separator {...separatorData}/>)
}