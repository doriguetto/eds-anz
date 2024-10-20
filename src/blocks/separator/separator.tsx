import {createRoot} from "react-dom/client";
import './separator.scss';

const Separator = () => {
    return (
        <div className="text parbase">
            <p className="paragraph-text--regular padding-top--10px margin-bottom--30px">
                <img width="100%" height="10" src="/public/Line.png" alt=""></img>
            </p>
        </div>
    );
}

export default function decorate(block: HTMLDivElement) {
    createRoot(block).render(<Separator/>)
}