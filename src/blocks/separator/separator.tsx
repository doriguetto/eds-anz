import {createRoot} from "react-dom/client";
import './separator.scss';

const Separator = () => {
    // let separatorPicture;
    // if (props.separatorPicture) {
    //     const pictureEl = props.separatorPicture;
    //     const img = {
    //         pictureEl,
    //         lazy: true,
    //     }
    //     separatorPicture = <ImagePreloader {...img}/>
    // }
    return (
      <div className="separator-element padding-top--10px margin-bottom--30px"/>
    );
}


export default function decorate(block: HTMLDivElement) {
    // const separatorData = {
    //     separatorPicture: block.querySelector('picture')
    // };
    createRoot(block).render(<Separator/>)
}